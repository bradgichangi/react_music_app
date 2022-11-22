import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ArtistView from "./ArtistView";
import './app.css'




const App = () => {

    
    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="artist/:id" element={<ArtistView />} />
          </Routes>
        </BrowserRouter>
      );
}
 

export default App
