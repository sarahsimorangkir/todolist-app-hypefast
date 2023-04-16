import styles from "./Reminder.module.css";

/**
 * a Reminder component to show reminder if character of the todo is equal to 0 or more than 100 characters
 * @returns component
 */

function Reminder() {
  return (
    <div className={styles.Reminder}>
      Title must be shorter than or equal to 100 characters.
    </div>
  );
}

export default Reminder;
