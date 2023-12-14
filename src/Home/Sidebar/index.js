import './Sidebar.css';
import SidebarOption from './Sidebaroptions/index';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import AccountIcon from "@material-ui/icons/AccountBox"
import {Link} from "react-router-dom";

function Sidebar() {
  return (
<div className="sidebar">
      <img className = "sidebar_logo"/>
      <p style = {{marginTop: 30, marginBottom: 40, display: "flex", alignItems: "center"}}><font size = "+2" face = 'verdana'>Artist Network</font></p>
      <hr />
      <br></br>
      <div>
        <SidebarOption Icon = {HomeIcon} title = "Home" />
      </div>
      <div >
        <SidebarOption Icon = {SearchIcon} title = "Search" />
      </div>
      <div >
        <SidebarOption Icon = {AccountIcon} title = "Account" />
      </div>
      <br></br>
      <strong className = "sidebar_title"></strong>
      <hr />
    </div>
  )
}


export default Sidebar;