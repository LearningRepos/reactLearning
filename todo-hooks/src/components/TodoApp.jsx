import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import App from "../App";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "clean tank", complete: false },
    { id: 2, task: "wash car", complete: false },
    { id: 3, task: "grow beard", complete: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
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
      </Paper>
    </div>
  );
}

export default TodoApp;
