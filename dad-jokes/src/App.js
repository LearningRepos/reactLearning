import React from "react";
import "./App.css";
import JokeRow from "./components/Joke_Row";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinSquintTears } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokesArr: [], moreJokesLoaded: false };
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.generateJokes = this.generateJokes.bind(this);
  }
  async componentDidMount() {
    // window.localStorage.clear();
    if (JSON.parse(window.localStorage.getItem("jokeData"))) {
      this.setState({
        jokesArr: JSON.parse(window.localStorage.getItem("jokeData")),
      });
    } else {
      let jokeArr = [];
      for (let i = 0; i < 10; i++) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: {
            Accept: "application/json",
          },
        });
        res.data.votes = 0;
        console.log(res.data);
        jokeArr.push(res.data);
      }
      window.localStorage.setItem("jokeData", JSON.stringify(jokeArr));
      this.setState({ jokesArr: jokeArr });
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
    window.localStorage.setItem("jokeData", JSON.stringify(oldArr));
  }
  downvote(index) {
    let oldArr = this.state.jokesArr;
    oldArr[index].votes--;
    this.setState({ jokesArr: this.commentSort(oldArr) });
    window.localStorage.setItem("jokeData", JSON.stringify(oldArr));
  }
  async generateJokes() {
    this.setState({ moreJokesLoaded: true });
    let jokeArr = [];
    for (let i = 0; i < 10; i++) {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
      res.data.votes = 0;
      jokeArr.push(res.data);
    }
    setTimeout(
      () =>
        this.setState({
          jokesArr: [...this.state.jokesArr, ...jokeArr],
          moreJokesLoaded: false,
        }),
      2000
    );
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
        <div className="Jokes">
          {this.state.moreJokesLoaded ? <h1>Jokes Loading</h1> : jokesMap}
        </div>
      </div>
    );
  }
}

export default App;
