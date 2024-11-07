import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';
import './styles/styles.css';
const Layout = ({ children }) => {
  return (
    <div className="principal-container-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
