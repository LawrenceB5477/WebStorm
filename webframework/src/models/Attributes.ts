//you can make literals types in typescript, trippy


import {ModelAttribute} from "./Model";

export class Attributes<T> implements ModelAttribute<T> {
    constructor(private data: T) {
    }

    // get(field: keyof T): T[keyof T] {
    //     return this.data[field];
    // }

    get<K extends keyof T>(field: K): T[K] {
        return this.data[field];
    }

    set(state: T): void {
        this.data = {
            ...this.data,
            ...state
        };
    }

    getAll(): T {
        return this.data;
    }
}

