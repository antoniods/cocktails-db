import React from 'react';
import { Recipe } from '../recipe/recipe.component';
import './recipe-list.styles.css';

export const RecipeList = props => (
    <div className='recipe-list'>
        {props.ricette.map(ricetta => (
         <Recipe key={ricetta.id} ricetta={ricetta} />
        ))}
    </div>
);

// export default RecipeList;