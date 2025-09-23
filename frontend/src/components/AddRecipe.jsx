import React, { useState } from 'react';

const AddRecipe = ({ onAdd, categories }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      description,
      category,
      ingredients: ingredients.split('\n').filter(line => line.trim()),
      instructions: instructions.split('\n').filter(line => line.trim()),
    };
    onAdd(newRecipe);
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="add-recipe">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div>
          <label>Ingredients (one per line):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Instructions (one per line):</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;