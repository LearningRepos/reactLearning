import React from "react";
import Coin from "./Coin";

class Coinflip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["heads", "tails"],
      count: 0,
      heads: 0,
      tails: 0,
      currentside: "heads",
    };
  }
  flip() {
    const newSide = this.state.options[Math.round(Math.random())];
    this.setState({ count: this.state.count + 1 });
    if (newSide === "heads") {
      this.setState({
        count: this.state.count + 1,
        heads: this.state.heads + 1,
        currentside: "heads",
      });
    }
    if (newSide === "tails") {
      this.setState({
        count: this.state.count + 1,
        tails: this.state.tails + 1,
        currentside: "tails",
      });
    }
  }
  render() {
    return (
      <div>
        <Coin side={this.state.currentside} />
        <p>
          Out of {this.state.count} flips, {this.state.heads} were heads and{" "}
          {this.state.tails} were tails
        </p>
        <button onClick={this.flip.bind(this)}>Flip the coin</button>
      </div>
    );
  }
}

export default Coinflip;
