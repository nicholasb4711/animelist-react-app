import React from 'react';
import { useState } from 'react';
import './AnimeRow.css';
import { useDataLayerValue } from './DataLayer';


function AnimeRow({ name, synopsis, picture, score, ranked, genre }) {
    const [{}, dispatch] = useDataLayerValue();
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="animeRow">
            <div className="animeRow_info">
            {picture && <img className="animeRow_album" src={picture} alt={name} />}
                <h1>{name}</h1>
                {ranked && <p>Ranked: {ranked}</p>}
                {score && <p>Score: {score}</p>}
                {synopsis && <p>{showMore ? synopsis : `${synopsis.substring(0, 250)}`}
                <button className="btn" onClick={() => setShowMore(!showMore)} >{showMore ? "Show less" : "Show more"}</button></p>}
            </div>
        </div>
    );
}

export default AnimeRow;
