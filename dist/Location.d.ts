import { Country } from "./Country";
import { Coordinate } from "./Coordinate";
import { City } from "./City";
export declare type EntryType = 'Shore' | 'Boat';
export declare type ExperienceLevel = 'Open Water' | 'Advanced Open Water';
export declare type LocationType = 'Reef' | 'Wreck' | 'Wall' | 'Cave';
export declare const Location: (id: string, name: string, description: string, city: City, country: Country, coordinate: Coordinate, entryType: EntryType, experienceLevel: ExperienceLevel, locationType: LocationType) => {
    id: string;
    name: string;
    description: string;
    city: City;
    country: Country;
    coordinate: Coordinate;
    entryType: EntryType;
    experienceLevel: ExperienceLevel;
    locationType: LocationType;
};
export interface Location extends ReturnType<typeof Location> {
}
export declare const LocationForm: (name: string, description: string, city_id: string, country_id: string, latitude: number, longitude: number, entryType: EntryType, experienceLevel: ExperienceLevel, locationType: LocationType, minDepth: number, maxDepth: number) => {
    name: string;
    description: string;
    city_id: string;
    country_id: string;
    latitude: number;
    longitude: number;
    entryType: EntryType;
    experienceLevel: ExperienceLevel;
    locationType: LocationType;
    minDepth: number;
    maxDepth: number;
};
export interface LocationForm extends ReturnType<typeof LocationForm> {
}
