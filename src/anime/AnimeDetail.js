import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnimeDetails.css'
import { useAnime } from './AnimeProvider';
import { useUser } from '../users/userContext';
import SettingsIcon from '@material-ui/icons/Settings';
import { findAnimeById } from './client';
import { useNavigate } from 'react-router-dom';
import Reviews from './Reviews';

const AnimeDetail = () => {
  const [showMore, setShowMore] = useState(false);
  const { anime } = useAnime();
  const { user } = useUser();
  const [isAdmin] = useState(user.role === "ADMIN");
  const navigate = useNavigate();


  const editAnime = async (e) => {
    try {
      const data = await findAnimeById(anime.uid);
      console.log(anime);
      navigate('/anime-detail/edit')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <div className="detail-bubble">
        <div className="animeDetail_info">
          {anime.img_url && <img className="animeDetail_album" src={anime.img_url} alt={anime.name} />}
          <h3 style={{ color: '#bb86fc' }}>{anime.title}</h3>
          {anime.ranked && <h5>Ranked: {anime.ranked}</h5>}
          {anime.score && <h5>Score: {anime.score}</h5>}
          {anime.synopsis && <p style={{
            fontSize: '1.1rem', fontWeight: 500, textAlign: 'left',
            marginTop: '2rem', color: '#808080'
          }}>{anime.synopsis}</p>}
          <div className='d-flex justify-content-evenly'>
            <div>

              <Link to={'/home'} style={{ textDecoration: 'none' }} className="btn btn-secondary">Back to home</Link>
            </div>
            {isAdmin && (
              <div>
                <Link className='btn btn-secondary d-flex' onClick={editAnime} style={{ height: 40 }}>
                  <SettingsIcon />
                  <div>EDIT</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Reviews />

    </div>
  );
};

export default AnimeDetail;