import React, {useState} from "react";
import styles from "./TodolistContent.module.css";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import NoTodo from "../NoTodo/NoTodo";
import Modal from "../Modal/Modal";

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

  const onChangeShowModal = () => {
    setshowModal(!showModal);
  };

  const createTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
    setCompleted([...completed, false]);
  };

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

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
    setCompleted([...completed.slice(0, index), ...completed.slice(index + 1)]);
  };

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
          {showButton && (
            <button
              className={styles.createBtn}
              onClick={() => setShowButton(false)}
            >
              Add New
            </button>
          )}
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
