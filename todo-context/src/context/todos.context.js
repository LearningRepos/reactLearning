import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Release the bugs", completed: false },
];

export const todosContext = createContext();
export const dispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <todosContext.Provider value={{ todos }}>
      <dispatchContext.Provider value={{ dispatch }}>
        {props.children}
      </dispatchContext.Provider>
    </todosContext.Provider>
  );
}
