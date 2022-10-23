import React from "react";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Home Page</h1>
      <div className={styles.container}></div>
    </div>
  );
};

export default Home;
