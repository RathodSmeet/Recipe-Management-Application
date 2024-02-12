import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/information?apiKey=e73109644ee84c0ba8e49f1ee04dba83',{
            headers: {
                accept: 'application/json',
          Authorization: `Bearer `
              }
        });
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
