import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './layouts/Header';
import ArtistView from "./pages/ArtistView";
import './app.css'




const App = () => {

  const artistData = [
    {
      "id": 1,
      "name": "Drake",
      "image": "https://www.theaudiodb.com/images/media/artist/thumb/vpxqtu1484769349.jpg",
      "logo": "https://www.theaudiodb.com/images/media/artist/logo/xtryww1359656364.png",
      "cutout": "https://www.theaudiodb.com/images/media/artist/cutout/l2xnfm1641903083.png",
      "bio": "",
      "label_image": "https://www.theaudiodb.com/images/media/label/logo/vwptyr1532902436.png",
      "genres": ["Hip-Hop", "Rap", "R&B", "Pop"],
      "albums": [
        {
          "name": "Honestly, Nevermind",
          "cover": "https://www.theaudiodb.com/images/media/album/3dthumb/d37r9i1655729356.png/preview",
          "release_year": 2022

        }
      ]
    },
    {
      "id": 2,
      "name": "Frank Ocean",
      "image": "https://www.theaudiodb.com/images/media/artist/thumb/tvuvru1340982366.jpg",
      "logo": "https://www.theaudiodb.com/images/media/artist/logo/frank-ocean-4ee8e4d7160af.png",
      "cutout": "",
      "bio": "",
      "label_image": "",
      "genres": ["R&B", "Hip-Hop", "Pop"],
      "albums": [
        {
          "name": "Blonde",
          "cover": "https://www.theaudiodb.com/images/media/album/3dthumb/hmgh081605354797.png/preview",
          "release_year": 2016

        }
      ]
    },
    {
      "id": 3,
      "name": "Nipsey Hussle",
      "image": "https://www.theaudiodb.com/images/media/artist/thumb/rssuvv1409717727.jpg",
      "logo": "",
      "cutout": "",
      "bio": "",
      "label_image": "",
      "genres": ["Hip-Hop", "Rap"],
      "albums": [
        {
          "name": "Victory Lap",
          "cover": "https://www.theaudiodb.com/images/media/album/thumb/wpsstq1556165530.jpg/preview",
          "release_year": 2018

        }
      ]
    },
    {
      "id": 4,
      "name": "Nas",
      "image": "https://www.theaudiodb.com/images/media/artist/thumb/qxutws1340475988.jpg",
      "logo": "https://www.theaudiodb.com/images/media/artist/logo/h830nd1628509561.png",
      "cutout": "https://www.theaudiodb.com/images/media/artist/cutout/wrtch81641422823.png",
      "bio": "",
      "label_image": "https://www.theaudiodb.com/images/media/label/logo/def-jam-recordings-4fdf9045c489d.png",
      "genres": ["Hip-Hop", "Rap"],
      "albums": [
        {
          "name": "King's Disease III",
          "cover": "https://www.theaudiodb.com/images/media/album/3dthumb/kpqnrk1669112978.png/preview",
          "release_year": 2022

        }
      ]
    },
    {
      "id": 5,
      "name": "ASAP Rocky",
      "image": "https://www.theaudiodb.com/images/media/artist/thumb/quxtwt1409502308.jpg",
      "logo": "https://www.theaudiodb.com/images/media/artist/logo/asap-rocky-4fcecaaa6cecd.png",
      "cutout": "",
      "bio": "",
      "label_image": "https://www.theaudiodb.com/images/media/label/logo/vgnrnk1641069524.png",
      "genres": ["Hip-Hop", "Rap", "Trap"],
      "albums": [
        {
          "name": "Testing",
          "cover": "https://www.theaudiodb.com/images/media/album/thumb/7fp2351640847812.jpg/preview",
          "release_year": 2018

        }
      ]
    },
    {
      "id": 6,
      "name": "Ed Sheeran",
      "image": "https://www.theaudiodb.com/images/media/artist/thumb/ysytsw1498815745.jpg",
      "logo": "https://www.theaudiodb.com/images/media/artist/logo/hvz3no1641557154.png",
      "cutout": "https://www.theaudiodb.com/images/media/artist/cutout/ef6d0c1641422718.png",
      "bio": "",
      "label_image": "https://www.theaudiodb.com/images/media/label/logo/xuxqqq1480683152.png",
      "genres": ["Pop", "Folk-Pop", "Soft Rock"],
      "albums": [
        {
          "name": "=",
          "cover": "https://www.theaudiodb.com/images/media/album/3dthumb/2sfk9j1637753624.png/preview",
          "release_year": 2021

        }
      ]
    }
  ]
    
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home artistData={artistData} />} />
            <Route path="artist/:name" element={<ArtistView artistData={artistData} />} />    
          </Route>
        </Routes>
        </BrowserRouter>
      );
}
 

export default App
