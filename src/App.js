import React, {Component} from 'react';
import { RecipeList } from './components/recipe-list/recipe-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
   super();
 
     this.state = {
       recipes : [],
       searchField : ''
     };
 }
 
 componentDidMount(){
   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
   .then(response => response.json())
   .then(users => this.setState({recipes:users}));
   }
 
    render() {
   
     
     // const monster = this.state.monsters;
     // const searchField = this.state.searchField; al posto di scrivere cosi semplifico ....
     const {recipes, searchField } = this.state;
     const filteredRecipes = recipes.filter (recipes => 
       recipes.strMeal.toLowerCase().includes(searchField.toLowerCase()) //toLowerCase per il render e per stare sicuri nel caso si scriva con in maiuscolo
       )
 
   
     return (
     <div className="App">
       <h1>The Best Recipes website</h1>
       <SearchBox
         placeholder='Search the recipe' 
         handleChange={e => this.setState({ searchField: e.target.value} )}
         />
       <RecipeList recipes={filteredRecipes}/>               
     </div>
    );
  }
 }
 export default App;