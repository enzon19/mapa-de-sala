declare namespace _default {
    namespace inaccurate {
        export const text: string;
        export const color: string;
        export { Warning as icon };
    }
    namespace exam {
        const text_1: string;
        export { text_1 as text };
        const color_1: string;
        export { color_1 as color };
        export { Document as icon };
    }
    namespace schoolAttacks {
        const text_2: string;
        export { text_2 as text };
        const color_2: string;
        export { color_2 as color };
        export { InformationCircle as icon };
    }
}
export default _default;
import { Warning } from "svelte-ionicons";
import { Document } from "svelte-ionicons";
import { InformationCircle } from "svelte-ionicons";
