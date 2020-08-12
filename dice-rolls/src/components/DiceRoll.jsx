import React from "react";
import Die from "./Die";

class DiceRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d1: 1, d2: 6,roll:"Roll Dice", isShaking: false, buttonDisable:"" };
  }
  changeNumber() {
    //generates random number for dice and changes number of dots
    const r1 = Math.floor(Math.random() * 6 + 1);
    const r2 = Math.floor(Math.random() * 6 + 1);
    this.setState({ d1: r1, d2: r2 });
  }
  render() {
    function animateAndChangeButton() {
      this.setState({ isShaking: true, roll:"Rolling...", buttonDisable:"disabled" });
      setTimeout(this.changeNumber.bind(this) , 600);
    }
    function changeStateToNormal(){
      this.setState({ isShaking: false, roll:"Roll Dice",buttonDisable:"" })
    }
    const isShake = this.state.isShaking;
    return (
      <div className="DiceRolls" onAnimationEnd={changeStateToNormal.bind(this)}>
        <div className={isShake ? "DiceRollShake" : ""}>
          <Die
            className={"DiceRoll-Die"}
            dots={this.state.d1}
          />
          <Die
            className={"DiceRoll-Die"}
            dots={this.state.d2}
          />
        </div>
        <button
          onClick={animateAndChangeButton.bind(this)}
          className="DiceRoll-Button"
          disabled={this.state.buttonDisable}
        >
          {this.state.roll}
        </button>
      </div>
    );
  }
}

export default DiceRoll;
