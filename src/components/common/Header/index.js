import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Project Amoratus</Link>
      <Navigation />
    </header>
  );
};

export default Header;
