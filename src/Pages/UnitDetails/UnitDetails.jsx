import React from "react";
import UnitDetail from "../../components/UnitDetail/UnitDetail";
import styles from "./unitDetails.module.scss";

const UnitDetails = () => {
  return (
    <div>
      <h1 className={styles.title}>Unit Detail Page</h1>
      <UnitDetail />
    </div>
  );
};

export default UnitDetails;
