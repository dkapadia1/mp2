import axios from "axios";

const API_BASE = "https://developer.cumtd.com/api/v2.2/json";


export async function getAllStops() {
  const apiKey = process.env.MTD_API_KEY;
  if (!apiKey) {
    throw new Error("Missing MTD_API_KEY in environment variables");
  }

  try {
    const response = await axios.get(`${API_BASE}/getallstops`, {
      params: { key: apiKey },
    });

    // Axios puts the parsed JSON in response.data
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.status, error.response?.data);
    }
    throw error;
  }
}


export async function getDeparturesByStop(stopID: string) {
  const apiKey = process.env.MTD_API_KEY;
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