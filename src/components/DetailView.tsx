import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import type { DepartureTuple, Stops, StopTuple } from "../types/mtd";
import { getDeparturesByStop, getStop, getNearStops } from "./calls";
import { parseDepartures } from "./parser";


const DetailView: React.FC<Stops> = ({stops}) => {
  const { id } = useParams<{ id: string }>();
  const [departures, setDepartures] = useState<DepartureTuple[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDepartures = async () => {
        try {
            if(!id){
                return;
            }
        const raw = await getDeparturesByStop(id);
        const parsed = parseDepartures(raw);
        setDepartures(parsed);
            } catch (err) {
        console.error("Error fetching stops:", err);
            } finally {
        setLoading(false);
        }
    }
    fetchDepartures();
  }

  )
     if(!id){
        return (<div>
            404 NOT FOUND
        </div>)
        }
        console.log(stops);
    const idx = stops.map(([id, title])=> id).indexOf(id);     
  return (
    <div className="DetailView">
      <h1>Detail View</h1>
      <p>{loading ? "Loading" : "Showing"} departures for {id}</p>
      <ol>
      {departures.map((departure) => (
        <li>
                <h1 className = "routeName"style={{ color: '#' + departure[2] }}>route : {departure[0]}</h1>
                <h2 className="departTime">departes in: {departure[1]}</h2>
        </li>
              ))}
    </ol>
      <div>
        {stops.length > 0 && idx > 0? <Link className = "Previous" to={`/details/${stops[idx-1][0]}`}>Previous</Link> : ""} |{" "}
        {stops.length > 0 && idx < stops.length - 1 ? <Link className = "Next" to={`/details/${stops[idx+1][0]}`}>Next</Link> : ""}
      </div>
    </div>
  );
};

export default DetailView;
