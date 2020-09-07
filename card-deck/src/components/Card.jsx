import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this._styles = "translate(50%, 50%) ";
    this._styles += `rotate(${Math.floor(Math.random() * 20) + 1}deg)`;
  }
  render() {
    console.log(this._styles);
    return (
      <div className="Card" style={{ transform: this._styles }}>
        <img src={this.props.link} />
      </div>
    );
  }
}

export default Card;
