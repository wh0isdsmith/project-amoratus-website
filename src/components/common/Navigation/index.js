
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/technology" className={styles.navLink}>
            Technology
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/journal" className={styles.navLink}>
            Journal
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/story" className={styles.navLink}>
            Story
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;