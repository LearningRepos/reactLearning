import React, { Component } from "react";
import Die from "./Die";
import "../../css/Dice.css";

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
            disableButtons={this.props.disableButtons}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
