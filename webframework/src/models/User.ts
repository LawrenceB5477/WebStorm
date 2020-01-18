import {Model, ModelState} from "./Model";
import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";

export interface UserState extends ModelState {
    name?: string;
    age?: number;
    id?: number;
}

const url = "http://localhost:3000/users";

export class User extends Model<UserState> {
    constructor(data: UserState) {
        super(new Eventing(), new Sync<UserState>(url), new Attributes<UserState>(data));
    }
}