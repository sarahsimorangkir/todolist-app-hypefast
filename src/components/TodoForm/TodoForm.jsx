import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ createTodo, setShowButton }) {
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    createTodo(value);
    setValue();
  };

  return (
    <div className={styles.TodoForm}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add new to-do title..."
          className={styles.inputForm}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div className={styles.buttonInput}>
        <button className={styles.createBtn} onClick={handleOnSubmit}>Create</button>
        <button onClick={()=> setShowButton(true)} className={`${styles.noOutline} ${styles.cancel}`}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default TodoForm;
