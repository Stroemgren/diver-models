export declare const Photo: (photo_id: string) => {
    thumb: string;
    small: string;
    medium: string;
    large: string;
    original: string;
};
export interface Photo extends ReturnType<typeof Photo> {
}
