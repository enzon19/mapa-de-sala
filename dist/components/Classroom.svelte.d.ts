/** @typedef {typeof __propDef.props}  ClassroomProps */
/** @typedef {typeof __propDef.events}  ClassroomEvents */
/** @typedef {typeof __propDef.slots}  ClassroomSlots */
export default class Classroom extends SvelteComponentTyped<{
    classroomMapAsElement: any;
    editable?: boolean;
    students?: any[];
    columns?: any[];
}, {
    removeColumn: CustomEvent<any>;
    changeStudent: CustomEvent<any>;
    removeLine: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ClassroomProps = typeof __propDef.props;
export type ClassroomEvents = typeof __propDef.events;
export type ClassroomSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classroomMapAsElement: any;
        editable?: boolean;
        students?: any[];
        columns?: any[];
    };
    events: {
        removeColumn: CustomEvent<any>;
        changeStudent: CustomEvent<any>;
        removeLine: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
