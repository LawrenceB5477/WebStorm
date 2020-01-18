import faker from "faker";
import {PositionAble} from "./Map";

export class User implements PositionAble {
    name: string;
    location: {
        lat: number;
        lon: number;
    };

    describe(): string {
        return `
            <h1>User</h1>
            <p>${this.name}</p>
        `;
    }
    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        };
    }
}