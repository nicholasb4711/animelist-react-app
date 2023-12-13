import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnimeDetails.css'
import { useAnime } from './AnimeProvider';

const AnimeDetail = () => {
    const [showMore, setShowMore] = useState(false);
    const {anime} = useAnime();
  return (
    <div  className = "body" style={{background:'black'}}>
        <div className="detail-bubble">
            <div className="animeDetail_info">
            {anime.img_url && <img className="animeDetail_album" src={anime.img_url} alt={anime.name} />}
                <h1>{anime.title}</h1>
                {anime.ranked && <p>Ranked: {anime.ranked}</p>}
                {anime.score && <p>Score: {anime.score}</p>}
                {anime.synopsis && <p>{showMore ? anime.synopsis : `${anime.synopsis.substring(0, 250)}`}
                <button className="btn" onClick={() => setShowMore(!showMore)} >{showMore ? "Show less" : "Show more"}</button></p>}
                <button className="btn btn-secondary"><Link to={'/home'} style={{textDecoration: 'none'}}>Back to home</Link></button>
            </div>
        </div>
        <div style={{paddingTop:30}}>
        <label class="label" type="label" for="textAreaExample">Review</label>
        </div>
        <div class="form-outline" style={{paddingTop:30}}>
  <textarea class="form-control" id="textAreaExample1" rows="10" style={{background:'grey'}}></textarea>
</div>
    </div>
  );
};

export default AnimeDetail;