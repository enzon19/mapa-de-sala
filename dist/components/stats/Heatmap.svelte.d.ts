/** @typedef {typeof __propDef.props}  HeatmapProps */
/** @typedef {typeof __propDef.events}  HeatmapEvents */
/** @typedef {typeof __propDef.slots}  HeatmapSlots */
export default class Heatmap extends SvelteComponentTyped<{
    allClassroomMapData: any;
    studentID: any;
    invertDeskCounting: any;
    compensate: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeatmapProps = typeof __propDef.props;
export type HeatmapEvents = typeof __propDef.events;
export type HeatmapSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        allClassroomMapData: any;
        studentID: any;
        invertDeskCounting: any;
        compensate: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
