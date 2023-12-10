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
      <p style = {{marginTop: 30, marginBottom: 40, display: "flex", alignItems: "center"}}><font size = "+2" face = 'verdana'>Artist Network</font></p>
      <hr />
      <br></br>
      <div onClick={() => dispatch({type: "SET_PAGE", page: '100'})}>
        <SidebarOption Icon = {HomeIcon} title = "Home" />
      </div>
      <div>
        <Link to={`/Search/`}>
        <SidebarOption Icon = {SearchIcon} title = "Search" />
        </Link>
      </div>
      <div onClick={() => dispatch({type: "SET_PAGE", page: 'Search'})}>
        <SidebarOption Icon = {SearchIcon} title = "Search" />
      </div>
      <div onClick={() => updateAccount()}>
        <SidebarOption Icon = {AccountIcon} title = "Account" />
      </div>
      <br></br>
      <strong className = "sidebar_title"></strong>
      <hr />
    </div>
  )
}


export default Sidebar;