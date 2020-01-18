import axios, {AxiosResponse, AxiosPromise} from "axios";
import {ModelState, ModelSync} from "./Model";

export class Sync<T extends ModelState> implements ModelSync<T> {

    constructor(public url: string) {
    }

    fetch(id: number): AxiosPromise<T> {
        return axios.get<T>(`${this.url}/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    save(data: T): AxiosPromise<T> {
        const {id} = data;

        if (id) {
            return axios.put<T>(`${this.url}/${id}`, data)
        } else {
            return axios.post(`${this.url}`, data)
        }
    }
}