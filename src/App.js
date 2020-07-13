import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateRecipe from "./components/create-recipe.component";
import EditRecipe from "./components/edit-recipe.component";
import RecipeList from "./components/recipe-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Cooking recipes app</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Recipes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Recipe</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={RecipeList} />
          <Route path="/edit/:id" component={EditRecipe} />
          <Route path="/create" component={CreateRecipe} />
        </div>        
      </Router>
    );
  }
}

export default App;