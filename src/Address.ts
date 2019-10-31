import { City } from './City'
import { Country } from './Country'

export const Address = (
	address1: string,
	address2: string | null,
	zipcode: string,
	city: City,
	country: Country
) => ({
	address1, 
	address2,
	zipcode,
	city, 
	country
})

export interface Address extends ReturnType<typeof Address> {}

export const AddressForm = (
	address1: string,
	address2: string | null,
	zipcode: string,
	city_id: string,
	country_id: string
) => ({
	address1,
	address2,
	zipcode,
	city_id,
	country_id
})

export interface AddressForm extends ReturnType<typeof AddressForm> {}
