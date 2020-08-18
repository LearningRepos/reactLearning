import React from "react";

class ColorSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backColor: this.props.color };
  }
  changeColor() {
    function random_hex_color_code() {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return "#" + n.slice(0, 6);
    }
    const color = random_hex_color_code();
    this.setState({ backColor: color });
  }
  render() {
    return (
      <div
        onClick={this.changeColor.bind(this)}
        className="Square"
        style={{ backgroundColor: this.state.backColor }}
      ></div>
    );
  }
}

export default ColorSquare;
