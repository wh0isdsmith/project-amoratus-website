
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Add footer content here */}
      <p>&copy; {new Date().getFullYear()} Project Amoratus. All rights reserved.</p>
    </footer>
  );
};

export default Footer;