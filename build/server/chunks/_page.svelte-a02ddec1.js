import { c as create_ssr_component, s as setContext, e as escape, v as validate_component, b as each } from './index2-17e2f452.js';
import { DateTime } from 'luxon';
import { D as DateInput, C as Classroom } from './tags-4f0c6452.js';
import { T as Tag } from './Tag-980f0f0c.js';
import './mapa-de-sala-flatpickr-218d411a.js';
import './index-9c1c7479.js';
import './supabaseClient-3a988c3e.js';
import '@supabase/supabase-js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';
import './InformationCircle-0a9e4634.js';

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
  return `${$$result.head += `<!-- HEAD_svelte-t2vecn_START -->${$$result.title = `<title>Mapa de Sala em ${escape(requestedDate.toFormat("dd/MM"))}</title>`, ""}<meta name="description" content="Mapa de Sala é um site que reúne dados sobre a posição de cada aluno na sala de aula. Projeto pessoal."><!-- HEAD_svelte-t2vecn_END -->`, ""}

<div class="container mx-auto max-w-4xl">${validate_component(DateInput, "DateInput").$$render($$result, { requestedDate, checkInDatabase: true }, {}, {})}
  ${each(classroomMapData.tags || [], (tagType) => {
    return `${validate_component(Tag, "Warning").$$render($$result, { tagType }, {}, {})}`;
  })}
  ${validate_component(Classroom, "Classroom").$$render($$result, { data: classroomMapLayout }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a02ddec1.js.map
