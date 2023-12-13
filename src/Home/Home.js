import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Search/Search'; // Assuming you have a Header component
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import { findAllAnime } from '../anime/client';
import '../Home/Body/Body.css';
import { useUser } from '../users/userContext';
import Axios from 'axios';

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const {user} = useUser;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findAllAnime();
        setAnimes(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <Header onSearchResult={setSearchResults}/>
      <h1>Top 100 Anime</h1>
      <div className="body_info">
      </div>
      <div className="body_songs" style={{justifyContent:'center'}}>
        {animes.map((anime) => (
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
    </div>
  );
};

export default Home;


