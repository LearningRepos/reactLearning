import React from "react";

class Pokecard extends React.Component {
  transformNumber() {
    let originalNumber = this.props.id + "";
    while (true) {
      if (originalNumber.length === 3) {
        break;
      }
      originalNumber = "0" + originalNumber;
    }
    return originalNumber;
  }
  render() {
    return (
      <div className="Pokecard">
        <h2>{this.props.name}</h2>
        <img
          className="Pokecard-Image"
          src={
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
            this.transformNumber() +
            ".png"
          }
          alt="Pokemon"
        />
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
