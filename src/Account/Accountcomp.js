import Sidebar from '../Home/Sidebar/index'
import Account from './Account';


function Accountcomp() {
    return (
        <div style={{backgroundColor: "black", display: "flex"}}>
          <Sidebar />
          <Account/>
        </div>
    )
}

export default Accountcomp;