export const City = (id: string, name: string, country_id: string) => ({
    id, name, country_id
})

export interface City extends ReturnType<typeof City> {}