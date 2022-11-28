import React from 'react'
import { ArtistList } from '../../components'



const Artists = ({ artistData }) => {

    return (
        <>
            <ArtistList artistData={artistData} searchInput={''} />
        </>
    )
}

export default Artists
