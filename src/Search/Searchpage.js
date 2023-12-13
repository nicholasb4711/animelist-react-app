import React from 'react';
import { useState, useEffect} from 'react';
import '../Home/Body/Body.css';
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import Header from './Search'; // Adjust the import path as needed
import { useDataLayerValue } from '../DataLayer';
import Axios from 'axios'


function SearchPage() {
    const [animes, setAnimes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const URL = "http://localhost:4000/api/anime";
  return (
    <div className="body">
      <Header onSearchResult={setSearchResults}/>
      {searchResults.map((anime) => (
         <div key={anime.uid} style={{paddingBottom:20}} >
         <AnimeRow 
           name={anime.title} 
           synopsis={anime.synopsis} 
           picture={anime.img_url} 
           score={anime.score} 
           ranked={anime.ranked} 
         />
       </div>
      ))}
    </div>
  );
}

export default SearchPage;