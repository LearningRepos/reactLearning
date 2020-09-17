import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

class Vending_Machine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    this.props.urlChange(evt);
  }
  render() {
    return (
      <div className="Vending_Machine">
        <h1 className="Vending_Machine-Intro">
          HELLO I AM A VENDING MACHINE! WHAT WOULD YOU LIKE TO EAT?
        </h1>
        <div className="Vending_Machine-Navbar">
          <NavLink
            onClick={this.handleClick}
            url="https://previews.123rf.com/images/kupparock/kupparock1211/kupparock121100407/16156334-the-potato-chips-background-image-close-up.jpg"
            className="Vending_Machine-Link"
            exact
            to="/chips"
          >
            CHIPS
          </NavLink>
          <NavLink
            onClick={this.handleClick}
            url="https://cdn5.vectorstock.com/i/1000x1000/00/24/alcohol-background-vector-14710024.jpg"
            className="Vending_Machine-Link"
            exact
            to="/alcohol"
          >
            ALCOHOL
          </NavLink>
          <NavLink
            onClick={this.handleClick}
            url="https://post.healthline.com/wp-content/uploads/2020/01/Sardines-1200X628-facebook-800x628.jpg"
            className="Vending_Machine-Link"
            exact
            to="/sardines"
          >
            SARDINES
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Vending_Machine;
