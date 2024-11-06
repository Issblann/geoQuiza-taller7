import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';

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
