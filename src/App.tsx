import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListView from "./components/ListView";
import GalleryView from "./components/GalleryView";
import DetailView from "./components/DetailView";

function App() {
  return (
    <BrowserRouter basename="/mp2">
      <nav>
        <Link to="/">Home</Link> | <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/details/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;