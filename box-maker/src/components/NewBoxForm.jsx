import React from "react";
import Box from "./Box";

class NewBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "", width: "", height: "", boxes: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleForm(evt) {
    evt.preventDefault();
    let boxItem = {
      color: this.state.color,
      width: parseInt(this.state.width),
      height: parseInt(this.state.height),
    };
    this.setState({ boxes: [...this.state.boxes, boxItem] });
  }
  deleteBox(evt) {
    console.log(this.state.boxes[evt.target.name].color);
    this.setState({
      boxes: [...this.state.boxes].filter(
        (b) => b.color !== this.state.boxes[evt.target.name].color
      ),
    });
  }
  render() {
    const boxes = this.state.boxes.map((b, index) => (
      <div key={index}>
        <Box
          key={index}
          backgroundColor={b.color}
          width={b.width}
          height={b.height}
        />
        <button name={index} onClick={this.deleteBox.bind(this)}>
          Remove Box
        </button>
      </div>
    ));
    return (
      <div>
        <form onSubmit={this.handleForm.bind(this)}>
          <label>Color:</label>
          <br />
          <input
            type="text"
            value={this.state.color}
            name="color"
            onChange={this.handleChange}
          />
          <br />
          <label>Width:</label>
          <br />
          <input
            type="text"
            value={this.state.width}
            name="width"
            onChange={this.handleChange}
          />
          <br />
          <label>Height:</label>
          <br />
          <input
            type="text"
            value={this.state.height}
            name="height"
            onChange={this.handleChange}
          />
          <br />
          <button>Create Box</button>
        </form>
        {boxes}
      </div>
    );
  }
}

export default NewBoxForm;
