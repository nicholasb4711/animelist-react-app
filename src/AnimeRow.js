import React from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AnimeRow.css';
import { useAnime } from './AnimeProvider';
import { findAnimeById } from './anime/client';

function AnimeRow({ name, synopsis, picture, score, ranked, id }) {
    const {anime, setAnime} = useAnime();
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();

    const handleAnime = async (e) => {
        try {
            const data = await findAnimeById(id);
            setAnime(data);
            console.log(anime); 
            navigate('/anime-detail')
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    return (
        <div className="anime-bubble">
            <div className="animeRow_info">
            {picture && <img className="animeRow_album" src={picture} alt={name} />}
                <h1>{name}</h1>
                {ranked && <p>Ranked: {ranked}</p>}
                {score && <p>Score: {score}</p>}
                {synopsis && <p>{showMore ? synopsis : `${synopsis.substring(0, 250)}`}
                <button className="btn" onClick={() => setShowMore(!showMore)} >{showMore ? "Show less" : "Show more"}</button></p>}
                <button className='btn btn-primary' onClick={handleAnime}>
              <Link>
              View 
              </Link>
            </button>
            </div>
        </div>
    );
}

export default AnimeRow;
