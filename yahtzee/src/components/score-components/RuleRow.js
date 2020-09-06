import React, { Component } from "react";
import "../../css/RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // console.log(this.props.name);
    this.props.doScore();
    this.setState({ isDisabled: true });
  }
  render() {
    let descriptions = {
      Ones: "Sums up all ones",
      Twos: "Sums up all twos",
      Threes: "Sums up all threes",
      Fours: "Sums up all fours",
      Fives: "Sums up all fives",
      Sixes: "Sums up all sixes",
      "Three of Kind": "Sums up all dice if 3 of number present",
      "Four of Kind": "Sums up all dice if 4 of number present",
      "Full House": "Gets 25 points if 3 of 1 value and 2 of another value",
      "Small Straight": "Gets 30 points if 4+ values in a row",
      "Large Straight": "Gets 40 points if 5 values in a row",
      Yahtzee: "Gets 50 points if all values the same",
      Chance: "Sums up total of all dice",
    };
    let desc = descriptions[this.props.name];
    return (
      <tr
        className={
          this.state.isDisabled
            ? "RuleRow RuleRow-disabled"
            : "RuleRow RuleRow-active"
        }
        onClick={this.handleClick}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {this.state.isDisabled ? this.props.score : desc}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
