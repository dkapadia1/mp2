import type { StopTuple, DepartureTuple } from "../types/mtd";

export function parseStops(data: any): StopTuple[] {
  if (!data?.stops) return [];
  return data.stops.map((stop: any) => [stop.stop_id, stop.stop_name, stop.stop_points[0].stop_lat, stop.stop_points[0].stop_lon]);
}

export function parseDepartures(data: any): DepartureTuple[] {
  if (!data?.departures) return [];
  return data.departures.map((dep: any) => [
    dep.route.route_short_name,
    dep.expected_mins, // minutes until departure
    dep.route.route_color,
  ]);
}
