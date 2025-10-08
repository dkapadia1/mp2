// src/types/mtd.d.ts
export type StopTuple = [string, string, number,number]; // [stop_id, stop_name, lat, lon]
export type DepartureTuple = [string, number, string]; // [route_id, minutes_to_departure, color]
export type Stops = {
    stops : StopTuple[]
}