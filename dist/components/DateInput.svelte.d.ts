/** @typedef {typeof __propDef.props}  DateInputProps */
/** @typedef {typeof __propDef.events}  DateInputEvents */
/** @typedef {typeof __propDef.slots}  DateInputSlots */
export default class DateInput extends SvelteComponentTyped<{
    requestedDate: any;
    route?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DateInputProps = typeof __propDef.props;
export type DateInputEvents = typeof __propDef.events;
export type DateInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        requestedDate: any;
        route?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
