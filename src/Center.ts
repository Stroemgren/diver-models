import { Address } from './Address'
import { Coordinate } from './Coordinate'
import { AddressForm } from './Address'

export const Center = (
	id: string,
	name: string,
	address: Address,
	coordinate: Coordinate,
	phone: string,
	email: string | null,
	website: string,
	facebook: string,
	twitter: string,
	instagram: string,
	youtube: string
) => ({
	id,
	name,
	address,
	coordinate,
	phone,
	email,
	website,
	facebook,
	twitter,
	instagram,
	youtube
})

export interface Center extends ReturnType<typeof Center> {}

export const CenterForm = (
	name: string,
	address: AddressForm,
	latitude: number,
	longitude: number,
	phone: string,
	email: string,
	website: string,
	facebook: string,
	twitter: string,
	instagram: string,
	youtube: string
) => ({
	name,
	address,
	latitude,
	longitude,
	phone,
	email,
	website,
	facebook,
	twitter,
	instagram,
	youtube
})

export interface CenterForm extends ReturnType<typeof CenterForm> {}

