import { City } from './City'
import { Country } from './Country'

export const Address = (
	address1: string,
	address2: string | null,
	city: City,
	country: Country
) => ({
	address1, 
	address2, 
	city, 
	country
})

export interface Address extends ReturnType<typeof Address> {}

export const AddressForm = (
	address1: string,
	address2: string | null,
	city_id: string,
	country_id: string
) => ({
	address1,
	address2,
	city_id,
	country_id
})

export interface AddressForm extends ReturnType<typeof AddressForm> {}
