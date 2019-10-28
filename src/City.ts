export const ICity = (id: string, name: string, country_id: string) => ({
    id, name, country_id
})

export interface ICity extends ReturnType<typeof ICity> {}