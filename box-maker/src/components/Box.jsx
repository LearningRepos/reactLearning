import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const boxStyles = {
      backgroundColor: this.props.backgroundColor,
      height: this.props.height,
      width: this.props.width,
    };
    return <div style={boxStyles}></div>;
  }
}

export default Box;
