import React, { Component } from 'react';
import pokelogo from './pokemon.png';
import './App.css';
import {connect} from "react-redux";
import {setPokemon, pokemonDetails} from './ducks/pokemon';
import PokemonListing from './components/PokemonListing';
import PokemonData from './components/PokemonData/PokemonData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={pokelogo} className="App-logo" alt="logo" />
          <h1>POKEDEX</h1>
          <h4>I wanna be the very best, like no one ever was!</h4>
        </div>
        <div>
          <div className="pokemon-search"><input type="text"/><button onClick={this.props.setPokemon}>search for pokemon</button></div>

          <div className="pokemon-list-yo">
            {console.log(this.props.pokemon.results)}
              {this.props.pokemon.results.map((element, index)=>{
                return(
                  <PokemonListing pokemon={element} key={index} pokemonDetails={this.props.pokemonDetails} />
                )
              })}
          </div>
          <div className="pokemon-display-case">
            <PokemonData selectedPokemon={this.props.selectedPokemon} />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps, {setPokemon, pokemonDetails})(App);
// export default App;
