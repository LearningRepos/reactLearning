import React from "react";
import { NavLink } from "react-router-dom";

class Alcohol extends React.Component {
  render() {
    return (
      <div className="Alcohol">
        <h1>Drunk on Alcohol</h1>
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

export default Alcohol;
