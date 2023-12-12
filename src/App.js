import './App.css';
import Loading from './Login/index'
import { useDataLayerValue } from './DataLayer'
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchcomp from './Search/Searchcomp';
import Homecomp from './Home/Homecomp.js';
import Accountcomp from './users/Accountcomp.js';
import Register from './Register/Register.js';
import Signin from "./users/signin.js"
import UserList from "./users/UserList.js"
import UserDetails from './users/Details.js';
import Account from "./users/Account.js";
import { UserProvider } from './users/userContext';


function App() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="App">
      <UserProvider>
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
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
