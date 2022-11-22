import React, { useState } from 'react'
import { ArtistList, Search } from './components'
import './app.css'


const ArtistView = () => {

    const [ searchInput, setSeacrhInput ] = useState('')

    return (
        <>
        <header>
            <h1 id='title'>SpeakerBox</h1>
        </header>
        <h1>Drake</h1>
        <img src='https://www.theaudiodb.com/images/media/artist/thumb/vpxqtu1484769349.jpg' alt='' />
        <p>Genre</p>
        <div className='genres'>
            <div className="genre">Hip-Hop</div>
            <div className="genre">Rap</div>
            <div className="genre">R&B</div>
        </div>
        <p>Record Label</p>
        <img src="https://www.theaudiodb.com/images/media/label/logo/vwptyr1532902436.png" alt="" />
        </>
    )
}

export default ArtistView
