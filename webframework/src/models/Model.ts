import axios from "axios";
import {AxiosResponse} from "axios";
import {AxiosPromise} from "axios";
import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";

export interface ModelState {
    id?: number;
}

export interface ModelAttribute<T> {
    get<K extends keyof T>(field: K): T[K];
    set(state: T): void;
    getAll(): T;
}

export interface ModelSync<T> {
    fetch(id: number): AxiosPromise<T>;
    save(data: T): AxiosPromise<T>;
}

export type Callback = () => void;

export interface ModelEvent {
    on(event: string, callback: Callback): void;
    trigger(event: string): void;
}

export class Model<T extends ModelState> {

    constructor(private eventDispatcher: ModelEvent, private syncer: ModelSync<T>, private attributes: ModelAttribute<T>) {
    }

    get get() {
        return this.attributes.get.bind(this.attributes);
    }

    //triggers change, AHAgr
    set(state: T): void {
        this.attributes.set(state);
        this.trigger("changed");
    }

    get on() {
        return this.eventDispatcher.on.bind(this.eventDispatcher);
    }

    get trigger() {
        return this.eventDispatcher.trigger.bind(this.eventDispatcher);
    }

    fetch(): void{
        const id = this.get("id");
        if (typeof id != "number") {
            throw new Error("Id is not defined!");
        } else {
            this.syncer.fetch(this.get("id"))
                .then((res: AxiosResponse<T>): void => {
                    this.set(res.data);
                })
                .catch(() => {
                    this.trigger("error");
                });
        }
    }

    save(): void {
        this.syncer.save(this.attributes.getAll())
            .then((res: AxiosResponse): void => {
                this.trigger("save");
            })
            .catch(() => {
                this.trigger("error");
            });
    }
}
