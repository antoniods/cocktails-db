import React from 'react';
import './recipe.styles.css';

export const Recipe = props => (
<div className="recipe-container">
    {/* <img 
    alt="recipe" 
    src={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.recipe.idMeal}`} //?set=set2&size=180x180
    /> */}
    
    <h2> {props.recipe.strMeal}</h2>
    <p> {props.recipe.strCategory}</p>
</div>
);