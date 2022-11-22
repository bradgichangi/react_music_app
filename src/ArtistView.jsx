import React, { useState } from 'react'
import { ArtistList, Search } from './components'
import './artist.css'


const ArtistView = () => {

    const [ searchInput, setSeacrhInput ] = useState('')

    return (
        <>
        <header>
            <h1>SpeakerBox</h1>
        </header>
        <h1 id='title'>Drake</h1>
        <div id='top'>
            <section id='left'>
            <img id='artist-img' src='https://www.theaudiodb.com/images/media/artist/thumb/vpxqtu1484769349.jpg' alt='' />
            </section>
            
            <section id='right'>
                <p>Genre</p>
                <div className='genres'>
                    <div className="genre">Hip-Hop</div>
                    <div className="genre">Rap</div>
                    <div className="genre">R&B</div>
                </div>
                <p>Record Label</p>
                <img src="https://www.theaudiodb.com/images/media/label/logo/vwptyr1532902436.png" alt="" />
            </section>
            
        </div>
        <h2 id='album-title'>Albums</h2>
        <div className='albums'>
            <div className='album'>
                <h3>Her Loss</h3>
                <img src="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad" alt="" />
                <p>2022</p>
            </div>
            <div className='album'>
                <h3>Honestly, Nevermind</h3>
                <img src="https://media.pitchfork.com/photos/62ac785ab2cec3cf761512c5/1:1/w_600/Drake-Honestly-Nevermind.jpg" alt="" />
                <p>2022</p>
            </div>
        </div>
        </>
    )
}

export default ArtistView
