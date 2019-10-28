const uuidv4 = require('uuid/v4')

export const City = (id: string, name: string) => ({
    id, name
})

export interface City extends ReturnType<typeof City> {}

export const CityForm = (name: string, country_id) => ({
	id: 'ci_' + uuidv4(), name, country_id
})

export interface CityForm extends ReturnType<typeof CityForm> {}