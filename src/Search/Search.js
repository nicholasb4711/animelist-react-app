import React, { useState, useEffect } from "react";
import { findAnimeByTitle } from "../anime/client";
import * as client from "../anime/client";
import {useParams, useNavigate } from "react-router-dom";
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import {useDataLayerValue} from '../DataLayer'
import { Link } from 'react-router-dom'
import Axios from 'axios'
// * as client from "./client";


function Header() {
    const [{user}, dispatch] = useDataLayerValue();
    const doSearch = (elem) => {
        console.log("searching")
        if(elem.key === "Enter") {
            const searchTerm = elem.target.value
            console.log(searchTerm)
            dispatch({ // display the search page since we are searching for an anime now
                type: "SET_PAGE",
                page: "Search"
            });
            dispatch({ // display the search page since we are searching for an anime now
                type: "SET_SEARCH",
                search: searchTerm
            });
            Axios.post("http://localhost:3001/search", {search: searchTerm})
            .then((response) => {
              console.log(response.data)
              dispatch({
                type: "SET_RESULTS",
                results: response.data
              })
            })

        }
    }
    const updateAccount = () => {
        dispatch({type: "SET_PAGE", page: 'Account'})
        // select statements to populate reviews array

      }
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
                <h4 style={{marginRight:"10px"}}>{user + " "}</h4>
                <Link to={"/account"}>
                <Avatar> 
                {user.charAt(0)}
                </Avatar>
                </Link>
                <Link to={"/"}>
                <h5 style={{paddingLeft: "10px"}}>
                    Log out
                </h5>
                </Link>
            </div>
        </div>
    )
}

export default Header
