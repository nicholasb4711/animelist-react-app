import Sidebar from '../Home/Sidebar/index'
import Account from './Account';

function Accountcomp() {
    return (
        <div style={{ backgroundColor: "black", display: "flex", height: "100vh" }}>
            <div style={{backgroundColor: '#1f1f1f'}}>
                <Sidebar />
            </div>


            <div className={"flex-fill"} style={{ justifyContent: "center", alignItems: "center" }}>
                <Account />
            </div>
        </div>
    );
}

export default Accountcomp;