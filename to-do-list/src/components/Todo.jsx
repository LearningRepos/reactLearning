import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, individualChange: "", checkedOff: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.changeEditability = this.changeEditability.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.underline = this.underline.bind(this);
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
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editATodo(this.state.individualChange, this.props.todoIndex);
    this.changeEditability();
  }
  underline() {
    this.setState({ checkedOff: !this.state.checkedOff });
  }
  render() {
    return (
      <div>
        <div
          className="Todo"
          style={this.state.editable ? { display: "none" } : null}
        >
          <p
            onClick={this.underline}
            className={this.state.checkedOff ? "Underline" : null}
          >
            {this.props.message}
          </p>
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
        <form
          className="Todo-Edit"
          style={this.state.editable ? null : { display: "none" }}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="Todo-Change-Input"
            placeholder="Edit Todo"
            value={this.state.individualChange}
            onChange={this.handleChange}
            name="individualChange"
          />
          <button className="Todo-Change-Button">Save</button>
        </form>
      </div>
    );
  }
}

export default Todo;
