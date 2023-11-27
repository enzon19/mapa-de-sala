/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  BarsChartProps */
/** @typedef {typeof __propDef.events}  BarsChartEvents */
/** @typedef {typeof __propDef.slots}  BarsChartSlots */
export default class BarsChart extends SvelteComponentTyped<{
    data: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BarsChartProps = typeof __propDef.props;
export type BarsChartEvents = typeof __propDef.events;
export type BarsChartSlots = typeof __propDef.slots;
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
