import React, { Component } from 'react';
import AppCss from './../App.css';
class PokemonListing extends Component {
    render() {
        return (
            
            <div className="pokemon-list-card">

                <button className="pokemon-searc-btn" onClick={() => this.props.pokemonDetails(this.props.pokemon.url)}> 
                    {this.props.pokemon.name}
                    </button>
                    
            </div>
            
            
            
        );
    }
}


export default PokemonListing;