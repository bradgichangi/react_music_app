import React from 'react'
import { Artist } from '../'


const ArtistList = () => {

    const artistData = [
        {name: 'Drake', bio: '', img: 'https://media1.popsugar-assets.com/files/thumbor/zan-t_Me63if8oqWYE9ENiPLlhA/0x224:2826x3050/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/894/n/1922398/87f6bb525e430e7bd44e40.22278576_/i/Drake.jpg', genre: 'Rap', albums: []},
        {name: 'Frank Ocean', bio: '', img: 'https://static01.nyt.com/images/2016/11/20/arts/20CARAMANICA/20CARAMANICA-superJumbo.jpg', genre: 'R&B', albums: []},
        {name: 'Nas', bio: '', img: 'https://yt3.ggpht.com/ytc/AMLnZu9uIFluq_tYwAQuAUhiKnvs6DxKQ9UnxML54vtGKg=s900-c-k-c0x00ffffff-no-rj', genre: 'Rap', albums: []},
        {name: 'Nipsey Hussle', bio: '', img: 'https://cdn.cnn.com/cnnnext/dam/assets/190401122732-01-nipsey-hussle-super-tease.jpg', genre: 'Rap', albums: []}
    ]

    return (
        <ul className='artist-list'>
            { artistData.map((artist, index) => <Artist key = {index} data = {artist}/>) }
        </ul>
    )
}

export default ArtistList
