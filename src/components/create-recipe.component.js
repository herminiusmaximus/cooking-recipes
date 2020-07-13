import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeProcedure = this.onChangeRecipeProcedure.bind(this);

        this.state = {
            recipe_name: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_procedure: '',
        }
    }

    onChangeRecipeName(e) {
        this.setState({
            recipe_name: e.target.value
        });
    }

    onChangeRecipeDescription(e) {
        this.setState({
            recipe_description: e.target.value
        });
    }

    onChangeRecipeIngredients(e) {
        this.setState({
            recipe_ingredients: e.target.value
        });
    }

    onChangeRecipeProcedure(e) {
        this.setState({
            recipe_procedure: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Recipe Name: ${this.state.recipe_name}`);
        console.log(`Recipe Description: ${this.state.recipe_description}`);
        console.log(`Recipe Ingredients: ${this.state.recipe_ingredients}`); 
        console.log(`Recipe Procedure: ${this.state.recipe_procedure}`);

        const newRecipe = {
            recipe_name: this.state.recipe_name,
            recipe_description: this.state.recipe_description,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_procedure: this.state.recipe_procedure
        };

        axios.post('http://localhost:4000/recipes/add', newRecipe)
            .then(res => console.log(res.data));
        
        this.setState({
            recipe_name: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_procedure: '',
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Crate New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.recipe_name}
                            onChange={this.onChangeRecipeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.recipe_description}
                            onChange={this.onChangeRecipeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.recipe_ingredients}
                            onChange={this.onChangeRecipeIngredients}
                        />
                    </div>
                    <div className="form-group">
                        <label>Procedure: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.recipe_procedure}
                            onChange={this.onChangeRecipeProcedure}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}