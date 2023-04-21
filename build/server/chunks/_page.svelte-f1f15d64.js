import { c as create_ssr_component, a as subscribe, s as setContext, e as escape, v as validate_component, d as add_attribute, b as each, f as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value } from './index2-9a6413c1.js';
import { DateTime } from 'luxon';
import { c as classroomMapColumnsData, D as DateInput, C as Classroom, t as tags } from './tags-2a0d170c.js';
import './index-2244facc.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';

const CloseOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 512 512" },
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        class: escape_attribute_value($$props.class)
      }
    ],
    {}
  )}><line x1="${"368"}" y1="${"368"}" x2="${"144"}" y2="${"144"}" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"}"></line><line x1="${"368"}" y1="${"144"}" x2="${"144"}" y2="${"368"}" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"}"></line></svg>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"bg-input-grey p-2 rounded-xl hover:bg-input-hover-grey transition-colors"}">${slots.default ? slots.default({}) : ``}</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classroomMapData;
  let requestedDate;
  let $classroomMapColumnsData, $$unsubscribe_classroomMapColumnsData;
  $$unsubscribe_classroomMapColumnsData = subscribe(classroomMapColumnsData, (value) => $classroomMapColumnsData = value);
  setContext("editable", true);
  let { data } = $$props;
  let updatedTags = [];
  let saveModal, tagsModal;
  let finalClassroomMapColumnsDataToSave = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  classroomMapData = data.classroomMapData;
  {
    classroomMapColumnsData.set(classroomMapData.columns || []);
  }
  requestedDate = DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0);
  {
    setContext("allRegisteredStudents", data.studentsData);
  }
  classroomMapData.tags;
  $classroomMapColumnsData[0]?.length || 1;
  $$unsubscribe_classroomMapColumnsData();
  return `${$$result.head += `<!-- HEAD_svelte-m9j16m_START -->${$$result.title = `<title>Editar Mapa do Dia ${escape(requestedDate.toFormat("dd/MM"))}</title>`, ""}<!-- HEAD_svelte-m9j16m_END -->`, ""}

<div class="${"container mx-auto max-w-4xl"}">${validate_component(DateInput, "DateInput").$$render($$result, { requestedDate, route: "editar" }, {}, {})}
  <div class="${"mx-2"}"><textarea class="${"font-mono bg-input-grey p-4 w-full rounded-xl"}" rows="${"3"}">${escape(JSON.stringify($classroomMapColumnsData, null, 2), true)}</textarea></div>
  <div class="${"flex flex-row justify-center gap-2 py-2"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Salvar`;
    }
  })}
    ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Adicionar coluna`;
    }
  })}
    ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Adicionar linha`;
    }
  })}
    ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Gerenciar tags`;
    }
  })}</div>
  ${validate_component(Classroom, "Classroom").$$render($$result, { data: $classroomMapColumnsData }, {}, {})}</div>


<dialog class="${"backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white"}"${add_attribute("this", saveModal, 0)}><button class="${"absolute top-2 right-2 hover:text-light-grey transition-colors"}">${validate_component(CloseOutline, "CloseOutline").$$render($$result, { size: "24" }, {}, {})}</button>
  <form method="${"post"}"><h3 class="${"text-xl font-semibold text-center mb-4"}">Salvar mapa de sala do dia ${escape(requestedDate.toFormat("dd/MM"))}</h3>
    <label for="${"password"}" class="${"inline-block mb-1.5"}">Senha</label>
    <input type="${"password"}" name="${"password"}" class="${"bg-input-grey p-2 mb-2 w-full rounded-xl"}">
    <input type="${"hidden"}" name="${"columns"}"${add_attribute("value", finalClassroomMapColumnsDataToSave, 0)}>
    <input type="${"hidden"}" name="${"tags"}"${add_attribute("value", JSON.stringify(updatedTags), 0)}>
    <input type="${"hidden"}" name="${"date"}"${add_attribute("value", requestedDate.toString(), 0)}>
    <input type="${"submit"}" value="${"Salvar"}" class="${"bg-input-grey p-2 cursor-pointer rounded-xl hover:bg-input-hover-grey transition-colors mt-2"}"></form></dialog>


<dialog class="${"backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white"}"${add_attribute("this", tagsModal, 0)}><button class="${"absolute top-2 right-2 hover:text-light-grey transition-colors"}">${validate_component(CloseOutline, "CloseOutline").$$render($$result, { size: "24" }, {}, {})}</button>
  <h3 class="${"text-xl font-semibold text-center mb-4"}">Tags do dia ${escape(requestedDate.toFormat("dd/MM"))}</h3>
  <textarea class="${"font-mono bg-input-grey p-4 w-full rounded-xl"}" rows="${"1"}">${escape(JSON.stringify(updatedTags), true)}</textarea>
  <div class="${"flex flex-row gap-2"}">${each(Object.keys(tags), (tag) => {
    return `<label><input type="${"checkbox"}" name="${"newTags"}"${add_attribute("value", tag, 0)}${~updatedTags.indexOf(tag) ? add_attribute("checked", true, 1) : ""}>
        ${escape(tag)}
      </label>`;
  })}</div></dialog>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f1f15d64.js.map
