import React from 'react'
import { ArtistCard } from '../'
import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
const ArtistList = ({ searchInput }) => {

    const artistData = useSelector(state => state.arr)
    console.log(artistData)

    return (
        <div className='artist-list'>
            {console.log(searchInput)}
            {
                artistData
                    .filter(artist => artist.name.toLowerCase().includes(searchInput))
                    .map((artist, index) =>
                        <Link key={index}  to={ `/artists/${artist.name}` }><ArtistCard key={index} data={artist} /></Link>)
            }
        </div>
    )
}

export default ArtistList
