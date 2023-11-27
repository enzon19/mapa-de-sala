/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  ClassroomProps */
/** @typedef {typeof __propDef.events}  ClassroomEvents */
/** @typedef {typeof __propDef.slots}  ClassroomSlots */
export default class Classroom extends SvelteComponentTyped<{
    data: any;
    hideStats?: boolean;
}, {
    selectedDesk: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ClassroomProps = typeof __propDef.props;
export type ClassroomEvents = typeof __propDef.events;
export type ClassroomSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        hideStats?: boolean;
    };
    events: {
        selectedDesk: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
