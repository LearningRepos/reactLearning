import React from "react";
import Pokedex from "./Pokedex";

const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(pokemon);

const firstHand = pokemon.slice(0, Math.floor(pokemon.length / 2));
let firstCount = 0;
for (let tempExp of firstHand) {
  firstCount += tempExp.base_experience;
}

const secondHand = pokemon.slice(Math.floor(pokemon.length / 2));
let secondCount = 0;
for (let tempExp of secondHand) {
  secondCount += tempExp.base_experience;
}

var whoWon = firstCount > secondCount ? true : false;

class Pokegame extends React.Component {
  render() {
    return (
      <div>
        <h1 className={whoWon ? "Success" : "Fail"}>
          Team 1 {whoWon ? "Wins!" : "Loses"}
        </h1>
        <h3>Total Exp: {firstCount}</h3>
        <Pokedex pokemonList={firstHand} />

        <h1 className={whoWon ? "Fail" : "Success"}>
          Team 2 {whoWon ? "Loses" : "Wins"}
        </h1>
        <h3>Total Exp: {secondCount}</h3>
        <Pokedex pokemonList={secondHand} />
      </div>
    );
  }
}

export default Pokegame;
