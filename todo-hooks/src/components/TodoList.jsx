import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todoTasks.map((todo, id) => (
          <React.Fragment key={todo.id}>
            <TodoItem
              todoTask={todo.task}
              id={todo.id}
              complete={todo.complete}
              removeTodo={props.removeTodo}
              toggleTodo={props.toggleTodo}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
