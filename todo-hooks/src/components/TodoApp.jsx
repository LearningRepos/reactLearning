import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "clean tank", complete: false },
    { id: 2, task: "wash car", complete: false },
    { id: 3, task: "grow beard", complete: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, complete: false }]);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODO HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoList
              todoTasks={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <TodoForm addTodo={addTodo} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;
