import React from 'react';
import Header from '../Search/Search'; // Assuming you have a Header component
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import { useDataLayerValue } from '../DataLayer';
import '../Home/Body/Body.css';
import Axios from 'axios';

const Home = () => {
  const [{top100}, dispatch] = useDataLayerValue()
  const setAnime = (anime) => {
    Axios.post("http://localhost:3001/getreviews", {id:anime.uid})
    .then((response) => {
      console.log(response)
      dispatch({ // update our results array to show all anime with that name
        type: "SET_ANIMEREVIEWS",
        animereviews: response.data
      })
    })
    dispatch({
      type: "SET_ANIME",
      anime: {id: anime.uid, name: anime.Title, synopsis: anime.Synopsis, picture: anime.img_url,
      score: anime.Score, ranked: anime.Ranked, genre: anime.episodes}
    })
    dispatch({type: "SET_PAGE", page: "Anime"})
    // Get the genre and store it in genre variable
  }
  return (
    <div className="body">
      <Header />
      <h1>Top 10 Artists</h1>
      <div className="body_info">
      </div>
      <div className="body_songs">
        {top100.map((anime) => 
          <div onClick={() => setAnime(anime)}>
            <AnimeRow 
              name={anime.Title} 
              id={anime.uid} 
              synopsis={anime.Synopsis} 
              picture={anime.img_url} 
              score={anime.Score} 
              ranked={anime.Ranked} 
              genre={anime.episodes}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


