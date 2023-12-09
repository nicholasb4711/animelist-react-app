import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import {useDataLayerValue} from '../DataLayer'
import Axios from 'axios'


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
                    placeholder="Search"
                    type="search"
                    id="searchBar"
                    onKeyDown={(e)=> doSearch(e)}
                />
            </div>
            <div className="header_right" >
                <h4 style={{marginRight:"10px"}}>{user + " "}</h4>
                <Avatar onClick={() => updateAccount()}> 
                {user.charAt(0)}
                </ Avatar>
            </div>
        </div>
    )
}

export default Header
