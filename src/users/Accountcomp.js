import Sidebar from '../Home/Sidebar/index'
import Account from './Account';

function Accountcomp() {
    return (
        <div style={{ backgroundColor: "black", display: "flex", height: "100vh" }}>
            <div style={{ width: "200px" }}> {/* Sidebar width */}
                <Sidebar />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div> {/* Max width for inner content */}
                    <Account/>
                </div>
            </div>
        </div>
    );
}

export default Accountcomp;