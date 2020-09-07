import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deckId: "", deckArray: [], num: 0 };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let uniqueId = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/"
    );
    this.setState({
      deckId: uniqueId.data.deck_id,
      num: uniqueId.data.remaining,
    });
  }
  async getCard() {
    if (this.state.num > 0) {
      let cardData = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`
      );
      this.setState({
        deckArray: [...this.state.deckArray, cardData.data.cards[0].image],
        num: this.state.num - 1,
      });
    } else {
      alert("no more cards left");
    }
    // console.log(cardData.data.remaining);
    // console.log(cardData.data.cards[0].image);
  }
  render() {
    const cards = this.state.deckArray.map((d, idx) => (
      <Card key={idx} link={d} />
    ));
    return (
      <div className="App">
        <button onClick={this.getCard}>Gimme a Card</button>
        {cards}
      </div>
    );
  }
}

export default App;
