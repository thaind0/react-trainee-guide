import React from "react";
import styles from "@/styles/Typing.module.css";

const Typing = () => {
  return (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Typing;
