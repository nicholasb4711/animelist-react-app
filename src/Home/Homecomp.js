import Sidebar from '../Home/Sidebar/index'
import Home from './Home';


function Homecomp() {
    return (
        <div style={{backgroundColor: "#121212", display: "flex"}}>
          <Sidebar />
          <Home/>
        </div>
    )
}

export default Homecomp;