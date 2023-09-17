/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  ChartProps */
/** @typedef {typeof __propDef.events}  ChartEvents */
/** @typedef {typeof __propDef.slots}  ChartSlots */
export default class Chart extends SvelteComponentTyped<{
    data: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ChartProps = typeof __propDef.props;
export type ChartEvents = typeof __propDef.events;
export type ChartSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
