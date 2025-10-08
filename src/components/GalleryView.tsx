import React, {useState} from "react";
import { Link } from "react-router-dom";
import type { Stops } from "../types/mtd";
//import { getAllStops } from "./calls";
//import { parseStops } from "./parser";
const GalleryView: React.FC<Stops> = ({stops}) => {
    const [query, setQuery] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    //const [loading, setLoading] = useState(true);
        /*useEffect(() => {
        const fetchStops = async () => {
          try {
            const raw = await getAllStops();
            const parsed = parseStops(raw);
            setStops(parsed);
          } catch (err) {
            console.error("Error fetching stops:", err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchStops();
      }, []); // empty deps = run once on mount*/
      if (!stops) return <p>Loading stops…</p>;
      let filtered = stops.filter(item =>
        item[1].toLowerCase().includes(query.toLowerCase())
      );
    if (lat != "" && lon != ""){
        filtered = filtered.filter((item) =>
            Math.abs(item[2]-parseFloat(lat)) + Math.abs(item[3] - parseFloat(lon)) < .0127
        );
    }
  return (
    <div className="GalleryView">
      <h1>Gallery View</h1>
      <input 
        className="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input 
        className="latlon"
        type="text"
        placeholder="Lat..."
        value={lat}
        onChange={e => setLat(e.target.value)}
      />
      <input 
        className="latlon"
        type="text"
        placeholder="Lon..."
        value={lon}
        onChange={e => setLon(e.target.value)}
      />
      <div className = "GalleryItems">
        {filtered.map((stop, idx) => (
            <div className = "gallery-item">
                <img title = "bus" src="bus.svg" alt = "bus" className="bg"></img>
                <Link key={idx} to={`/details/${stop[0]}` }>
                    <h1>{stop[1]}</h1>
                    <>{stop[0]}</>
                </Link >
            </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
