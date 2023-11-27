import { c as create_ssr_component, s as setContext, v as validate_component, b as each } from './index2-fa3938dc.js';
import { DateTime } from 'luxon';
import { C as Classroom } from './ChevronBack-4ad5ff4c.js';
import { D as DateInput } from './DateInput-51a3a917.js';
import { T as Tag } from './Tag-ec076981.js';
import './getStats-26dc7d04.js';
import './index-2f77c735.js';
import './supabaseClient-3a988c3e.js';
import '@supabase/supabase-js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';
import './tags-b8f1664e.js';
import './InformationCircle-74590622.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classroomMapData;
  let classroomMapLayout;
  let requestedDate;
  setContext("editable", false);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  classroomMapData = data.classroomMapData;
  classroomMapLayout = classroomMapData.layout || [];
  requestedDate = DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0);
  return `${$$result.head += `<!-- HEAD_svelte-z0mq3x_START -->${$$result.title = `<title>Mapa de Sala</title>`, ""}<meta name="description" content="Mapa de Sala é um site que reúne dados sobre a posição de cada aluno na sala de aula. Projeto pessoal."><!-- HEAD_svelte-z0mq3x_END -->`, ""}

<div class="container mx-auto max-w-4xl">${validate_component(DateInput, "DateInput").$$render($$result, { requestedDate, checkInDatabase: true }, {}, {})}
  ${each(classroomMapData.tags || [], (tagType) => {
    return `${validate_component(Tag, "Warning").$$render($$result, { tagType }, {}, {})}`;
  })}
  ${validate_component(Classroom, "Classroom").$$render($$result, { data: classroomMapLayout }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b043da15.js.map
