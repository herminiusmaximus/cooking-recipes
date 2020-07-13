import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_name}</td>
        <td>{props.recipe.recipe_description}</td>
        <td>{props.recipe.recipe_ingredients}</td>
        <td>{props.recipe.recipe_procedure}</td>
        <td>
            <Link to={"/edit/"+props.recipe._id}>Edit</Link>
        </td>
    </tr>
)

export default class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.state = {recipes: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                this.setState({ recipes: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    recipesList() {
        return this.state.recipes.map(function(currentRecipe, i){
            return <Recipe recipe={currentRecipe} key={i}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Recipes List</h3>
                <table className="table table-striped" style={{ marginTop: 20}} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Ingredients</th>
                            <th>Procedure</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.recipesList() }
                    </tbody>
                </table>
            </div>

        )
    }
}