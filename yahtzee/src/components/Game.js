import React, { Component } from "react";
import Dice from "./dice-components/Dice";
import ScoreTable from "./score-components/ScoreTable";
import "../css/Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

//
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
      ],
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.disableButtons = this.disableButtons.bind(this);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      //randomizes dice numbers
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      //locks if rolls = 0
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      //decrements rolls
      rollsLeft: st.rollsLeft - 1,
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    this.setState((st) => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1),
      ],
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    if (!this.state.scores[rulename]) {
      this.setState((st) => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        rollsLeft: NUM_ROLLS,
        locked: Array(NUM_DICE).fill(false),
      }));
      this.roll();
    }
  }

  disableButtons() {
    return this.state.locked.every((x) => x) && this.state.rollsLeft === 0;
  }

  render() {
    // console.log(this.state.locked);
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              disableButtons={this.disableButtons}
            />
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={this.state.locked.every((x) => x)}
                onClick={this.roll}
              >
                {this.state.rollsLeft} Rerolls Left
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
