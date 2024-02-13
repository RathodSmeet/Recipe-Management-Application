import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, instructions };
    onAddRecipe(newRecipe);
    setTitle('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Recipe Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      /><br></br>
      <textarea 
        placeholder="Recipe Instructions" 
        value={instructions} 
        onChange={(e) => setInstructions(e.target.value)} 
      /><br></br>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
