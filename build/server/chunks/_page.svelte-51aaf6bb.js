import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, f as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value } from './index-a7b8a8e3.js';
import { DateTime } from 'luxon';
import { D as DateInput, C as Classroom } from './DateInput-4b1edd18.js';

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"bg-input-grey p-2 rounded-xl hover:bg-input-hover-grey transition-colors"}">${slots.default ? slots.default({}) : ``}</button>`;
});
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
function transformNodeToArray(node) {
  let newClassroomMap = [];
  const columns = node.querySelectorAll('[id^="c-"]');
  const columnsAsArray = Array.from(columns);
  for (const column of columnsAsArray) {
    const students = column.querySelectorAll('[id^="s-"]');
    const studentsAsArray = Array.from(students);
    const studentsAsArrayOfIDs = studentsAsArray.map((student, index) => {
      const studentID = student.value;
      const studentName = Array.from(studentsAsArray[index].querySelectorAll("option")).find((e) => e.value == studentsAsArray[index].value).innerText;
      return { id: studentID, name: studentName };
    });
    newClassroomMap.push(studentsAsArrayOfIDs);
  }
  return newClassroomMap;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classroomMapData;
  let requestedDate;
  let columnsAsString;
  let columnsToRender;
  let { data } = $$props;
  let finalColumnsToSave = [];
  let classroomMapAsElement, modal;
  function refreshColumnsAsString() {
    columnsAsString = JSON.stringify(transformNodeToArray(classroomMapAsElement), null, 2);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    classroomMapData = data.classroomMapData;
    requestedDate = DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0);
    columnsAsString = JSON.stringify(classroomMapData.columns || [], null, 2);
    columnsToRender = JSON.parse(columnsAsString);
    {
      if (classroomMapAsElement)
        refreshColumnsAsString();
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-m9j16m_START -->${$$result.title = `<title>Editar Mapa do Dia ${escape(requestedDate.toFormat("dd/MM"))}</title>`, ""}<!-- HEAD_svelte-m9j16m_END -->`, ""}

<div class="${"container mx-auto max-w-4xl"}">${validate_component(DateInput, "DateInput").$$render($$result, { requestedDate, route: "editar" }, {}, {})}
  <textarea class="${"font-mono bg-input-grey p-4 w-full rounded-xl"}" rows="${"3"}" readonly>${escape(columnsAsString, true)}</textarea>
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
    })}</div>
  ${validate_component(Classroom, "Classroom").$$render(
      $$result,
      {
        editable: true,
        students: data.studentsData,
        classroomMapAsElement,
        columns: columnsToRender
      },
      {
        classroomMapAsElement: ($$value) => {
          classroomMapAsElement = $$value;
          $$settled = false;
        },
        columns: ($$value) => {
          columnsToRender = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  <dialog class="${"backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white"}"${add_attribute("this", modal, 0)}><button class="${"absolute top-2 right-2 hover:text-light-grey transition-colors"}">${validate_component(CloseOutline, "CloseOutline").$$render($$result, { size: "24" }, {}, {})}</button>
    <form method="${"post"}"><h3 class="${"text-xl font-semibold text-center mb-4"}">Salvar mapa de sala do dia ${escape(requestedDate.toFormat("dd/MM"))}</h3>
      <label for="${"password"}" class="${"inline-block mb-1.5"}">Senha</label>
      <input type="${"password"}" name="${"password"}" class="${"bg-input-grey p-2 mb-2 w-full rounded-xl"}">
      <input type="${"hidden"}" name="${"columns"}"${add_attribute("value", finalColumnsToSave, 0)}>
      <input type="${"hidden"}" name="${"date"}"${add_attribute("value", requestedDate.toString(), 0)}>
      <input type="${"submit"}" value="${"Salvar"}" class="${"bg-input-grey p-2 cursor-pointer rounded-xl hover:bg-input-hover-grey transition-colors mt-2"}"></form></dialog></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-51aaf6bb.js.map
