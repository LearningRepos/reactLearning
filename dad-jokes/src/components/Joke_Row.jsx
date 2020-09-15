import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faMeh,
  faSadTear,
  faSmile,
  faGrinSquintTears,
} from "@fortawesome/free-solid-svg-icons";

class JokeRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleUpvote = this.toggleUpvote.bind(this);
    this.toggleDownvote = this.toggleDownvote.bind(this);
  }
  getEmoji(votes) {
    if (votes < 0) {
      return faSadTear;
    } else if (votes >= 0 && votes < 3) {
      return faMeh;
    } else {
      return faSmile;
    }
  }
  toggleUpvote() {
    this.props.upvote(this.props.index);
  }
  toggleDownvote() {
    this.props.downvote(this.props.index);
  }
  render() {
    return (
      <div className="Joke_Row">
        <div className="Joke_Row-Arrow-Div">
          <FontAwesomeIcon
            className="Joke_Row-Arrows"
            icon={faArrowUp}
            onClick={this.toggleUpvote}
          />
          <p>{this.props.votes}</p>
          <FontAwesomeIcon
            className="Joke_Row-Arrows"
            icon={faArrowDown}
            onClick={this.toggleDownvote}
          />
        </div>
        <div className="Joke_Row-Message-Div">
          <p>{this.props.jokeMessage}</p>
        </div>
        <div className="Joke_Row-Emoji-Div">
          <FontAwesomeIcon
            className="Joke_Row-Emoji"
            icon={this.getEmoji(this.props.votes)}
            size="2x"
          />
        </div>
      </div>
    );
  }
}

export default JokeRow;
