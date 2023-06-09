/** @typedef {typeof __propDef.props}  ListProps */
/** @typedef {typeof __propDef.events}  ListEvents */
/** @typedef {typeof __propDef.slots}  ListSlots */
export default class List extends SvelteComponentTyped<{
    data: any;
    contentTemplate: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ListProps = typeof __propDef.props;
export type ListEvents = typeof __propDef.events;
export type ListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        contentTemplate: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
