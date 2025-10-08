import axios from "axios";

const API_BASE = "https://developer.cumtd.com/api/v2.2/json";
const API_KEY = "f72461d89d9047129830fe36b3dbd347";
export async function getAllStops() {
  const apiKey = API_KEY;
  if (!apiKey) {
    throw new Error("Missing MTD_API_KEY in environment variables");
  }

  try {
    const response = await axios.get(`${API_BASE}/getstops`, {
      params: { key: apiKey },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.status, error.response?.data);
    }
    throw error;
  }
}


export async function getDeparturesByStop(stopID: string) {
  const apiKey = API_KEY;
  if (!apiKey) {
    throw new Error("Missing MTD_API_KEY in environment variables");
  }

  try {
    const response = await axios.get(`${API_BASE}/getdeparturesbystop`, {
      params: {
        key: apiKey,
        stop_id: stopID,
      },
    });
    console.log(response.data);
    return response.data; // contains departures info
    
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error:",
        error.response?.status,
        error.response?.data
      );
    }
    throw error;
  }
}
export async function getStop(stopID: string) {
  const apiKey = API_KEY;
  if (!apiKey) {
    throw new Error("Missing MTD_API_KEY in environment variables");
  }

  try {
    const response = await axios.get(`${API_BASE}/getstop`, {
      params: {
        key: apiKey,
        stop_id: stopID,
      },
    });

    const data = response.data;

    if (!data?.stops || data.stops.length === 0) {
      throw new Error(`No stop found for ID ${stopID}`);
    }

    const stop = data.stops[0];

    return stop;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error:",
        error.response?.status,
        error.response?.data
      );
    }
    throw error;
  }
}
export async function getNearStops(latitude: number, longitute : number){
    const apiKey = API_KEY;
    if (!apiKey) {
        throw new Error("Missing MTD_API_KEY in environment variables");
    }
    try{
        const response = await axios.get(`${API_BASE}/getstopsbylatlon`, {
      params: {
        key: apiKey,
        lat : latitude,
        lon : longitute, 
        count : 2
      },
    });
    const data = response.data;
    const ids  = data["stops"].map((stop : any) => stop["stop_id"])
    return ids;
    }
    catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error:",
        error.response?.status,
        error.response?.data
      );
    }
    throw error;
    }
}
