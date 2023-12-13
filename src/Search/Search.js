import React, { useState, useEffect } from "react";
import { findAnimeByTitle } from "../anime/client";
import * as client from "../anime/client";
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from "../users/userContext";

import Axios from 'axios'


function Header ({ onSearchResult }) {
    const {user, setUser} = useUser();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [isGuest, setGuest] = useState(user.role != "GUEST");
    const handleLogout = () => {
        // Clear user data from state
        setUser(null);
        localStorage.removeItem('user');
        navigate("/")
      };
      const handleSearch = async () => {
        if (!title.trim()) {
          alert("Please enter a search term.");
          return;
        }
        try {
          const result = await findAnimeByTitle(title);
          console.log(result);
          onSearchResult(result); // Pass the search results to the parent component
          navigate("/search")
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle the error appropriately
        }
      };
    return (
        <div className="header">
            <div className="header_left" >
                <div onClick={handleSearch}>
                <SearchIcon />
                </div>
                <input
                    placeholder="Search Anime"
                    type="search"
                    id="searchBar"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            {isGuest ? (
        <div className="header_right">
        <h4 style={{marginRight:"10px"}}>{user.firstName + " "}</h4>
        <Link to={"/account"} style={{textDecoration: false}}>
        <Avatar> 
        {user.lastName.charAt(0)}
        </Avatar>
        </Link>
        <div onClick={handleLogout} style={{ paddingLeft: "10px", cursor: 'pointer'}}>
            Log out
        </div>
    </div>
      ) : (
        <div className="header_right" onClick={handleLogout} style={{ paddingLeft: "10px", cursor: 'pointer'}}>
            Log in
        </div>
      )}
            
        </div>
    )
}

export default Header
