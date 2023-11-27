/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  DeskProps */
/** @typedef {typeof __propDef.events}  DeskEvents */
/** @typedef {typeof __propDef.slots}  DeskSlots */
export default class Desk extends SvelteComponentTyped<{
    columnIndex: any;
    studentIndex: any;
    highlight: any;
    isNull?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DeskProps = typeof __propDef.props;
export type DeskEvents = typeof __propDef.events;
export type DeskSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        columnIndex: any;
        studentIndex: any;
        highlight: any;
        isNull?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
