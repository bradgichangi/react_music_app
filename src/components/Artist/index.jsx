import React from 'react'

const Artist = ({ data }) => {

    function displayArtist(name) {
        console.log(name)
    }
    console.log(data)

    return (
        <>
            
            <div id='top'>
                <section id='left'>
                <h1 id='title'>{data.name}</h1>
                    <img id='artist-img' src={data.image} alt='' />
                    <p>Genre</p>
                    <div className='genres'>
                        {data.genres.map(genre => <div className="genre">{genre}</div>)}
                    </div>
                    <p>Record Label</p>
                    {data.label_image  ? <img id='label-logo' src={data.label_image} alt="" /> : <h2>N/A</h2>}
                </section>

                <section id='right'>
                    <p id='artist-bio'>{data.bio}</p>
                </section>

            </div>
            <h2 id='album-title'>Albums</h2>
            <div className='albums'>
                {data.albums.map(album => {
                    return (
                        <div className='album'>
                            <img src={album.cover} alt={album.name} />
                            {/*  */}
                            <div className="album-overlay">
                                <h3>{album.name}</h3>
                                <p>({album.release_year})</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Artist
