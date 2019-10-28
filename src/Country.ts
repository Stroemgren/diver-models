export const Country = (id: string, name: string) => ({
	id, name
})

export interface Country extends ReturnType<typeof Country> {}