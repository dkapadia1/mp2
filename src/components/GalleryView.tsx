import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import type { StopTuple } from "../types/mtd";
import { getAllStops } from "./calls";
import { parseStops } from "./parser";
const GalleryView: React.FC = () => {
    const [query, setQuery] = useState("");
    const [stops, setStops] = useState<StopTuple[]>([]);
    const [loading, setLoading] = useState(true);
        useEffect(() => {
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
      }, []); // empty deps = run once on mount
      if (loading) return <p>Loading stops…</p>;
      console.log(stops.slice(0, 5));
      const filtered = stops.filter(item =>
        item[1].toLowerCase().includes(query.toLowerCase())
      );
    
  return (
    <div>
      <h1>Gallery View</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {filtered.map((stop, idx) => (
          <Link key={idx} to={`/details/${stop[1]}` } style = {{border:"solid"}}>
            <h1>{stop[1]}</h1>
            <>{stop[0]}</>
          </Link >
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
