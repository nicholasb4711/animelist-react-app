import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AnimeRow.css';
import { useAnime } from './AnimeProvider';
import { findAnimeById } from './client';
import { useUser } from '../users/userContext';
import SettingsIcon from '@material-ui/icons/Settings';

function AnimeRow({ name, synopsis, picture, score, ranked, id }) {
  const { user } = useUser();
  const { anime, setAnime } = useAnime();
  const [showMore, setShowMore] = useState(false);
  const [isGuest, setGuest] = useState(user.role === "GUEST");
  const [isUser, setUser] = useState(user.role === "USER");
  const [isAdmin, setAdmin] = useState(user.role === "ADMIN");
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

  const editAnime = async (e) => {
    try {
      const data = await findAnimeById(id);
      setAnime(data);
      console.log(anime);
      navigate('/anime-detail/edit')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="anime-bubble">
      <div className="animeRow_info">
        <Link onClick={handleAnime} style={{textDecoration: 'none', color: 'inherit'}}>
        {picture && <img className="animeRow_album" src={picture} alt={name} />}
        <h3 style={{color: '#bb86fc'}}>{name}</h3>
        {ranked && <h5>Ranked: {ranked}</h5>}
        {score && <h5>Score: {score}</h5>}
        </Link>
        
        {synopsis && <p style={{fontSize: '1.1rem', fontWeight: 500, textAlign: 'left', 
        marginTop: '2rem', color: '#808080'}}>{showMore ? synopsis : `${synopsis.substring(0, 250)}`}
          <button className="btn showmore" onClick={() => setShowMore(!showMore)} >
            {showMore ? "Show less" : "Show more"}</button></p>}
        {isGuest && (

          <Link to={"/"} className='btn btn-primary'>
            Login to View
          </Link>

        )}
        {isUser && (
          <Link className='btn btn-primary' onClick={handleAnime}>
            View
          </Link>
        )}
        {isAdmin && (
          <div className='d-flex justify-content-evenly'>
            <div>
              <Link className='btn btn-primary' onClick={handleAnime} style={{height: 40}}>
                View
              </Link>
            </div>
            <div>
              <Link className='btn btn-secondary d-flex' onClick={editAnime} style={{height: 40}}>
                <SettingsIcon />
                <div>EDIT</div>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AnimeRow;
