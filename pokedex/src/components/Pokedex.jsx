import React from "react";
import Pokecard from "./Pokecard";

class Pokedex extends React.Component {
  pokemonMapper() {
    const pokeHand = this.props.pokemonList.map(function (pokemons) {
      return (
        <Pokecard
          id={pokemons.id}
          name={pokemons.name}
          type={pokemons.type}
          base_experience={pokemons.base_experience}
        />
      );
    });
    return pokeHand;
  }

  render() {
    return <div>{this.pokemonMapper()}</div>;
  }
}

export default Pokedex;
