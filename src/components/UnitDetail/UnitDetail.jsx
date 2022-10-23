import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./unitDetail.module.scss";

const UnitDetail = () => {
  const { unitId } = useParams();
  const unit = useSelector((state) =>
    state.units.units.find((unit) => unit.id === parseInt(unitId))
  );
  const unitCost = unit.cost ? unit.cost : "No Cost";

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>ID:</td>
              <td className={styles.table__right}>
                {unit.id ? unit.id : "No ID"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Name:</td>
              <td className={styles.table__right}>
                {unit.name ? unit.name : "No name"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Description:</td>
              <td className={styles.table__right}>
                {unit.description ? unit.description : "No description"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Min. Required Age:</td>
              <td className={styles.table__right}>
                {unit.age ? unit.age : "No age"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Wood Cost:</td>
              <td className={styles.table__right}>
                {unitCost.Wood ? unit.cost.Wood : "None"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Food Cost:</td>
              <td className={styles.table__right}>
                {unitCost.Food ? unit.cost.Food : "None"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Gold Cost:</td>
              <td className={styles.table__right}>
                {unitCost.Gold ? unit.cost.Gold : "None"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Build Time:</td>
              <td className={styles.table__right}>
                {unit.build_time ? unit.build_time : "No build time"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Reload Time:</td>
              <td className={styles.table__right}>
                {unit.reload_time ? unit.reload_time : "No reload time"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Hit Points:</td>
              <td className={styles.table__right}>
                {unit.hit_points ? unit.hit_points : "No hit points"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Attack:</td>
              <td className={styles.table__right}>
                {unit.attack ? unit.attack : "No attack"}
              </td>
            </tr>
            <tr className={styles.table__row}>
              <td className={styles.table__left}>Accuracy:</td>
              <td className={styles.table__right}>
                {unit.accuracy ? unit.accuracy : "No accuracy"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnitDetail;
