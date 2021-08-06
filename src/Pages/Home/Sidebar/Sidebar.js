import React from 'react';
import { NavigationData } from './SidebarNavData';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div>
      {NavigationData.map((item) => (
        <Link to={item.goTo}>
          <p className={classes.container}>{item.titleName}</p>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
