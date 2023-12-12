import React from 'react';
import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Account.css'
// import {useDispatch} from "react-redux";
import Header from '../Search/Search'; // Assuming you have a Header component
import { Avatar } from "@material-ui/core" // Assuming you have an Avatar component
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import { useUser } from './userContext';
import Axios from 'axios'

function Account() {
  const{user} = useUser();
  const maskedPassword = user.password.replace(/./g, '•');
  return (
    <div className="loading" style={{display:'flex'}}>
          <div className="login-bubble d-flex-column item" data-bs-theme="dark">
              <h4 className='form-check-label'>Your Subscription</h4>
          <form className="login-form" >
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4" style={{textAlign:'left', paddingBottom:10}}>
                <label style={{fontWeight:'bold', paddingBottom:5}}>{user.role + " Plan"}</label>
                <div>
                <label>{user.firstName + " " + user.lastName}</label>
                </div>
                <div>
                <label>{user.role}</label>
                </div>
                <div>
                </div>
              </div>
              <hr/>
            </form>
          </div >
          <div className="login-bubble d-flex-column" data-bs-theme="dark">
            <form className="login-form" >
            <h4 className='form-check-label'>Your Account</h4>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4" style={{textAlign:'left', paddingBottom:10}}>
                <label style={{fontWeight:'bold', paddingBottom:5}}>Personal Info</label>
                <div>
                <label>{user.firstName + " " + user.lastName}</label>
                </div>
                <div>
                <label>{user.role}</label>
                </div>
                <div>
                <Link style={{textDecoration:'none', fontWeight:'bold', float:'right'}}>
                Update Info
                </Link>
                </div>
              </div>
              <hr/>
    
              {/* <!-- Password input --> */}
              <div className="form-outline mb-4" style={{textAlign:'left', paddingBottom:10}}>
                <label style={{fontWeight:'bold', paddingBottom:5}}>Email</label>
                <div>
                <label>{user.email}</label>
                </div>
                <div>
                <Link style={{textDecoration:'none', fontWeight:'bold', float:'right'}}>
                Update Email
                </Link>
                </div>
              </div>
              <hr/>
              <div className="form-outline mb-4" style={{textAlign:'left', paddingBottom:10}}>
                <label style={{fontWeight:'bold', paddingBottom:5}}>Password</label>
                <div>
                <label>{maskedPassword}</label>
                </div>
                <div>
                <Link style={{textDecoration:'none', fontWeight:'bold', float:'right'}}>
                Update password
                </Link>
                </div>
              </div>
              <hr/>
            </form>
          </div >
    </div >
  );
};

export default Account;