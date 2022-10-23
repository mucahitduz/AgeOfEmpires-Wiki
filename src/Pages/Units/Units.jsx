import React from "react";
import AgeButtons from "../../components/AgeButtons/AgeButtons";
import FilterSlider from "../../components/FilterSlider/FilterSlider";
import UnitTable from "../../components/UnitTable/UnitTable";
import styles from "./units.module.scss";

const Units = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Units Page</h1>
      <AgeButtons />
      <div className="rangeBar">
        <FilterSlider label="wood" />
        <FilterSlider label="food" />
        <FilterSlider label="gold" />
      </div>
      <UnitTable />
    </div>
  );
};

export default Units;
