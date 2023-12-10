import Sidebar from '../Home/Sidebar/index'
import Home from './Home';


function Searchcomp() {
    return (
        <div style={{backgroundColor: "black", display: "flex"}}>
          <Sidebar />
          <Home/>
        </div>
    )
}

export default Searchcomp;