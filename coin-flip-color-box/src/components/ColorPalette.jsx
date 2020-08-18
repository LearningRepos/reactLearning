import React from "react";
import ColorSquare from "./ColorSquare";

class ColorPalette extends React.Component {
  random_hex_color_code() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  }
  render() {
    return (
      <div className="Grid">
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
        <ColorSquare color={this.random_hex_color_code()} />
      </div>
    );
  }
}

export default ColorPalette;
