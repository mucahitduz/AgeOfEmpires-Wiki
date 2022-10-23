import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCostValues } from "../../utils";
import styles from "./unitTable.module.scss";

const UnitTable = () => {
  const units = useSelector((state) =>
    state.filterData ? state.filterData : state.units
  );

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {units.filterData.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.table__id}>Id</th>
                <th className={styles.table__name}>Name</th>
                <th className={styles.table__age}>Age</th>
                <th className={styles.table__cost}>Cost</th>
              </tr>
            </thead>
            <tbody>
              {units.filterData ? (
                units.filterData.map((unit) => {
                  return (
                    <tr className={styles.table__row} key={unit.id}>
                      <td className={styles.table__bottom}>
                        <Link to={`/unit-details/${unit.id}`}>{unit.id}</Link>
                      </td>
                      <td className={styles.table__bottom}>
                        <Link to={`/unit-details/${unit.id}`}>{unit.name}</Link>
                      </td>
                      <td className={styles.table__bottom}>
                        <Link to={`/unit-details/${unit.id}`}>{unit.age}</Link>
                      </td>
                      <td className={styles.table__bottom}>
                        <Link to={`/unit-details/${unit.id}`}>
                          {getCostValues(unit.cost)}
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div>Loading</div>
              )}
            </tbody>
          </table>
        ) : (
          <h1 className={styles.title}>
            There is no unit that fits the filter.
          </h1>
        )}
      </div>
    </div>
  );
};

export default UnitTable;
