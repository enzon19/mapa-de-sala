/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  MinimapProps */
/** @typedef {typeof __propDef.events}  MinimapEvents */
/** @typedef {typeof __propDef.slots}  MinimapSlots */
export default class Minimap extends SvelteComponentTyped<{
    allClassroomMapData: any;
    studentsData: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MinimapProps = typeof __propDef.props;
export type MinimapEvents = typeof __propDef.events;
export type MinimapSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        allClassroomMapData: any;
        studentsData: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
