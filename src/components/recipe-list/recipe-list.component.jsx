import React from 'react';
import { Recipe } from '../recipe/recipe.component';
import './recipe-list.styles.css';

export const RecipeList = props => (
    <div className='recipe-list'>
        {props.recipes.map(recipe => (
         <Recipe key={recipe.idMeal} recipe={recipe} />
        ))}
    </div>
);

export default RecipeList;