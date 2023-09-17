/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  SortControllerProps */
/** @typedef {typeof __propDef.events}  SortControllerEvents */
/** @typedef {typeof __propDef.slots}  SortControllerSlots */
export default class SortController extends SvelteComponentTyped<{
    sort: any;
    sortOptions?: {
        id: string;
        label: string;
    }[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SortControllerProps = typeof __propDef.props;
export type SortControllerEvents = typeof __propDef.events;
export type SortControllerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        sort: any;
        sortOptions?: {
            id: string;
            label: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
