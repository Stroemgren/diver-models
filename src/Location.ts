import { ICountry } from "./Country"
import { ICoordinate } from "./Coordinate"
import { ICity } from "./City"

export type IEntryType = 'Shore' | 'Boat'
export type IExperienceLevel = 'Open Water' | 'Advanced Open Water'
export type ILocationType = 'Reef' | 'Wreck' | 'Wall' | 'Cave'

export type ILocation = {
    id: string
    name: string
    description: string
    city: ICity
    country: ICountry
    coordinate: ICoordinate
    entryType: IEntryType
    requiredLevel: IExperienceLevel
    locationType: ILocationType
}