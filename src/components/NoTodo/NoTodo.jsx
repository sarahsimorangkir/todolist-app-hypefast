import React from "react";
import styles from './NoTodo.module.css';

/**
 * a NoTodo component to show if there's no todo yet
 * @returns component
 */

function NoTodo() {
    return (
        <div className={styles.NoTodo}>Nothing to-do yet.</div>
    )
}

export default NoTodo;
