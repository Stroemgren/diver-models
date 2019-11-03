import { City } from './City';
import { Country } from './Country';
export declare const Address: (address1: string, address2: string | null, zipcode: string, city: City, country: Country) => {
    address1: string;
    address2: string | null;
    zipcode: string;
    city: City;
    country: Country;
};
export interface Address extends ReturnType<typeof Address> {
}
export declare const AddressForm: (address1: string, address2: string | null, zipcode: string, city_id: string, country_id: string) => {
    address1: string;
    address2: string | null;
    zipcode: string;
    city_id: string;
    country_id: string;
};
export interface AddressForm extends ReturnType<typeof AddressForm> {
}
