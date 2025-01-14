import React from 'react';

const Header = ({ title, subtitle }) => (
  <div className="header">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

export default Header;
