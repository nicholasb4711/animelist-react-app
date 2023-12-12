import React from 'react';
import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Account.css'
// import {useDispatch} from "react-redux"

function Register() {
  const [credentials, setCredentials] = useState({
    username: "", password: "", firstName: "",lastName: "",email: "",dob: ""});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="loading flex-fill justify-content-center" style={{ display: 'flex' }}>
          <div className="login-bubble d-flex-column" data-bs-theme="dark">
            <form className="login-form" >
            <h3 className='form-check-label' style={{color:'white', fontWeight:'bold'}}>Register</h3>
            {error && <div>{error}</div>}
              <div className="form-outline mb-4" style={{textAlign:'left', paddingBottom:10}}>
                <div style={{paddingBottom:10}}>
                    <label style={{fontWeight:'bold'}}>
                        First Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={credentials.firstName}
                        onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
                         />
                </div>
                <div style={{paddingBottom:10}}>
                <label style={{fontWeight:'bold'}}>
                        Last Name:
                    </label >
                    <input
                        type="text"
                        className="form-control"
                        value={credentials.lastName}
                        onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
                         />
                </div>
                <div>
                <label style={{fontWeight:'bold'}}>
                        Date of Birth:
                    </label >
                    <input
                        type="Date"
                        className="form-control"
                        value={credentials.dob}
                        onChange={(e) => setCredentials({ ...credentials, dob: e.target.value })}
                         />
                </div>
                <div>
                <label style={{fontWeight:'bold'}}>
                        Email:
                    </label >
                    <input
                        type="text"
                        className="form-control"
                        value={credentials.email}
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                         />
                </div>
                <div>
                <label style={{fontWeight:'bold'}}>
                        Username:
                    </label >
                    <input
                        type="text"
                        className="form-control"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                         />
                </div>
                <div>
                <label style={{fontWeight:'bold'}}>
                        Password:
                    </label >
                    <input
                        type="text"
                        className="form-control"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                         />
                </div>
                <div>
                </div>
              </div>
          <hr />
          <button className='btn btn-primary' onClick={signup}>
          <Link style={{ textDecoration: 'none', fontWeight: 'bold'}}>
                Register
                </Link>
          </button>
          
            </form>
          </div >
    </div >
  );
};

export default Register;