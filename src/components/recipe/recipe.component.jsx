import React from 'react';
import './recipe.styles.css';

export const Recipe = props => (
<div className="recipe-container">
    <img 
    alt="recipe" 
    src={`https://spoonacular.com/recipeImages/${props.ricetta.id}-90x90.${props.ricetta.imageType}`}
    />
    
    <h2> {props.ricetta.id}</h2>
    <p> {props.ricetta.title}</p>
</div>
);

