import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import styles from './PageLayout.module.css';

const PageLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
