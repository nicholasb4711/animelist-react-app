import './App.css';
import Loading from './Login/index'
import { useDataLayerValue } from './DataLayer'
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchcomp from './Search/Searchcomp';
import Homecomp from './Home/Homecomp.js';
import Accountcomp from './users/Accountcomp.js';
import Register from './users/Register';
import Signin from "./users/signin.js"
import UserList from "./users/UserList.js"
import UserDetails from './users/Details.js';
import Account from "./users/Account.js";
import Editprofile from './users/Editprofile';
import AnimeDetail from './AnimeDetail';
import { AnimeProvider } from './AnimeProvider';
import { UserProvider } from './users/userContext';


function App() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="App">
      <UserProvider>
        <AnimeProvider>
          <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Loading />} />
          <Route path="/Search" element={<Searchcomp />} />
          <Route path="/home" element={<Homecomp />} />
          <Route path="/account" element={<Accountcomp />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/users/:username" element={<Account />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/anime-detail" element={<AnimeDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
        </AnimeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
