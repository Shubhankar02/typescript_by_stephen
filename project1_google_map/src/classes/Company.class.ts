import {markerInterface} from "./GoogleMap.class";
import faker from 'faker';

export class Company implements markerInterface {
    name: string;
    bio: string;
    location: {
        lat: number,
        lng: number
    }

    color: string = 'red';

    constructor() {
        this.name = faker.company.companyName();
        this.bio = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }
}