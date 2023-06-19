/** @typedef {typeof __propDef.props}  ColumnProps */
/** @typedef {typeof __propDef.events}  ColumnEvents */
/** @typedef {typeof __propDef.slots}  ColumnSlots */
export default class Column extends SvelteComponentTyped<{
    columnIndex: any;
    students?: any[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColumnProps = typeof __propDef.props;
export type ColumnEvents = typeof __propDef.events;
export type ColumnSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        columnIndex: any;
        students?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
