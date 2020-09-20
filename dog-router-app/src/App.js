import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dog_Profile from "./components/Dog_Profile";
import Dog_Information from "./components/Dog_Information";
import Calculate from "./components/Calculate";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navUrls = this.props.dogs.map((d, idx) => (
      <div key={idx}>
        <Nav.Link>
          <Link className="Dog_Information-Back" exact to={"/dogs/" + d.name}>
            {d.name}
          </Link>
        </Nav.Link>
      </div>
    ));
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
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/dogs">Dog Shelter</Navbar.Brand>
          <Nav className="mr-auto">{navUrls}</Nav>
        </Navbar>
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
            exact
            path="/:operation/:one/:two"
            render={(props) => <Calculate {...props} />}
          />
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
    {
      name: "Yeontan",
      age: 3,
      src:
        "data:image/jpeg;base64,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",
      facts: [
        "Yeontan is a Pomeranion.",
        "Yeontan is part of BTS.",
        "Yeontans birthday is September 7.",
      ],
    },
  ],
};

export default App;
