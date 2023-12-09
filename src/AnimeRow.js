import React from 'react'
import './AnimeRow.css'
import { useDataLayerValue } from './DataLayer'

function AnimeRow({name, synopsis, picture, score, ranked, genre}) {
    const [{}, dispatch] = useDataLayerValue()
    return (
        <div className  = "animeRow">
            <img className = "animeRow_album" src = {picture} alt = ""/>
            <div className = "animeRow_info">
                <h1>{name}</h1>
                <p>{ranked}</p>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default AnimeRow
