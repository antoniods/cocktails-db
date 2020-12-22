import React, {Component} from 'react';
import { RecipeList } from './components/recipe-list/recipe-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
   super();
 
     this.state = {
       ricette : [],
       searchField : ''
     };
 }
 
 componentDidMount(){
   fetch('https://api.spoonacular.com/recipes')
   .then(response => response.json())
   .then(recipes => this.setState({ricette:recipes}));
   }
 
    render() {
   
     
     // const monster = this.state.monsters;
     // const searchField = this.state.searchField; al posto di scrivere cosi semplifico ....
     const {ricette, searchField } = this.state;
     const filteredRecipes = ricette.filter(ricette => 
       ricette.title.toLowerCase().includes(searchField.toLowerCase()) //toLowerCase per il render e per stare sicuri nel caso si scriva con in maiuscolo
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