import React from 'react'
import { Albums } from '..'


const ArtistCard = ({ data }) => {

    function displayArtist(name) {
        console.log(name)
    }

    return (
        <div className="artist" onClick={displayArtist(data.name)} >
            <img src={data.image} alt={data.name}></img>
            <div className="overlay">
                <h2>{data.name}</h2>
            </div>
        </div>
    )
}

export default ArtistCard
