import {react, useEffect} from 'react';
import Sidebar from './Sidebar'
import Body from './Body/Body'
import { useDataLayerValue } from '../DataLayer'

function Page() {
    return (
        <div style={{backgroundColor: "black", display: "flex"}}>
          <Sidebar />
          <Body/>
        </div>
    )
}

export default Page;


