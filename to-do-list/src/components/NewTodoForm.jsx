import React from "react";

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoForm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addATodo(this.state.todoForm);
    this.setState({ todoForm: "" });
  }
  render() {
    return (
      <div>
        <h3>New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New Todo"
            className="NewTodoForm-Input"
            value={this.state.todoForm}
            onChange={this.handleChange}
            name="todoForm"
          />
          <button className="NewTodoForm-Button">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
