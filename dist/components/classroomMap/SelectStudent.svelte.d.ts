/** @typedef {typeof __propDef.props}  SelectStudentProps */
/** @typedef {typeof __propDef.events}  SelectStudentEvents */
/** @typedef {typeof __propDef.slots}  SelectStudentSlots */
export default class SelectStudent extends SvelteComponentTyped<{
    studentIndex: any;
    columnIndex: any;
    value?: string;
    students?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectStudentProps = typeof __propDef.props;
export type SelectStudentEvents = typeof __propDef.events;
export type SelectStudentSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        studentIndex: any;
        columnIndex: any;
        value?: string;
        students?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
