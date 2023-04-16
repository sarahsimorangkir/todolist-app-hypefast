import React from "react";
import styles from './Modal.module.css';

/**
 * A modal component to show confirmation messages
 * @returns {JSX.Element}
 */

function Modal({onChangeShowModal, deleteAllTodo}) {
    return (
        <div className={styles.Modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalQuestion}>Confirm to clear all todos?</div>
                <div className={`${styles.modalContent} ${styles.modalAction}`}>
                    <button className={styles.cancelBtn} onClick={onChangeShowModal}>Cancel</button>
                    <button className={styles.confirmBtn} onClick={deleteAllTodo}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
