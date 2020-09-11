import React from "react";
import "./App.css";
import JokeRow from "./components/Joke_Row";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokesArr: [] };
  }
  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://icanhazdadjoke.com", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((result) =>
          this.setState({ jokesArr: [...this.state.jokesArr, result.data] })
        );
    }
  }
  render() {
    if (this.state.jokesArr.length % 10 === 0) {
      var jokesMap = this.state.jokesArr.map((m, i) => (
        <JokeRow key={i} jokeMessage={m.joke} />
      ));
    }
    return (
      <div className="App">
        <div className="Sidebar">
          <h1>DAD JOKES</h1>
        </div>
        <div className="Jokes">{jokesMap}</div>
      </div>
    );
  }
}

export default App;
