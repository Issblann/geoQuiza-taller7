import React from 'react';
import Header from '../components/header/header';
import './styles/styles.css';
import Footer from '../components/footer/Footer';
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
