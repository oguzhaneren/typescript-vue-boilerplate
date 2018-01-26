import * as Bluebird from "bluebird";

declare global {
    export interface Promise<T> extends Bluebird<T> {

    }
}