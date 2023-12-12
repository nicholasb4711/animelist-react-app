import Sidebar from '../Home/Sidebar/index'
import Account from './Account';

function Accountcomp() {
    return (
        <div style={{ backgroundColor: "black", display: "flex", height: "100vh" }}>
            <div>
                <Sidebar />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Account />

            </div>
        </div>
    );
}

export default Accountcomp;