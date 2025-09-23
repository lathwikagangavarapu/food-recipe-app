import React, { useState } from 'react';

const RecipeDetail = ({ recipe, onBack, favorites, onFavorite }) => {
  const defaultServings = recipe.servings ? parseInt(recipe.servings) : 4;
  const [selectedServings, setSelectedServings] = useState(defaultServings);

  const adjustQuantity = (quantity, factor) => {
    const match = quantity.match(/(\d+(\.\d+)?)/);
    if (match) {
      const num = parseFloat(match[0]);
      const adjusted = (num * factor).toFixed(1).replace(/\.0$/, '');
      return quantity.replace(match[0], adjusted);
    }
    return quantity;
  };

  const factor = selectedServings / defaultServings;

  const cookingTime = recipe.prepTime && recipe.cookTime ? `${recipe.prepTime} prep + ${recipe.cookTime} cook` : recipe.prepTime || recipe.cookTime || '';

  return (
    <div className="recipe-detail">
      <div className="detail-header">
        <button onClick={onBack}>Back to List</button>
      </div>

      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="header-meta">
          <p><strong>Cooking Time:</strong> {cookingTime}</p>
          <p><strong>Servings:</strong> {selectedServings}</p>
        </div>
      </div>

      <div className="ingredients-section">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ing, i) => {
            let display = '';
            if (typeof ing === 'string') {
              display = factor !== 1 ? adjustQuantity(ing, factor) : ing;
            } else {
              const adjustedQuantity = factor !== 1 ? adjustQuantity(ing.quantity, factor) : ing.quantity;
              display = `${ing.name} - ${adjustedQuantity}${ing.substitutes ? ` (Substitutes: ${ing.substitutes.join(', ')})` : ''}`;
            }
            return <li key={i}>{display}</li>;
          })}
        </ul>
      </div>

      <div className="steps-section">
        <h2>Steps</h2>
        <ol>
          {Array.isArray(recipe.instructions) ? recipe.instructions.map((inst, i) => (
            <li key={i} className="step-item">
              <p>{inst}</p>
            </li>
          )) : <li>No instructions available</li>}
        </ol>
      </div>

      <div className="nutrition-section">
        <h2>Nutritional Info</h2>
        {recipe.nutrition ? (
          <p>Calories: {recipe.nutrition.calories} | Protein: {recipe.nutrition.protein}g | Carbs: {recipe.nutrition.carbs}g | Fats: {recipe.nutrition.fats}g</p>
        ) : (
          <p>Nutritional information not available.</p>
        )}
      </div>

      <div className="action-buttons">
        <button onClick={() => onFavorite(recipe)} className="favorite-btn">
          {favorites.some(f => f.title === recipe.title) ? '❤️' : '🤍'}
        </button>
      </div>

      {recipe.tips && (
        <div className="tips">
          <h3>Tips:</h3>
          <ul>
            {recipe.tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;