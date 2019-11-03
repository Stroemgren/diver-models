import { Address } from './Address';
import { Coordinate } from './Coordinate';
import { AddressForm } from './Address';
export declare const Center: (id: string, name: string, address: Address, coordinate: Coordinate, phone: string, email: string | null, website: string, facebook: string, twitter: string, instagram: string, youtube: string) => {
    id: string;
    name: string;
    address: Address;
    coordinate: Coordinate;
    phone: string;
    email: string | null;
    website: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
};
export interface Center extends ReturnType<typeof Center> {
}
export declare const CenterForm: (name: string, address: AddressForm, latitude: number, longitude: number, phone: string, email: string, website: string, facebook: string, twitter: string, instagram: string, youtube: string) => {
    name: string;
    address: AddressForm;
    latitude: number;
    longitude: number;
    phone: string;
    email: string;
    website: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
};
export interface CenterForm extends ReturnType<typeof CenterForm> {
}
