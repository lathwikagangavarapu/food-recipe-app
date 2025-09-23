import React from 'react';

const RecipeList = ({ recipes, onSelect, favorites, onFavorite }) => {
  return (
    <div className="recipe-list">
      <h2>{recipes.length > 0 && favorites ? 'My Favorite Recipes' : 'Recipes'}</h2>
      {recipes.length === 0 ? (
        <p>{favorites ? 'No favorite recipes yet. Add some!' : 'No recipes yet. Add one below!'}</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <div onClick={() => onSelect(recipe)} className="recipe-card-content">
                <div className="recipe-image">{recipe.image || '🍽️'}</div>
                <h3>{recipe.title}</h3>
                <p className="recipe-time">⏱️ {recipe.cookTime || 'N/A'}</p>
                <p className={`recipe-difficulty ${recipe.difficulty ? recipe.difficulty.toLowerCase() : ''}`}>
                  {recipe.difficulty || 'N/A'}
                </p>
              </div>
              <button onClick={() => onFavorite(recipe)} className="favorite-btn">
                {favorites.some(f => f.title === recipe.title) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;