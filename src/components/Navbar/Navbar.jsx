import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navigation = () => {
  return (
    <header>
      <nav className={`${styles.nav} ${styles.container}`}>
        <ul className={styles.nav__list}>
          <Link to="/">
            <li className={styles.nav__item}>Age of Empires</li>
          </Link>
        </ul>
        <ul className={styles.nav__list}>
          <Link to="/">
            <li className={styles.nav__item}>Home</li>
          </Link>
          <Link to="/units">
            <li className={`${styles.nav__item} ${styles.nav__item_right}`}>
              Units
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
