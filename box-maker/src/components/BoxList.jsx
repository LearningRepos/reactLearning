import React from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.handleBox = this.handleBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }
  //adds a box
  handleBox(box) {
    this.setState({ boxes: [...this.state.boxes, box] });
  }

  //deletes a box
  deleteBox(deleteBox) {
    this.setState({
      boxes: [...this.state.boxes].filter(
        (b) => b.color !== this.state.boxes[deleteBox.target.name].color
      ),
    });
  }

  //maps over boxes and passes in the adding and deleting functions as props
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
        <NewBoxForm addBox={this.handleBox} deleteBox={this.deleteBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
