/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  ViewControllerProps */
/** @typedef {typeof __propDef.events}  ViewControllerEvents */
/** @typedef {typeof __propDef.slots}  ViewControllerSlots */
export default class ViewController extends SvelteComponentTyped<{
    type?: string;
    compensate?: boolean;
    background?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ViewControllerProps = typeof __propDef.props;
export type ViewControllerEvents = typeof __propDef.events;
export type ViewControllerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        type?: string;
        compensate?: boolean;
        background?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
