import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { faDiceFour } from "@fortawesome/free-solid-svg-icons";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getDiceIcon(dots) {
    const diceArray = [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ];
    return diceArray[dots - 1];
  }
  render() {
    return (
      <div className="Die">
        <FontAwesomeIcon
          className="Die-Die"
          icon={this.getDiceIcon(this.props.dots)}
          size="10x"
        />
      </div>
    );
  }
}

export default Dice;
