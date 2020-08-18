import React from "react";

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          className="coin"
          src={"https://tinyurl.com/react-coin-" + this.props.side + "-jpg"}
          alt={this.props.side}
        />
      </div>
    );
  }
}

export default Coin;
