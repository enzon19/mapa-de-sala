/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  FilterControllerProps */
/** @typedef {typeof __propDef.events}  FilterControllerEvents */
/** @typedef {typeof __propDef.slots}  FilterControllerSlots */
export default class FilterController extends SvelteComponentTyped<{
    filter?: {
        day: DateTime[];
        tags: any[];
    };
}, {
    filterChanged: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FilterControllerProps = typeof __propDef.props;
export type FilterControllerEvents = typeof __propDef.events;
export type FilterControllerSlots = typeof __propDef.slots;
import { DateTime } from "luxon";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        filter?: {
            day: DateTime[];
            tags: any[];
        };
    };
    events: {
        filterChanged: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
