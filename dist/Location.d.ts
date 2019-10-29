import { Country } from "./Country";
import { Coordinate } from "./Coordinate";
import { City } from "./City";
export declare type EntryType = 'Shore' | 'Boat';
export declare type ExperienceLevel = 'Open Water' | 'Advanced Open Water';
export declare type LocationType = 'Reef' | 'Wreck' | 'Wall' | 'Cave';
export declare const Location: (id: string, name: string, description: string, city: City, country: Country, coordinate: Coordinate, entryType: EntryType, requiredLevel: ExperienceLevel, locationType: LocationType) => {
    id: string;
    name: string;
    description: string;
    city: City;
    country: Country;
    coordinate: Coordinate;
    entryType: EntryType;
    requiredLevel: ExperienceLevel;
    locationType: LocationType;
};
export interface Location extends ReturnType<typeof Location> {
}
