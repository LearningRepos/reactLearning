import React from "react";
import "./App.css";
import JokeRow from "./components/Joke_Row";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinSquintTears } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokesArr: [] };
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.generateJokes = this.generateJokes.bind(this);
  }
  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://icanhazdadjoke.com", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((result) => {
          let originalData = result.data;
          originalData.votes = 0;
          this.setState({ jokesArr: [...this.state.jokesArr, originalData] });
        });
    }
  }
  commentSort(array) {
    return array.sort(function (a, b) {
      return b.votes - a.votes;
    });
  }
  upvote(index) {
    let oldArr = this.state.jokesArr;
    oldArr[index].votes++;
    this.setState({ jokesArr: this.commentSort(oldArr) });
  }
  downvote(index) {
    let oldArr = this.state.jokesArr;
    oldArr[index].votes--;
    this.setState({ jokesArr: this.commentSort(oldArr) });
  }
  generateJokes() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://icanhazdadjoke.com", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((result) => {
          let originalData = result.data;
          originalData.votes = 0;
          this.setState({ jokesArr: [...this.state.jokesArr, originalData] });
        });
    }
  }
  render() {
    // console.log(this.state.jokesArr);
    if (this.state.jokesArr.length % 10 === 0) {
      var jokesMap = this.state.jokesArr.map((m, i) => (
        <JokeRow
          key={i}
          index={i}
          jokeMessage={m.joke}
          votes={m.votes}
          upvote={this.upvote}
          downvote={this.downvote}
        />
      ));
    }
    return (
      <div className="App">
        <div className="Sidebar">
          <h1>DAD JOKES</h1>
          <FontAwesomeIcon icon={faGrinSquintTears} size="9x" />
          <button onClick={this.generateJokes}>GET JOKES</button>
        </div>
        <div className="Jokes">{jokesMap}</div>
      </div>
    );
  }
}

export default App;
