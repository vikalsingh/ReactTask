import React from "react";
import { Button } from "antd";

const Header = (props) => {
    const { toggleTheme, ...rest } = props;
  return (
    <header className="header">
      <div className="menu-icon" onClick="openSidebar()">
        <span className="material-icons-outlined">menu</span>
      </div>
      <h1>Email</h1>

      <div>
        <span className="toggleText">Toggle Theme Button</span>
        <Button type="default" title="Theme" onClick={toggleTheme} />
      </div>
      <div className="header-right"></div>
    </header>
  );
};

export default Header;
