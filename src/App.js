import './App.css';
import Loading from './Login/index'
import { useDataLayerValue } from './DataLayer'
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchcomp from './Search/Searchcomp';
import Homecomp from './Home/Homecomp.js';
import Accountcomp from './Account/Accountcomp';


function App() {
  const [{user}, dispatch] = useDataLayerValue();
  return ( 
    <div className ="App">
    <Router>
      <Routes>
        <Route path="/" element={<Loading/>} />
        <Route path="/Search" element={<Searchcomp/>} />
        <Route path="/home" element={<Homecomp/>} />
        <Route path="/account" element={<Accountcomp/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
