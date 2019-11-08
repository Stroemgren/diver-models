export const Photo = (photo_id: string) => {
	const baseUrl = 'https://res.cloudinary.com/duob2cdih/image/upload'

	return {
		thumb: `${baseUrl}/c_scale,w_100/${photo_id}`,
		small: `${baseUrl}/c_scale,w_400/${photo_id}`,
		medium: `${baseUrl}/c_scale,w_1000/${photo_id}`,
		large: `${baseUrl}/c_scale,w_2500/${photo_id}`,
		original: `${baseUrl}/${photo_id}`
	}
}

export interface Photo extends ReturnType<typeof Photo> {}