import React from 'react';
import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Account.css'
import moment from 'moment';
// import {useDispatch} from "react-redux"
import { useUser } from './userContext';
import Axios from 'axios'

function Account() {
  const{user} = useUser();
  const maskedPassword = user.password.replace(/./g, '•');
  const date = user.dob; // Your date object
  const formattedDate =  moment(date).format('MM/DD/YYYY');
  const [isGuest, setGuest] = useState(user.role != "GUEST");
  return (
    <div>
      {isGuest ? (
        <div className="loading flex-fill justify-content-center" style={{ display: 'flex' }}>
        <div className="login-bubble d-flex-column item" data-bs-theme="dark">
            <h3 className='form-check-label' style={{color:'white', fontWeight:'bold'}}>Your Subscription</h3>
        <form className="login-form" >
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4" style={{ textAlign: 'center', paddingBottom: 10 }}>
          <label style={{ fontWeight: 'bold', paddingBottom: 5 }}>{user.role + " Plan"}</label>
              <div>
              <input
                type="text"
                className="form-control"
                value={user.firstName + " " + user.lastName}
                style={{textAlign:'center'}}
                disabled readOnly />
              </div>
          <div>
            </div>
        </div>
        <hr />
          </form>
        </div >
        <div className="login-bubble d-flex-column" data-bs-theme="dark">
          <form className="login-form" >
          <h3 className='form-check-label' style={{color:'white', fontWeight:'bold'}}>Your Account</h3>
            <div className="form-outline mb-4" style={{textAlign:'center', paddingBottom:10}}>
              <label style={{fontWeight:'bold', paddingBottom:5}}>Personal Info</label>
              <div>
              <label>{user.firstName + " " + user.lastName}</label>
              </div>
              <div>
              <label>{user.role}</label>
              </div>
              <label>
                {formattedDate}
              </label>
              <div>
              </div>
            </div>
        <hr />
            {/* <!-- Password input --> */}
        <div className="form-outline mb-4" style={{ textAlign: 'center', paddingBottom: 10 }}>
          <label style={{ fontWeight: 'bold', paddingBottom: 5 }}>Email</label>
              <div>
              <label>{user.email}</label>
              </div>
            </div>
        <hr />
        <div className="form-outline mb-4" style={{ textAlign: 'center', paddingBottom: 10 }}>
          <label style={{ fontWeight: 'bold', paddingBottom: 5 }}>Password</label>
              <div>
              <label>{maskedPassword}</label>
              </div>
            </div>
        <hr />
        <button className='btn btn-primary'>
        <Link to = {'/editprofile'}   style={{ textDecoration: 'none', fontWeight: 'bold'}}>
              Update Info
              </Link>
        </button>
        
          </form>
        </div >
  </div >
      ) : (
        <div className="login-bubble d-flex-column item" data-bs-theme="dark">
            <h3 className='form-check-label' style={{color:'white', fontWeight:'bold'}}>Your Subscription</h3>
        <form className="login-form" >
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4" style={{ textAlign: 'center', paddingBottom: 10 }}>
              <div>
              <input
                type="text"
                className="form-control"
                value={user.role}
                style={{textAlign:'center'}}
                disabled readOnly />
              </div>
              <div style={{color:'white'}}>
                <Link to={"/register"}>
                Register
                </Link>
               /
              <Link  to={"/"}>
              Sign in
              </Link>
              </div>
          <div>
            </div>
        </div>
        <hr />
          </form>
        </div >
      )}
    </div>
    
  );
};

export default Account;