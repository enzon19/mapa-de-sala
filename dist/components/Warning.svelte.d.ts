/** @typedef {typeof __propDef.props}  WarningProps */
/** @typedef {typeof __propDef.events}  WarningEvents */
/** @typedef {typeof __propDef.slots}  WarningSlots */
export default class Warning extends SvelteComponentTyped<{
    tagType: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type WarningProps = typeof __propDef.props;
export type WarningEvents = typeof __propDef.events;
export type WarningSlots = typeof __propDef.slots;
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
