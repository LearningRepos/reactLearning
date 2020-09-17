import React from "react";
import "./App.css";
import Dog_Profile from "./components/Dog_Profile";
import Dog_Information from "./components/Dog_Information";
import { Switch, Route, Navlink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const profiles = this.props.dogs.map((d, idx) => (
      <Dog_Profile key={idx} imgUrl={d.src} dogName={d.name} />
    ));
    const profileUrls = this.props.dogs.map((d, idx) => (
      <Route
        exact
        path={"/dogs/" + d.name}
        render={() => (
          <Dog_Information
            key={idx}
            name={d.name}
            age={d.age}
            facts={d.facts}
            imgUrl={d.src}
          />
        )}
      />
    ));
    console.log(profileUrls);
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => (
              <div>
                <h1 className="Dog-Header">CLICK A DOG NAME</h1>
                <div className="Dog-Profiles">{profiles}</div>
              </div>
            )}
          />
          {profileUrls}
          <Route
            render={() => (
              <div>
                <h1 className="Dog-Header">CLICK A DOG NAME</h1>
                <div className="Dog-Profiles">{profiles}</div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src:
        "https://happy-wozniak-e633ff.netlify.app/static/media/whiskey.5c1e3b17.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src:
        "https://happy-wozniak-e633ff.netlify.app/static/media/hazel.4eb85e80.jpg",
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src:
        "https://happy-wozniak-e633ff.netlify.app/static/media/tubby.2f47cb65.jpg",
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
  ],
};

export default App;
