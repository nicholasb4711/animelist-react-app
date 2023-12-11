import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Search/Search'; // Assuming you have a Header component
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import { useDataLayerValue } from '../DataLayer';
import '../Home/Body/Body.css';
import Axios from 'axios';

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const URL = "http://localhost:4000/api/anime";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(URL);
        setAnimes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <Header />
      <h1>Top 100 Anime</h1>
      <div className="body_info">
      </div>
      <div className="body_songs">
        {animes.map((anime) => (
          <div key={anime.uid} >
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


