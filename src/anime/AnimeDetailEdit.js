import React, { useState } from 'react';
import { useUser } from '../users/userContext';
import { useAnime } from './AnimeProvider';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import { findAnimeById, uploadAnimeImage } from './client';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import * as client from './client'
import './AnimeDetails.css'
import Reviews from '../Reviews/Reviews';

function AnimeDetailEdit() {
    const { anime, setAnime } = useAnime();
    const { user } = useUser();
    const [isAdmin, setAdmin] = useState(user.role === "ADMIN");
    const navigate = useNavigate();

    const updateAnime = async (e) => {
        const status = await client.updateAnime(anime._id, anime);
        navigate('/anime-detail');
    }
    const handleImageUpload = async (file) => {
        try {
            const uploadData = new FormData();
            uploadData.append("file", file);
            uploadData.append("upload_preset", "animelist");
            const animeImage = await uploadAnimeImage(uploadData);
            console.log(animeImage);
            setAnime({ ...anime, img_url: animeImage.img_url });
        } catch (error) {
            console.error('Error fetching Image data:', error);
        }
    }

    return (
        <div>
            
            <div className="body">
                <div className="detail-bubble">
                    <div className="animeDetail_info d-flex-col flex-fill">
                        <div className="form-outline mb-4" style={{ textAlign: 'left', paddingBottom: 10 }}>
                            <div style={{ paddingBottom: 10 }}>
                                <label style={{ fontWeight: 'bold' }}>
                                    Edit Cover Image:
                                </label>
                                <div>
                                    {anime.img_url && <img className="animeDetail_album" 
                                    src={anime.img_url} alt={anime.name} />}
                                </div>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) => setAnime({ ...anime, img_url: e.target.value })}
                                // onChange={(e) => handleImageUpload(e.target.files[0])}
                                />
                            </div>
                            <div style={{ paddingBottom: 10 }}>
                                <label style={{ fontWeight: 'bold' }}>
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={anime.title}
                                    onChange={(e) => setAnime({ ...anime, title: e.target.value })}
                                />
                            </div>
                            <div style={{ paddingBottom: 10 }}>
                                <label style={{ fontWeight: 'bold' }}>
                                    Ranked:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={anime.ranked}
                                    onChange={(e) => setAnime({ ...anime, ranked: e.target.value })}
                                />
                            </div>
                            <div style={{ paddingBottom: 10 }}>
                                <label style={{ fontWeight: 'bold' }}>
                                    Score:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={anime.score}
                                    onChange={(e) => setAnime({ ...anime, score: e.target.value })}
                                />
                            </div>
                            <div style={{ paddingBottom: 10 }}>
                                <label style={{ fontWeight: 'bold' }}>
                                    Synopsis:
                                </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    rows={10}
                                    value={anime.synopsis}
                                    onChange={(e) => setAnime({ ...anime, synopsis: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <div>
                                <Link to={'/home'} style={{ textDecoration: 'none' }} 
                                className="btn btn-danger d-flex justify-content-evenly">
                                    <MdCancel />
                                    CANCEL
                                </Link>
                            </div>
                            {isAdmin && (
                                <div>
                                    <Link className='btn btn-success d-flex justify-content-evenly' 
                                    onClick={updateAnime} style={{ height: 40, textAlign: 'center', }}>
                                        <FaCheck />
                                        <div>SAVE</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Reviews />
            </div>
            
        </div>
    )
}

export default AnimeDetailEdit;