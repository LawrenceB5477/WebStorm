import {Callback, ModelEvent} from "./Model";

export class Eventing implements ModelEvent {
    private events: {[name: string] : Callback[]} = {};

    on(event: string, callback: Callback): void {
        if (!(event in this.events)) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
    }

    trigger(event: string) {
        if (event in this.events) {
            for (let cb of this.events[event]) {
                cb();
            }
        }
    }
}