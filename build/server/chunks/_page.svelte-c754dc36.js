import { c as create_ssr_component, v as validate_component } from './index-a7b8a8e3.js';
import { DateTime } from 'luxon';
import { D as DateInput, C as Classroom } from './DateInput-cf269b9a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1dg17fo_START -->${$$result.title = `<title>Mapa de Sala</title>`, ""}<!-- HEAD_svelte-1dg17fo_END -->`, ""}

<div class="${"container mx-auto max-w-4xl"}">${validate_component(DateInput, "DateInput").$$render(
    $$result,
    {
      requestedDate: DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0)
    },
    {},
    {}
  )}
  ${data.classroomMapData.inaccurate ? `<div class="${"text-center m-4 bg-bad-warning-red/80 p-4 rounded-2xl"}"><i><b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.</i></div>` : ``}
  ${validate_component(Classroom, "Classroom").$$render(
    $$result,
    {
      columns: data.classroomMapData.columns || []
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c754dc36.js.map
