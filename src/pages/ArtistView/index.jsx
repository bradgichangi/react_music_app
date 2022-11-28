import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Artist, ArtistList, Search } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import './artist.css'


const ArtistView = () => {

    const artistData = useSelector(state => state.arr)
    const params = useParams()

    return (
        
        <Artist data={artistData.filter(artist => artist.name.includes(params.name))[0]} />
    )
}

export default ArtistView
