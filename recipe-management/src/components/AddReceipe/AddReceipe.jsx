import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeAdd = ({ onAdd }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState('');
  const [servings, setServings] = useState('');

  const handleAdd = () => {
    const newRecipe = {
      title,
      readyInMinutes,
      servings,
    };

    onAdd(newRecipe);

    // Reset input fields
    setTitle('');
    setReadyInMinutes('');
    setServings('');

    // Redirect to the main page
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add Recipe</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Ready in Minutes"
          value={readyInMinutes}
          onChange={(e) => setReadyInMinutes(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAdd}>
        Add Recipe
      </button>
    </div>
  );
};

export default RecipeAdd;