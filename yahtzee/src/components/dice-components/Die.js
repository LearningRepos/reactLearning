import React, { Component } from "react";
import "../../css/Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

class Die extends Component {
  constructor(props) {
    super(props);
    this.changeLock = this.changeLock.bind(this);
  }
  changeLock(evt) {
    console.log(evt.target);
    this.props.handleClick(parseInt(evt.target.value));
    // console.log(evt.target);
  }
  diceNumber() {
    let diceArr = [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ];
    return diceArr[this.props.val];
  }
  render() {
    return (
      <div>
        <button
          className={"Die"}
          style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
          onClick={this.changeLock}
          value={this.props.idx}
          disabled={this.props.disableButtons()}
        >
          <FontAwesomeIcon
            className={"icon"}
            icon={
              [
                faDiceOne,
                faDiceTwo,
                faDiceThree,
                faDiceFour,
                faDiceFive,
                faDiceSix,
              ][this.props.val - 1]
            }
          />
        </button>
      </div>
    );
  }
}

// <FontAwesomeIcon
//   icon={
//     [
//       faDiceOne,
//       faDiceTwo,
//       faDiceThree,
//       faDiceFour,
//       faDiceFive,
//       faDiceSix,
//     ][this.props.val - 1]
//   }
//   style={{ color: this.props.locked ? "grey" : "black" }}
//   onClick={this.changeLock}
//   value={this.props.idx}
// />

export default Die;
