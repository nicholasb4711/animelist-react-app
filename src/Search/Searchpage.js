import React from 'react';
import '../Home/Body/Body.css';
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import Header from './Search'; // Adjust the import path as needed
import { useDataLayerValue } from '../DataLayer';
import Axios from 'axios'


function SearchPage() {
    const [{results, anime,}, dispatch] = useDataLayerValue()
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
      {results.map((anime) => (
        <div key={anime.uid} onClick={() => setAnime(anime)}>
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
      ))}
    </div>
  );
}

export default SearchPage;