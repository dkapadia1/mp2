import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Stops } from "../types/mtd";
//import { getAllStops } from "./calls";
//import { parseStops } from "./parser";
const ListView: React.FC<Stops> = ({stops}) => {
  const [query, setQuery] = useState("");
  const [ascending, setAscending] = useState(false);
  const [sortByName, setsortByName] = useState(false);
 // const [loading, setLoading] = useState(true);
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
  if (stops.length === 0) return <p>Loading stops…</p>;
  console.log(stops.slice(0, 5));
  const filtered = stops.filter(item =>
    item[1].toLowerCase().includes(query.toLowerCase())
  );
  let sorted = []
  if (sortByName) {
    sorted = filtered.sort((a, b) => {
        return b[1].localeCompare(a[1]);
    })
  }
  else{
    sorted = filtered
  }
  if(ascending){
    sorted.reverse();
  }
  return (
    <div className="ListView">
      <h1>List View</h1>
      
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className="sorter" onClick={() => setAscending(prev => !prev)}>{ascending? "Ascending" : "Descending"}</button>
      <button className="sorter" onClick={() => setsortByName(prev => !prev)}>{sortByName? "Name" : "Idx"}</button>
      <ul>
        {sorted.map((item, idx) => (
          <li className = "listItem" key={idx}>
            <Link to={`/details/${item[0]}`}>{item[1]}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
