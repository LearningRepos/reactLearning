import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.changeEditability = this.changeEditability.bind(this);
  }
  handleDelete(evt) {
    this.props.trashcan(this.props.todoIndex);
  }
  changeEditability() {
    if (!this.state.editable) {
      this.setState({ editable: true });
    } else {
      this.setState({ editable: false });
    }
  }
  handleChange(evt) {
    console.lot(evt.target);
  }
  render() {
    return (
      <div className="Todo">
        <p>{this.props.message}</p>
        <div className="Todo-Icons-Div">
          <FontAwesomeIcon
            className="Todo-Icons"
            icon={faEdit}
            size="2x"
            onClick={this.changeEditability}
          />
          <FontAwesomeIcon
            className="Todo-Icons"
            icon={faTrash}
            size="2x"
            onClick={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default Todo;

//  can edit content directly : contentEditable="true"
