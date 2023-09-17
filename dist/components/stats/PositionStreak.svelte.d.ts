/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  PositionStreakProps */
/** @typedef {typeof __propDef.events}  PositionStreakEvents */
/** @typedef {typeof __propDef.slots}  PositionStreakSlots */
export default class PositionStreak extends SvelteComponentTyped<{
    allClassroomMapData: any;
    studentID: any;
    invertDeskCounting: any;
    compensate: any;
    blocked?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PositionStreakProps = typeof __propDef.props;
export type PositionStreakEvents = typeof __propDef.events;
export type PositionStreakSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        allClassroomMapData: any;
        studentID: any;
        invertDeskCounting: any;
        compensate: any;
        blocked?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
