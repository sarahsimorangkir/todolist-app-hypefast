import { useState } from "react";
import Reminder from "../Reminder/Reminder";
import styles from "./TodoForm.module.css";

function TodoForm({ createTodo, setShowButton }) {
  const [value, setValue] = useState("");
  const [reminderText, setReminderText] = useState(false);
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0 || value.length > 100) {
      setReminderText(true);
    } else {
      createTodo(value);
      setValue("");
      setShowButton(true);
    }
  };

  return (
    <div className={styles.TodoForm}>
      <form onSubmit={handleOnSubmit}>
        <textarea
          value={value}
          placeholder="Add new to-do title..."
          className={styles.inputForm}
          onChange={(e) => setValue(e.target.value)}
        />
      {reminderText && <Reminder />}
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
