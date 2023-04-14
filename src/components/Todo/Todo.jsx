import React from "react";
import styles from './Todo.module.css';

function Todo({todo, index, finishTodo, deleteTodo}){
    const isFinished = todo.finished;
    return(
        <div className={styles.Todo}>
            <div className={styles.listTodo}>
               <h3>{todo.text}</h3> 
            </div>
        </div>
    )
}

export default Todo;