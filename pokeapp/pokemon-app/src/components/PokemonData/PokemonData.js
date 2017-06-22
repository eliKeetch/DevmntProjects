import React, { Component } from 'react';


class PokemonData extends Component {
    render() {
        return (
            <div>
            {this.props.selectedPokemon ? 
            <div>
                <img src={this.props.selectedPokemon.sprites.front_shiny} />
                <h1 className="pokemon-title">{this.props.selectedPokemon.name}</h1>
                <p className="pokemon-p-details"><span className="item-bold">Weight:</span> {this.props.selectedPokemon.weight} KG </p>
                <p className="pokemon-p-details"><span className="item-bold">Height:</span> {this.props.selectedPokemon.height} M</p>
                <p className="pokemon-p-details"><span className="item-bold">Species:</span> {this.props.selectedPokemon.species.name} </p>
                <div className="p-and-ul-div"><p className="pokemon-p"><span className="item-bold">Abilities:</span> <ul className="pokemon-ul">{this.props.selectedPokemon.abilities.map((element, index)=> {
                    console.log("inside ability map",  element.ability.name)
                    return (
                        
                        <li> {element.ability.name} </li>
                        
                    )
                    })} 
                    </ul></p></div>
                <div className="p-and-ul-div"><p className="pokemon-p"> Stats: <ul className="pokemon-ul">{this.props.selectedPokemon.stats.map((element, index)=> {
                    return (
                            <li><span className="item-bold">{element.stat.name}:</span> {element.base_stat}</li>
                    )
                    })}  
                    </ul></p> </div> 

            </div>
            : ""}
            </div>
        );
    }
}
export default PokemonData;