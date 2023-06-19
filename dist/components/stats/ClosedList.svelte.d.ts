/** @typedef {typeof __propDef.props}  ClosedListProps */
/** @typedef {typeof __propDef.events}  ClosedListEvents */
/** @typedef {typeof __propDef.slots}  ClosedListSlots */
export default class ClosedList extends SvelteComponentTyped<{
    summaries: any;
    content: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ClosedListProps = typeof __propDef.props;
export type ClosedListEvents = typeof __propDef.events;
export type ClosedListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        summaries: any;
        content: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
