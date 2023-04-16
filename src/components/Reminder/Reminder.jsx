import styles from './Reminder.module.css';

function Reminder() {
    return (
        <div className={styles.Reminder}>Title must be shorter than or equal to 100 characters.</div>
    )
}

export default Reminder;