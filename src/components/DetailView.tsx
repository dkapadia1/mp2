import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import type { DepartureTuple } from "../types/mtd";
import { getDeparturesByStop, getStop, getNearStops } from "./calls";
import { parseDepartures } from "./parser";
const DetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [departures, setDepartures] = useState<DepartureTuple[]>([]);
  const [loading, setLoading] = useState(true);
  const [twoClosests, setTwoClosests] = useState<string[]>([]);
  const [title, setTitle] = useState(id);
   if(!id){
        return (<div>
            404 NOT FOUND
        </div>)
        }
  useEffect(() => {
    const fetchDepartures = async () => {
        try {
        const raw = await getDeparturesByStop(id);
        const parsed = parseDepartures(raw);
        setDepartures(parsed);
            } catch (err) {
        console.error("Error fetching stops:", err);
            } finally {
        setLoading(false);
        }
    }
    const fetchTwoClosest = async () =>{
        const data = await getStop(id);
        setTitle(data["stop_name"]);
        const lat = data['stop_points']
    }
    fetchDepartures();
  }

  )
  return (
    <div>
      <h1>Detail View</h1>
      <p>{loading ? "Showing" : "Loading"} departures for {title}</p>
      <div>
        <Link to={`/details/${Number(id) - 1}`}>Previous</Link> |{" "}
        <Link to={`/details/${Number(id) + 1}`}>Next</Link>
      </div>
    </div>
  );
};

export default DetailView;
