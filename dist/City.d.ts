export declare const City: (id: string, name: string) => {
    id: string;
    name: string;
};
export interface City extends ReturnType<typeof City> {
}
export declare const CityForm: (name: string, country_id: any) => {
    id: string;
    name: string;
    country_id: any;
};
export interface CityForm extends ReturnType<typeof CityForm> {
}
