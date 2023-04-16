import React from "react";
import styles from "./Todo.module.css";
import CheckCircle from "../../assets/img/CheckCircle.svg";
import MinusCircle from "../../assets/img/MinusCircle.svg";
import CheckCircleDone from "../../assets/img/CheckCircleDone.svg";

/**
 * a Todo component display a single to-do item
 * consists of mark todo status (finish or unfinished) and delete todo
 * @returns component
 */

function Todo({
  todo,
  index,
  completed,
  finishTodo,
  unfinishedTodo,
  deleteTodo,
}) {
  return (
    <div className={styles.Todo}>
      <div
        className={styles.treeItem}
        style={{ opacity: completed ? "0.5" : "1" }}
      >
        <button
          key={index}
          onClick={() =>
            completed ? unfinishedTodo(index) : finishTodo(index)
          }
          className={styles.Button}
        >
          <img
            className={styles.icon}
            src={completed ? CheckCircleDone : CheckCircle}
            alt="finish"
          />
        </button>

        <h3>{todo.text}</h3>
        <img
          className={styles.icon}
          src={MinusCircle}
          onClick={() => deleteTodo(index)}
          alt=""
        />
      </div>
    </div>
  );
}

export default Todo;
