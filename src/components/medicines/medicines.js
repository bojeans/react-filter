import React from "react";
import styles from "./medicines.module.css";

const Medicines = ({ medicines }) => {
  let message = "";

  if (medicines.length === 0) {
    message = "Looks like you don't have any medicines!";
  } else if (medicines.length === 1) {
    message = `looks like you have ${medicines.length} medicine!`;
  } else if (medicines.length > 1) {
    message = `looks like you have ${medicines.length} medicines!`;
  }
  return (
    <div className={styles.root}>
      <span>{message}</span>
    </div>
  );
};

export default Medicines;
