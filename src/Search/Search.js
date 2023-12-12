import React, { useState, useEffect } from "react";
import { findAnimeByTitle } from "../anime/client";
import * as client from "../anime/client";
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from "../users/userContext";

import Axios from 'axios'


function Header() {
    const {user, setUser} = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear user data from state
        setUser(null);
        localStorage.removeItem('user');
        navigate("/")
      };
    return (
        <div className="header">
            <div className="header_left" >
                <SearchIcon />
                <input
                    placeholder="Search Anime"
                    type="search"
                    id="searchBar"
                />
            </div>
            <div className="header_right">
                <h4 style={{marginRight:"10px"}}>{user.firstName + " "}</h4>
                <Link to={"/account"} style={{textDecoration: false}}>
                <Avatar> 
                {user.lastName.charAt(0)}
                </Avatar>
                </Link>
                <div onClick={handleLogout} style={{ paddingLeft: "10px", cursor: 'pointer' }}>
                    Log out
                </div>
            </div>
        </div>
    )
}

export default Header
