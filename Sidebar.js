import React from "react";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" /> <span>ADMIN</span>
        </div>
      </div>
      <div className="header-left">
        <input className="search-box" type="text" placeholder="Search" />
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">dashboard</span> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">inventory_2</span> Discuss
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">category</span> Suscription
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">groups</span> CRM
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">fact_check</span> Sales
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">poll</span> Invoice
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">groups</span> Email Marketing
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">settings</span> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
