import React, { useState, useEffect } from "react";
import styles from "./TodolistContent.module.css";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import NoTodo from "../NoTodo/NoTodo";

function TodoListContent({ showButton, setShowButton }) {
  const [todos, setTodos] = useState([
    {
      text: "Have a breakfast",
      completed: "true",
    },
    {
      text: "Journalling schedule",
      completed: "false",
    },
    {
      text: "Learning new things",
      completed: "false",
    },
  ]);

  const [todoMessage, setTodoMessage] = useState(0);
  let todoText;

  const createTodo = (text) => {
    const newTodo = [...todos, { text, completed: false }];
    setTodos(newTodo);
  };

  const finishTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = true;
    setTodos(newTodo);
  };

  const unfinishedTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = false;
    setTodos(newTodo);
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className={styles.TodolistContent}>
      {!showButton && (
        <TodoForm setShowButton={setShowButton} createTodo={createTodo} />
      )}
      <div className={styles.TodolistContentAll}>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              index={index}
              finishTodo={finishTodo}
              deleteTodo={deleteTodo}
              unfinishedTodo={unfinishedTodo}
            />
          ))
        ) : (
          <NoTodo />
        )}
      </div>
    </div>
  );
}
export default TodoListContent;
