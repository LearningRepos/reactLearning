import React from "react";

class AlphaButtons extends React.Component {
  render() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        className={this.state.buttonArea ? null : "disabled"}
      >
        {ltr}
      </button>
    ));
  }
}

export default AlphaButtons;
