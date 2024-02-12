import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=6&tags=vegetarian&cuisine=indian&apiKey=cd601bdf625c44a3bf204d5c671d6d78');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);
  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <h1>Recipes</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Ready in {recipe.readyInMinutes} minutes</p>
                <p className="card-text">Servings: {recipe.servings}</p>
                <button className="btn btn-primary" onClick={() => handleViewDetails(recipe)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRecipe.title}</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedRecipe.image} alt={selectedRecipe.title} width={'300px'}/>
                <p>Ready in {selectedRecipe.readyInMinutes} minutes</p>
                <p><b> Servings: </b>{selectedRecipe.servings}</p>
                <p><b> Instructions:</b> {selectedRecipe.instructions}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeList;