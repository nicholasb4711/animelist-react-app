import { React, useRef, useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { signin } from '../users/client';
import { useDataLayerValue } from '../DataLayer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css'
import { useUser } from '../users/userContext';

const LOGIN_URL = '/auth';

function Loading() {
  const userRef = useRef();
  const errRef = useRef();
  const {user, setUser} = useUser()

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, []);

  useEffect(() => {
      setErrMsg('');
  }, [username, pwd]);


  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const credentials = { username: username, password: pwd };
          const response = await signin(credentials);
          const uId = response._id;
          if (response) {
            console.log(response); 
            console.log(uId);
            setSuccess(true);
            setUser(response);
            localStorage.setItem('user', JSON.stringify(response));
            // Redirect or update state/context as necessary
            // For example, you might want to store the user data in the context or local storage
        } else {
            // Handle case when no user data is returned
            setErrMsg('Login Failed: User not found');
            errRef.current.focus();
        }
          // Redirect or update state/context as necessary
      } catch (error) {
          if (!error?.response) {
              setErrMsg('No Server Response');
          } else if (error.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (error.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  };
  return (
    <div className="loading" data-bs-theme="dark">
            {success ? (
                <section>
                    <h1> Welcome {user.username}</h1>
                    <h1>You are logged in!</h1>
                    <Link to={`/home`} className="btn">
                    Preceed to HomePage
                    </Link>
                </section>
            ) : (
            <div className="login-bubble d-flex-column" data-bs-theme="dark">
            <form className="login-form" >
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="name" id="name" ref={userRef} className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
    
              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
    
              </div>
    
              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input className="form-check-input login-checkbox" type="checkbox" value="" id="form2Example31" />
                    <label className="form-check-label" htmlFor="rememberme"> Remember me </label>
                  </div>
                </div>
    
                <div className="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!" style={{ color: '#a86ed1' }}>Forgot password?</a>
                </div>
              </div>
    
              {/* <!-- Submit button --> */}
              <button type="button" className="btn btn-primary btn-md btn-block mb-4" onClick={handleSubmit} >Sign in</button>
    
              {/* <!-- Register buttons --> */}
    
              <div className="text-center">
                <p>Not a member?<Link to={"/register"}><a href="#!" style={{ color: '#a86ed1' }}>Register</a></Link></p>
              </div>
              {/* Continue without logging in */}
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            </form>
          </div >)}
      
    </div >
  )
}


export default Loading;