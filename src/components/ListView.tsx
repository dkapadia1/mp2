import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListView: React.FC = () => {
  const [query, setQuery] = useState("");
  const items = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]; // mock data

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>List View (Home)</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item, idx) => (
          <li key={idx}>
            <Link to={`/details/${idx}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
