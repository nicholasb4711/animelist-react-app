import './Sidebar.css';
import SidebarOption from './Sidebaroptions/index';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import AccountIcon from "@material-ui/icons/AccountBox"
import { useDataLayerValue } from '../../DataLayer';
import {Link} from "react-router-dom";

function Sidebar() {

  const [{user}, dispatch] = useDataLayerValue();
  const updateAccount = () => {
    dispatch({type: "SET_PAGE", page: 'Account'})
    if(user !== " "){
      
    }
  }
  return (
<div className="sidebar">
      <img className = "sidebar_logo"/>
      <h4 style = {{marginTop: 30, marginBottom: 40, display: "flex", alignItems: "center", 
      fontSize: '1.5rem', fontWeight: 500, color: '#B694F6'}}>
        Anime List</h4>
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