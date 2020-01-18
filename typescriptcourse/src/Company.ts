import faker from "faker";
import {PositionAble} from "./Map";

export class Company implements PositionAble {
    name: string;
    catchPhrase: string;
    location: {
        lon: number;
        lat: number;
    };

    describe(): string {
        return `
            <h1>Company</h1>
            <p>${this.name}</p>
            <p>${this.catchPhrase}</p>
        `;
    }

    constructor() {
       this.name = faker.company.companyName();
       this.catchPhrase = faker.company.catchPhrase();
       this.location = {
           lon: parseFloat(faker.address.longitude()),
           lat: parseFloat(faker.address.latitude())
       };
    }
}