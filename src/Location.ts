const uuidv4 = require('uuid/v4')
import { Country } from "./Country"
import { Coordinate } from "./Coordinate"
import { City } from "./City"

export type EntryType = 'Shore' | 'Boat'
export type ExperienceLevel = 'Open Water' | 'Advanced Open Water'
export type LocationType = 'Reef' | 'Wreck' | 'Wall' | 'Cave'

export const Location = (
	id: string,
    name: string,
    description: string,
    city: City,
    country: Country,
    coordinate: Coordinate,
    entryType: EntryType,
    requiredLevel: ExperienceLevel,
    locationType: LocationType
) => ({
	id, name, description, city, country, coordinate, entryType, requiredLevel, locationType
})

export interface Location extends ReturnType<typeof Location> {}

export const LocationForm = (
	name: string,
	description: string,
	city_id: string,
	country_id: string,
	latitude: number,
	longitude: number,
	entryType: EntryType,
	requiredLevel: ExperienceLevel,
    locationType: LocationType
) => ({
	name,
	description,
	city_id,
	country_id,
	latitude,
	longitude,
	entryType,
	requiredLevel,
	locationType
})

export interface LocationForm extends ReturnType<typeof LocationForm> {}