/// <reference types="svelte-multiselect/node_modules/svelte" />
/** @typedef {typeof __propDef.props}  TagProps */
/** @typedef {typeof __propDef.events}  TagEvents */
/** @typedef {typeof __propDef.slots}  TagSlots */
export default class Tag extends SvelteComponentTyped<{
    tagType: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TagProps = typeof __propDef.props;
export type TagEvents = typeof __propDef.events;
export type TagSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tagType: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
