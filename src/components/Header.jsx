import React from "react";
import styles from "../modules/Header.module.scss";

const Header = () => {
  return (
    <div className={styles['headerContainer']}>
      <div className={styles['subtitleContainer']}>
        <div className={styles['rectangle']}></div>
        <p className={styles['subtitle']}>Our Products</p>
      </div>
      <h1 className={styles['title']}>Explore our products</h1>
    </div>
  );
};

export default Header;
