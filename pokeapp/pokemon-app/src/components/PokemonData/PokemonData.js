import React, { Component } from 'react';


class PokemonData extends Component {
    render() {
        return (
            <div>
            {this.props.selectedPokemon ? 
            <div>
                <img src={this.props.selectedPokemon.sprites.front_default} />
                <h1 className="pokemon-title">{this.props.selectedPokemon.name}</h1>
                <p className="pokemon-p-details">Weight: {this.props.selectedPokemon.weight} KG </p>
            </div>
            : ""}
            </div>
        );
    }
}
export default PokemonData;