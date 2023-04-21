import { c as create_ssr_component, s as setContext, v as validate_component, b as each } from './index2-9a6413c1.js';
import { DateTime } from 'luxon';
import { D as DateInput, C as Classroom } from './tags-2a0d170c.js';
import { W as Warning } from './Warning-f4c35067.js';
import './index-2244facc.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classroomMapData;
  let classroomMapColumnsData;
  setContext("editable", false);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  classroomMapData = data.classroomMapData;
  classroomMapColumnsData = classroomMapData.columns || [];
  return `${$$result.head += `<!-- HEAD_svelte-1dg17fo_START -->${$$result.title = `<title>Mapa de Sala</title>`, ""}<!-- HEAD_svelte-1dg17fo_END -->`, ""}

<div class="${"container mx-auto max-w-4xl"}">${validate_component(DateInput, "DateInput").$$render(
    $$result,
    {
      requestedDate: DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0)
    },
    {},
    {}
  )}
  ${each(classroomMapData.tags || [], (tagType) => {
    return `${validate_component(Warning, "Warning").$$render($$result, { tagType }, {}, {})}`;
  })}
  ${validate_component(Classroom, "Classroom").$$render($$result, { data: classroomMapColumnsData }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0b1a6d56.js.map
