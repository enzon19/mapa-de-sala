/** @typedef {typeof __propDef.props}  StreakProps */
/** @typedef {typeof __propDef.events}  StreakEvents */
/** @typedef {typeof __propDef.slots}  StreakSlots */
export default class Streak extends SvelteComponentTyped<{
    daysPossible?: any[];
    daysTracked?: any[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StreakProps = typeof __propDef.props;
export type StreakEvents = typeof __propDef.events;
export type StreakSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        daysPossible?: any[];
        daysTracked?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
