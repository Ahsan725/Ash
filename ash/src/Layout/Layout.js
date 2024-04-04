// Layout.js
import React from 'react';
import Navbar from '../Components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
