import React from 'react';
import "./SidebarOptions.css";
import { Link } from 'react-router-dom';

function SidebarOption({ title, Icon }) {
    // Convert the title to a path, e.g., "Home" becomes "/home"
    // Adjust this logic as needed for your URL structure
    const path = `/${title.toLowerCase()}`;
  
    return (
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption_icon" />}
        <Link to={path} className="sidebarOption_link">
          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </Link>
      </div>
    );
  }
  
  export default SidebarOption;
