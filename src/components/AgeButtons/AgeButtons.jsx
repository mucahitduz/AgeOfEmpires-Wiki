import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUnits } from "../../redux/features/unitSlice";
import styles from "./ageButtons.module.scss";

const AgeButtons = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.units.age);

  return (
    <>
      <h3 className={styles.title__age}>Ages</h3>
      <div className={styles.container}>
        <div className={styles.age__filter}>
          <button
            className={styles.age__btn}
            onClick={() => dispatch(setUnits("All"))}
          >
            All
          </button>
          <button
            className={styles.age__btn}
            onClick={() => dispatch(setUnits("Dark"))}
          >
            Dark
          </button>
          <button
            className={styles.age__btn}
            onClick={() => dispatch(setUnits("Feudal"))}
          >
            Feudal
          </button>
          <button
            className={styles.age__btn}
            onClick={() => dispatch(setUnits("Castle"))}
          >
            Castle
          </button>
          <button
            className={styles.age__btn}
            onClick={() => dispatch(setUnits("Imperial"))}
          >
            Imperial
          </button>
        </div>
      </div>
    </>
  );
};

export default AgeButtons;
