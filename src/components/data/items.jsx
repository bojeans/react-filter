import React from "react";
import styles from "../data/items.module.css";

const CompanyData = (data) => {
  return (
    <div>
      <p className={styles.root}>
        name: {data.name} <br />
        company:{data.company}
      </p>
    </div>
  );
};

export default CompanyData;
