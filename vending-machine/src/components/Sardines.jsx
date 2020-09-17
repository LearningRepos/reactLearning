import React from "react";
import { NavLink } from "react-router-dom";

class Sardines extends React.Component {
  render() {
    return (
      <div className="Sardines">
        <h1>Yummy Sardines</h1>
        <NavLink
          onClick={this.props.change}
          url="https://64.media.tumblr.com/30221eba32ea1b60e947c547b42ea513/tumblr_nvzkh3Dgkh1uexxavo1_640.png"
          className="Vending_Machine-Main"
          exact
          to="/"
        >
          GO HOME
        </NavLink>
      </div>
    );
  }
}

export default Sardines;
