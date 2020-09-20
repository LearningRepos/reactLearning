import React from "react";

class Calculate extends React.Component {
  calcNum() {
    console.log(this.props.match.params);
    if (this.props.match.params.operation === "add") {
      return (
        parseInt(this.props.match.params.one) +
        parseInt(this.props.match.params.two)
      );
    } else if (this.props.match.params.operation === "subtract") {
      return (
        parseInt(this.props.match.params.one) -
        parseInt(this.props.match.params.two)
      );
    } else if (this.props.match.params.operation === "multiply") {
      return (
        parseInt(this.props.match.params.one) *
        parseInt(this.props.match.params.two)
      );
    } else if (this.props.match.params.operation === "divide") {
      return (
        parseInt(this.props.match.params.one) /
        parseFloat(this.props.match.params.two)
      );
    }
  }
  render() {
    return (
      <div>
        <h1>{this.calcNum()}</h1>
      </div>
    );
  }
}

export default Calculate;
