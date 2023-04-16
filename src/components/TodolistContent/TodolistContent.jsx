import React, {useState} from "react";
import styles from "./TodolistContent.module.css";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import NoTodo from "../NoTodo/NoTodo";
import Modal from "../Modal/Modal";

/**
 * The component to display todolist content
 * @returns component
 */

function TodoListContent({ showButton, setShowButton }) {
  const [todos, setTodos] = useState([
    {
      text: "Have a breakfast",
      completed: false,
    },
    {
      text: "Journalling schedule",
      completed: false,
    },
    {
      text: "Learning new things",
      completed: true
    },
  ]);

  const [showModal, setshowModal] = useState(false);

  const [completed, setCompleted] = useState(
    todos.map((todo) => todo.completed)
  );

  //called when the Clear button is clicked or when the Modal dialog box is closed
  const onChangeShowModal = () => {
    setshowModal(!showModal);
  };

  //creates a new todo
  const createTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
    setCompleted([...completed, false]);
  };

  //updates the completed state 
  const finishTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = true;
    setTodos(newTodo);
    setCompleted([
      ...completed.slice(0, index),
      true,                  
      ...completed.slice(index + 1),
    ]);
  };

  const unfinishedTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = false;
    setTodos(newTodo);
    setCompleted([
      ...completed.slice(0, index),
      false,
      ...completed.slice(index + 1),
    ]);
  };

  //removes each todo that clicked
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
    setCompleted([...completed.slice(0, index), ...completed.slice(index + 1)]);
  };

  //removes all the todo
  const deleteAllTodo = () => {
    const newTodo = [...todos];
    newTodo.splice(0, newTodo.length);
    setTodos(newTodo);
    setshowModal(!showModal);
  };

  return (
    <div className={styles.TodolistContent}>
      <div className={styles.Heading}>
        <h1 className={styles.headingTitle}>
          Things you should be doing today...
        </h1>
        <div className={styles.headingLeft}>
          {/* This button is displayed conditionally based on the state of showButton. */}
          {showButton && (
            <button
              className={styles.createBtn}
              onClick={() => setShowButton(false)}
            >
              Add New
            </button>
          )}
          {/* This button shows a modal and clears all the todos in the list when clicked. */}
          <button
            setShowButton={setShowButton}
            deleteAllTodo={deleteAllTodo}
            className={`${styles.noOutline} ${styles.clear}`}
            onClick={onChangeShowModal}
            style={{ display: todos.length === 0 ? 'none' : 'block' }}
            // disabled={todos.length === 0 ? true : false}
          >
            Clear
          </button>
        </div>
      </div>
      <div className={styles.TodolistCard}>
        {/*Render a TodoForm component when stateful 'showButton' is false*/}
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
                completed={completed[index]}
                finishTodo={finishTodo}
                deleteTodo={deleteTodo}
                unfinishedTodo={unfinishedTodo}
                deleteAllTodo={deleteAllTodo}
              />
            ))
          ) : (
            <NoTodo />
          )}
        </div>
      </div>
      {showModal && (
        <Modal
          onChangeShowModal={onChangeShowModal}
          deleteAllTodo={deleteAllTodo}
        ></Modal>
      )}
    </div>
  );
}

export default TodoListContent;
