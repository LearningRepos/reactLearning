import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditIcon from "@material-ui/icons/Edit";

function TodoItem({ todoTask, complete, removeTodo, id, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox
        tabIndex={-1}
        checked={complete}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText
        style={{ textDecoration: complete ? "line-through" : "none" }}
      >
        {todoTask}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon arial-label="delete" />
        </IconButton>
        <IconButton>
          <EditIcon aria-label="edit" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
