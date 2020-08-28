import React from "react";

class NewBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "", width: "", height: "" };
    this.handleChange = this.handleChange.bind(this);
    this.addBox = this.addBox.bind(this);
  }

  //gets the deleted box and gets the index and deletes by index
  deleteBox(evt) {
    let deletedBox = evt.target.name;
    this.props.deleteBox(deletedBox);
  }

  addBox(evt) {
    evt.preventDefault();
    let boxItem = {
      color: this.state.color,
      width: parseInt(this.state.width),
      height: parseInt(this.state.height),
    };
    this.props.addBox(boxItem);
  }

  //allows user to type in form and allow the form to change state
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addBox}>
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
      </div>
    );
  }
}

export default NewBoxForm;
