import {markerInterface} from "./GoogleMap.class";
import faker from 'faker';

export class User implements markerInterface{
    name: string;
    location: {
        lat: number,
        lng: number
    }

    color : string = 'red'

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}   