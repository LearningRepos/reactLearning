import React from "react";

class JokeRow extends React.Component {
  render() {
    return (
      <div className="JokeRow">
        <p>{this.props.jokeMessage}</p>
      </div>
    );
  }
}

export default JokeRow;
