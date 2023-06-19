import { c as create_ssr_component, v as validate_component, b as each } from './index2-17e2f452.js';

const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { contentTemplate } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.contentTemplate === void 0 && $$bindings.contentTemplate && contentTemplate !== void 0)
    $$bindings.contentTemplate(contentTemplate);
  return `<div class="h-60 overflow-y-scroll"><ol class="list-decimal list-inside">${each(data, (item, index) => {
    return `<li><!-- HTML_TAG_START -->${contentTemplate(item, index)}<!-- HTML_TAG_END --></li>`;
  })}</ol></div>`;
});
function absencesContentTemplate(item) {
  return `<a href="/aluno/${item.id}">${item.name}</a>: ${item.absences.number} ${item.absences.number < 2 ? "falta" : "faltas"} (${item.absences.percentage}%)`;
}
function attendancesContentTemplate(item) {
  return `<a href="/aluno/${item.id}">${item.name}</a>: ${item.attendances.number} ${item.attendances.number < 2 ? "presença" : "presenças"} (${item.attendances.percentage}%)`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { attendancesAndAbsencesWithStudentData } = data;
  let absencesRanking = [...attendancesAndAbsencesWithStudentData].sort((a, b) => b.absences.number - a.absences.number);
  let attendancesRanking = [...attendancesAndAbsencesWithStudentData].sort((a, b) => b.attendances.number - a.attendances.number);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-158x1iq_START -->${$$result.title = `<title>Dados</title>`, ""}<meta name="description" content="Estatísticas bacanas com base nos dados coletados pelo site Mapa de Sala."><!-- HEAD_svelte-158x1iq_END -->`, ""}

<div class="container mx-auto max-w-7xl p-4 grid md:grid-cols-2 gap-4"><div class="bg-input-grey rounded-xl p-4"><h5 class="text-center font-bold text-xl">Ranking de Faltas</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Estes dados não são precisos e não devem ser usados como parâmetro.</span>
    ${validate_component(List, "List").$$render(
    $$result,
    {
      data: absencesRanking,
      contentTemplate: absencesContentTemplate
    },
    {},
    {}
  )}</div>
  <div class="bg-input-grey rounded-xl p-4"><h5 class="text-center font-bold text-xl">Ranking de Presença</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Estes dados não são precisos e não devem ser usados como parâmetro.</span>
    ${validate_component(List, "List").$$render(
    $$result,
    {
      data: attendancesRanking,
      contentTemplate: attendancesContentTemplate
    },
    {},
    {}
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2c799999.js.map
