const uuidv4 = require('uuid/v4')
import { Country } from "./Country"
import { Coordinate } from "./Coordinate"
import { City } from "./City"

export type EntryType = 'Shore' | 'Boat'
export type ExperienceLevel = 'Open Water' | 'Advanced Open Water'
export type LocationType = 'Reef' | 'Wreck' | 'Wall' | 'Cave' | 'Other'

export const Location = (
	id: string,
    name: string,
    description: string,
    city: City | null,
    country: Country,
    coordinate: Coordinate,
    entryType: EntryType,
    experienceLevel: ExperienceLevel,
    locationType: LocationType,
    minDepth: number,
    maxDepth: number,
    images: string[],
    coverImage: string
) => ({
	id, name, description, city, country, coordinate, entryType, experienceLevel, locationType, minDepth, maxDepth, images, coverImage
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
	experienceLevel: ExperienceLevel,
    locationType: LocationType,
    minDepth: number,
    maxDepth: number
) => ({
	name,
	description,
	city_id,
	country_id,
	latitude,
	longitude,
	entryType,
	experienceLevel,
	locationType,
	minDepth,
	maxDepth
})

export interface LocationForm extends ReturnType<typeof LocationForm> {}