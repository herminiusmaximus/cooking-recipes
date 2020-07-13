import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecipe extends Component {

    constructor(props) {
        super(props);

        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeProcedure = this.onChangeRecipeProcedure.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            recipe_name: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_procedure: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                recipe_name: response.data.recipe_name,
                recipe_description: response.data.recipe_description,
                recipe_ingredients: response.data.recipe_ingredients,
                recipe_procedure: response.data.recipe_procedure
            })
        })
        .catch(function (error){
            console.log(error);
        })
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

        const object = {
            recipe_name: this.state.recipe_name,
            recipe_description: this.state.recipe_description,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_procedure: this.state.recipe_procedure
        };

        console.log(object);
        axios.post('http://localhost:4000/recipes/update/'+this.props.match.params.id, object)
        .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Update Recipe</h3>
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
                        <input type="submit" value="Update Recipe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}