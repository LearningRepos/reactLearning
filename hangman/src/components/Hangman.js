import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./pictures/0.jpg";
import img1 from "./pictures/1.jpg";
import img2 from "./pictures/2.jpg";
import img3 from "./pictures/3.jpg";
import img4 from "./pictures/4.jpg";
import img5 from "./pictures/5.jpg";
import img6 from "./pictures/6.jpg";
import randomWord from "./words.js";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord.randomWord(),
      buttonArea: true,
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
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

  // Restarts Game by restarting parts of setState
  restart() {
    this.setState({
      nWrong: 0,
      answer: randomWord.randomWord(),
      buttonArea: true,
      guessed: new Set(),
    });
  }

  /** render: render game */
  render() {
    if (this.state.nWrong === this.props.maxWrong) {
      this.state.buttonArea = false;
    }
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={this.state.nWrong + " Wrong Guesses Made"}
        />
        <p>Number Wrong: {this.state.nWrong}</p>
        <p className="Hangman-word">
          {this.state.buttonArea ? this.guessedWord() : this.state.answer}
        </p>
        <p>{this.state.buttonArea ? null : "You Lose"}</p>
        <p className="Hangman-btns">{this.generateButtons()}</p>
        <br />
        <button className="nostyle" onClick={this.restart.bind(this)}>
          Restart Game
        </button>
      </div>
    );
  }
}

export default Hangman;
