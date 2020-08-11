import React from "react";
import Die from "./Die";

class DiceRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d1: 1, d2: 6, isShaking: false };
  }
  changeNumber() {
    const r1 = Math.floor(Math.random() * 6 + 1);
    const r2 = Math.floor(Math.random() * 6 + 1);
    this.setState({ d1: r1, d2: r2 });
  }
  render() {
    function changeEverything() {
      this.setState({ isShaking: true });
      const numChange = setTimeout(this.changeNumber(), 1000);
      numChange();
      // setTimeout(function(){ changeNumber(); }, 1000);

      // setTimeout(function () {
      //   alert("Hello");
      // }, 1000);
    }
    const shak = this.state.isShaking;
    return (
      <div className="DiceRolls">
        <div className={shak ? "DiceRollShake" : ""}>
          <Die
            className={
              this.isShaking ? "DiceRoll-Die DiceRollShake" : "DiceRoll-Die"
            }
            dots={this.state.d1}
          />
          <Die
            className={
              this.isShaking ? "DiceRoll-Die DiceRollShake" : "DiceRoll-Die"
            }
            dots={this.state.d2}
          />
        </div>
        <button
          onClick={changeEverything.bind(this)}
          onAnimationEnd={console.log(1)}
          className="DiceRoll-Button"
        >
          Roll Dice
        </button>
      </div>
    );
  }
}

export default DiceRoll;
