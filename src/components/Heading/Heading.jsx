import React from "react";
import styles from "./Heading.module.css";

function Heading({showButton, setShowButton}) {

  return (
    <div className={styles.Heading}>
      <h1 className={styles.headingTitle}>
        Things you should be doing today...
      </h1>
      <div className={styles.headingLeft}>
        {showButton && <button className={styles.createBtn} onClick={()=> setShowButton(false)}>Add New</button>}
        <button className={`${styles.noOutline} ${styles.clear}`}>Clear</button>
      </div>
    </div>
  );
}
export default Heading;
