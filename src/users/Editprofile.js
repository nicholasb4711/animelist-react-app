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

function Editprofile() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const response = await client.findUserById(user._id);
            console.log(response);
            // Assuming the response is an array, take the first element
            const fetchedUser = response[0];
            setUser(fetchedUser);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };
    const updateUser = async () => {
        const status = await client.updateUser(user._id, user);
        navigate('/account');
        localStorage.removeItem('user');
    }
    useEffect(() => {
        fetchUser();
    }, [user._id]);
    const date = user.dob; // Your date object
    const formattedDate = moment(date).format('MM/DD/YYYY');
    return (
        <div className="loading flex-fill justify-content-center" style={{ display: 'flex' }}>
            <div className="login-bubble d-flex-column" data-bs-theme="dark">
                <form className="login-form" >
                    <h3 className='form-check-label' style={{ color: 'white', fontWeight: 'bold' }}>Update Account</h3>
                    <div className="form-outline mb-4" style={{ textAlign: 'left', paddingBottom: 10 }}>

                        <div style={{ paddingBottom: 10 }}>
                            <label style={{ fontWeight: 'bold' }}>
                                First Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            />
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <label style={{ fontWeight: 'bold' }}>
                                Last Name:
                            </label >
                            <input
                                type="text"
                                className="form-control"
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>
                                Date of Birth:
                            </label >
                            <input
                                type="text"
                                className="form-control"
                                value={formattedDate}
                                onChange={(e) => setUser({ ...user, dob: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>
                                Email:
                            </label >
                            <input
                                type="text"
                                className="form-control"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>
                                Username:
                            </label >
                            <input
                                type="text"
                                className="form-control"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>
                                Password:
                            </label >
                            <input
                                type="text"
                                className="form-control"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                    <hr />

                    <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} className='btn btn-primary' onClick={updateUser}>
                        Update Info
                    </Link>


                </form>
            </div >
        </div >
    );
};

export default Editprofile;