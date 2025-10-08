import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListView from "./components/ListView";
import GalleryView from "./components/GalleryView";
import DetailView from "./components/DetailView";
import { getAllStops} from "./components/calls";
import type { StopTuple } from "./types/mtd";
import { parseStops } from "./components/parser";
import "./App.css"
function App() {
  const [stops, setStops] = useState<StopTuple[]>([]);

  useEffect(() => {
    const fetchStops = async () => {
      const raw = await getAllStops();
      setStops(parseStops(raw));
    }
    fetchStops();
  }, []);

  return (
    <div className="Base">
      <BrowserRouter  basename="/mp2">
        <nav>
          <Link className="navBar" to="/">ListView</Link> | <Link className="navBar" to="/gallery">Gallery</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ListView stops={stops} />} />
          <Route path="/gallery" element={<GalleryView stops={stops}/>} />
          <Route path="/details/:id" element={<DetailView stops={stops}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;