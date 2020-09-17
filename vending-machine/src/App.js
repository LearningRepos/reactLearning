import React from "react";
import "./App.css";
import Vending_Machine from "./components/Vending_Machine";
import Alcohol from "./components/Alcohol";
import Chips from "./components/Chips";
import Sardines from "./components/Sardines";
import { NavLink, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundUrl:
        "https://64.media.tumblr.com/30221eba32ea1b60e947c547b42ea513/tumblr_nvzkh3Dgkh1uexxavo1_640.png",
    };
    this.changeUrl = this.changeUrl.bind(this);
    this.changeHome = this.changeHome.bind(this);
  }
  changeUrl(evt) {
    let changedUrl = evt.target.getAttribute("url");
    this.setState({ backgroundUrl: changedUrl });
  }
  changeHome() {
    this.setState({
      backgroundUrl:
        "https://64.media.tumblr.com/30221eba32ea1b60e947c547b42ea513/tumblr_nvzkh3Dgkh1uexxavo1_640.png",
    });
  }
  render() {
    let background = {
      backgroundImage: "url(" + this.state.backgroundUrl + ")",
    };
    return (
      <div className="App" style={background}>
        <nav>
          <NavLink
            onClick={this.changeUrl}
            url="https://64.media.tumblr.com/30221eba32ea1b60e947c547b42ea513/tumblr_nvzkh3Dgkh1uexxavo1_640.png"
            className="Vending_Machine-Main"
            exact
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={this.changeUrl}
            url="https://previews.123rf.com/images/kupparock/kupparock1211/kupparock121100407/16156334-the-potato-chips-background-image-close-up.jpg"
            className="Vending_Machine-Main"
            exact
            to="/chips"
          >
            CHIPS
          </NavLink>
          <NavLink
            onClick={this.changeUrl}
            url="https://cdn5.vectorstock.com/i/1000x1000/00/24/alcohol-background-vector-14710024.jpg"
            className="Vending_Machine-Main"
            exact
            to="/alcohol"
          >
            ALCOHOL
          </NavLink>
          <NavLink
            onClick={this.changeUrl}
            url="https://post.healthline.com/wp-content/uploads/2020/01/Sardines-1200X628-facebook-800x628.jpg"
            className="Vending_Machine-Main"
            exact
            to="/sardines"
          >
            SARDINES
          </NavLink>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Vending_Machine urlChange={this.changeUrl} />}
          />
          <Route
            exact
            path="/chips"
            render={() => <Chips change={this.changeHome} />}
          />
          <Route
            exact
            path="/alcohol"
            render={() => <Alcohol change={this.changeHome} />}
          />
          <Route
            exact
            path="/sardines"
            render={() => <Sardines change={this.changeHome} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
