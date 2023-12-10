import {react, useEffect} from 'react';
import Sidebar from '../Home/Sidebar/index'
import SearchPage from './Searchpage';
import { useDataLayerValue } from '../DataLayer'

function Searchcomp() {
    return (
        <div style={{backgroundColor: "black", display: "flex"}}>
          <Sidebar />
          <SearchPage/>
        </div>
    )
}

export default Searchcomp;