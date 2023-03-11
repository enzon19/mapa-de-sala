/** @typedef {typeof __propDef.props}  SelectStudentsProps */
/** @typedef {typeof __propDef.events}  SelectStudentsEvents */
/** @typedef {typeof __propDef.slots}  SelectStudentsSlots */
export default class SelectStudents extends SvelteComponentTyped<{
    id: any;
    students?: any[];
    value?: string;
}, {
    changeStudent: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectStudentsProps = typeof __propDef.props;
export type SelectStudentsEvents = typeof __propDef.events;
export type SelectStudentsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        students?: any[];
        value?: string;
    };
    events: {
        changeStudent: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
