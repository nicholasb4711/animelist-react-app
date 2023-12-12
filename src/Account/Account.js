import React from 'react';
import '../Home/Body/Body.css';
import Header from '../Search/Search'; // Assuming you have a Header component
import {Avatar} from "@material-ui/core" // Assuming you have an Avatar component
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import { useDataLayerValue } from '../DataLayer';
import Axios from 'axios';



const Account = () => {
    const [{user, reviews}, dispatch] = useDataLayerValue()
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
      <h1>Account</h1>
      <h2 style={{ marginRight: "10px" }}>{user}</h2>
      <Avatar onClick={() => dispatch({ type: "SET_PAGE", page: "Account" })}> 
        {user.charAt(0)}
      </Avatar>
      {(reviews !== undefined && reviews.length > 0) &&
        reviews.map((review, index) => 
          <div key={index}>
            <AnimeRow 
              name={review.rdescription} 
              score={review.rating} 
              ranked={review.rating}
              synopsis={review.rating} 
              picture={""}
            />
          </div>
        )
      }
    </div>
  );
};

export default Account;