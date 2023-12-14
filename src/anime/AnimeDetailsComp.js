import Sidebar from '../Home/Sidebar/index'
import AnimeDetail from './AnimeDetail';
import Home from '../Home/Home';
import Header from '../Search/Search';



function AnimeDetailsComp() {
    return (
        <div style={{ backgroundColor: "black", display: "flex" }}>
            <Sidebar />
            <div className='body'>
                <Header />
                <AnimeDetail />
            </div>


        </div>
    )
}

export default AnimeDetailsComp;