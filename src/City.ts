export const City = (id: string, name: string) => ({
    id, name
})

export interface City extends ReturnType<typeof City> {}