// src/types/mtd.d.ts
export type StopTuple = [string, string]; // [stop_id, stop_name]
export type DepartureTuple = [string, number, string]; // [route_id, minutes_to_departure, color]
export type Stops = {
    stops : StopTuple[]
}