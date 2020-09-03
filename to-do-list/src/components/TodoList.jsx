import React from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: ["Take the trash out", "Do the dishes", "Vacuum the floor"],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo(todo) {
    this.setState({ listTodo: [...this.state.listTodo, todo] });
  }
  deleteTodo(todoIndex) {
    this.setState({
      listTodo: [...this.state.listTodo].filter(
        (l, index) => index !== todoIndex
      ),
    });
  }
  render() {
    const tasks = this.state.listTodo.map((t, index) => (
      <Todo
        key={index}
        todoIndex={index}
        message={t}
        trashcan={this.deleteTodo}
      />
    ));
    return (
      <div>
        {tasks}
        <NewTodoForm addATodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
