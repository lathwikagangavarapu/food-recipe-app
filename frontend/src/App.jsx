import { useState, useEffect } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipe from './components/AddRecipe'
import RecipeDetail from './components/RecipeDetail'
import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import recipesData from './data/recipes.js'
import './App.css'

function RecipeApp() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const { getAuthHeaders } = useAuth()

  useEffect(() => {
    // Load recipes from static data
    const allRecipes = Object.entries(recipesData).flatMap(([category, recipes]) =>
      recipes.map(r => ({ ...r, category }))
    )
    setRecipes(allRecipes)
    setLoading(false)
  }, [])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [view, setView] = useState('home')
  const [selectedDiet, setSelectedDiet] = useState('All')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const { logout } = useAuth()

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const categories = ['All', 'Rice Varieties', 'Curries', 'Breakfast', 'Snacks', 'Sweets', 'Pickles', 'Breads', 'Beverages', 'Vegetable Dishes', 'Non-Veg']

  const filteredRecipes = recipes.filter(r =>
    (selectedCategory === 'All' || r.category === selectedCategory) &&
    (selectedDiet === 'All' || r.diet === selectedDiet) &&
    (selectedRegion === 'All' || r.region === selectedRegion) &&
    (searchTerm === '' ||
     r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     r.ingredients.some(ing => (typeof ing === 'string' ? ing : ing.name).toLowerCase().includes(searchTerm.toLowerCase())))
  )

  const displayedRecipes = view === 'favorites' ? recipes.filter(r => favorites.some(f => f.title === r.title)) : filteredRecipes

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe])
  }

  const toggleFavorite = (recipe) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.title === recipe.title)
      if (isFav) {
        return prev.filter(f => f.title !== recipe.title)
      } else {
        return [...prev, recipe]
      }
    })
  }

  const addToShoppingList = (items) => {
    alert(`Added to shopping list: ${items.join(', ')}`)
  }

  const addToMealPlanner = (recipe) => {
    alert(`Added ${recipe.title} to meal planner`)
  }

  const shareRecipe = (recipe) => {
    alert(`Sharing ${recipe.title}`)
  }

  return (
    <div className="app">
      {selectedRecipe ? (
        <div className="recipe-modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} favorites={favorites} onFavorite={toggleFavorite} />
          </div>
        </div>
      ) : (
        <>
          <header className="app-header">
            <div className="logo">🍳 Cook Recipe</div>
            <button className="profile-icon" onClick={logout}>🚪 Logout</button>
          </header>
          <main className="main-content">
            {view === 'home' && (
              <div className="home-screen">
                <section className="trending">
                  <h3>Trending Recipes</h3>
                  <div className="trending-scroll">
                    {recipes.slice(0, 5).map(recipe => (
                      <div key={recipe.title} className="trending-item" onClick={() => setSelectedRecipe(recipe)}>
                        <h4>{recipe.title}</h4>
                        <p>{recipe.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="categories-grid">
                  <h3>Categories</h3>
                  <div className="grid">
                    {categories.slice(1).map(cat => (
                      <button
                        key={cat}
                        className="category-card"
                        onClick={() => { setSelectedCategory(cat); setView('list'); }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {view === 'list' && (
              <div className="list-screen">
                <div className="filter">
                  <h3>Browse by Category</h3>
                  <div className="category-buttons">
                    {categories.slice(1).map(cat => (
                      <button
                        key={cat}
                        className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                    <button
                      className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('All')}
                    >
                      All
                    </button>
                  </div>
                </div>
                <RecipeList recipes={filteredRecipes} onSelect={setSelectedRecipe} favorites={favorites} onFavorite={toggleFavorite} />
              </div>
            )}
            {view === 'favorites' && (
              <div className="home-screen">
                <section className="trending">
                  <h3>Your Favorite Recipes</h3>
                  <div className="trending-scroll">
                    {recipes.filter(r => favorites.some(f => f.title === r.title)).slice(0, 10).map(recipe => (
                      <div key={recipe.title} className="trending-item" onClick={() => setSelectedRecipe(recipe)}>
                        <h4>{recipe.title}</h4>
                        <p>{recipe.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {view === 'profile' && (
              <div className="profile-screen">
                <h2>Profile</h2>
                <p>Profile features coming soon.</p>
              </div>
            )}
          </main>
          <nav className="bottom-nav">
            <button className={`nav-btn ${view === 'home' ? 'active' : ''}`} onClick={() => { setView('home'); setSearchTerm(''); }}>
              🏠 Home
            </button>
            <button className={`nav-btn ${view === 'favorites' ? 'active' : ''}`} onClick={() => { setView('favorites'); setSearchTerm(''); }}>
              ❤️ Favorites
            </button>
          </nav>
        </>
      )}
    </div>
  )
}

function App() {
  const { isAuthenticated } = useAuth()
  const [authView, setAuthView] = useState('login')

  if (!isAuthenticated) {
    return (
      <div className="app">
        {authView === 'login' ? (
          <Login onSwitchToSignup={() => setAuthView('signup')} />
        ) : (
          <Signup onSwitchToLogin={() => setAuthView('login')} />
        )}
      </div>
    )
  }

  return <RecipeApp />
}

export default function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
