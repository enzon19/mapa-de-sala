import { c as create_ssr_component, j as getContext, e as escape, b as each, d as add_attribute, v as validate_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, a as subscribe, k as createEventDispatcher } from './index2-fa3938dc.js';
import { l as countStudentsAttendance, m as countChairs, n as countSpaces, o as countEmptyChairs } from './getStats-26dc7d04.js';
import { w as writable } from './index-2f77c735.js';

const CloseCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm75.31,260.69a16,16,0,1,1-22.62,22.62L256,278.63l-52.69,52.68a16,16,0,0,1-22.62-22.62L233.37,256l-52.68-52.69a16,16,0,0,1,22.62-22.62L256,233.37l52.69-52.68a16,16,0,0,1,22.62,22.62L278.63,256Z"></path></svg>`;
});
const classroomMapLayoutWritable = writable([]);
const css = {
  code: ".highlightDesk.svelte-1r348wd{@apply bg-yellow-500/30;}",
  map: null
};
const Desk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isNull = false } = $$props;
  let { columnIndex, studentIndex } = $$props;
  let { highlight } = $$props;
  if ($$props.isNull === void 0 && $$bindings.isNull && isNull !== void 0)
    $$bindings.isNull(isNull);
  if ($$props.columnIndex === void 0 && $$bindings.columnIndex && columnIndex !== void 0)
    $$bindings.columnIndex(columnIndex);
  if ($$props.studentIndex === void 0 && $$bindings.studentIndex && studentIndex !== void 0)
    $$bindings.studentIndex(studentIndex);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  $$result.css.add(css);
  return `<div class="${[
    "px-2 py-4 my-2 max-w-120 w-full h-[60px] text-white text-center truncate svelte-1r348wd",
    (!isNull ? "border-white" : "") + " " + (!isNull ? "border-2" : "") + " " + (highlight ? "highlightDesk" : "")
  ].join(" ").trim()}">${!isNull ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
const SelectStudent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { students = getContext("allRegisteredStudents") } = $$props;
  let { value = "clssrmmp_empty" } = $$props;
  let { studentIndex } = $$props;
  let { columnIndex } = $$props;
  if ($$props.students === void 0 && $$bindings.students && students !== void 0)
    $$bindings.students(students);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.studentIndex === void 0 && $$bindings.studentIndex && studentIndex !== void 0)
    $$bindings.studentIndex(studentIndex);
  if ($$props.columnIndex === void 0 && $$bindings.columnIndex && columnIndex !== void 0)
    $$bindings.columnIndex(columnIndex);
  return `<select class="bg-input-grey p-0.5 rounded-md w-full"><option class="text-placeholder" value="clssrmmp_space">Buraco</option><option class="text-placeholder" value="clssrmmp_empty">Vazio</option>${each(students.filter((student) => !student.id.startsWith("clssrmmp_")), (student) => {
    return `<option class="text-white"${add_attribute("value", student.id, 0)}>${escape(student.name)}</option>`;
  })}</select>`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $classroomMapLayoutWritable, $$unsubscribe_classroomMapLayoutWritable;
  $$unsubscribe_classroomMapLayoutWritable = subscribe(classroomMapLayoutWritable, (value) => $classroomMapLayoutWritable = value);
  createEventDispatcher();
  let { students = [] } = $$props;
  let { columnIndex } = $$props;
  let editable = getContext("editable");
  let minimap = getContext("minimap");
  let highlight = getContext("highlight");
  let indexOnInput = columnIndex + 1;
  if ($$props.students === void 0 && $$bindings.students && students !== void 0)
    $$bindings.students(students);
  if ($$props.columnIndex === void 0 && $$bindings.columnIndex && columnIndex !== void 0)
    $$bindings.columnIndex(columnIndex);
  $classroomMapLayoutWritable.length === 0 ? 1 : $classroomMapLayoutWritable.length;
  $$unsubscribe_classroomMapLayoutWritable();
  return `<div class="flex flex-col items-center justify-items-center">
  ${editable ? `<div class="flex flex-col items-center h-12"><input type="text" class="w-4 h-5 mb-1 text-white text-center bg-inherit"${add_attribute("value", indexOnInput, 0)}>
      <button class="inline-block">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button></div>` : ``}

  
  ${each(students, (student, studentIndex) => {
    return `${validate_component(Desk, "Desk").$$render(
      $$result,
      {
        isNull: student.name == null && !editable,
        highlight: student.id == highlight
      },
      {},
      {
        default: () => {
          return `${editable ? `${validate_component(SelectStudent, "SelectStudent").$$render(
            $$result,
            {
              value: student.id,
              columnIndex,
              studentIndex
            },
            {},
            {}
          )}` : `${minimap ? `<button class="block w-full h-full">${escape(columnIndex + 1)}, ${escape(studentIndex + 1)}</button>` : `<a href="${"/aluno/" + escape(student.id, true)}">${escape(student.name)}</a>`}`}
    `;
        }
      }
    )}`;
  })}</div>`;
});
const Classroom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnsAmount;
  let studentsPerColumnAmount;
  let inputsValue;
  let studentsAmount;
  let chairsAmount;
  let spacesAmount;
  let emptyChairsAmount;
  const tips = [
    "Clique no nome de alguém para ver dados sobre ela.",
    "Utilize as setas acima para navegar entre os dias.",
    "Clique no dia entre as setas acima para ver o calendário.",
    "Clique em uma tag para ver todas as tags e seus dias.",
    'Você pode ver todas as novidades e mudanças do site clicando ali em cima no "v1.0.0"'
  ];
  let { data } = $$props;
  let { hideStats = false } = $$props;
  let editable = getContext("editable");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.hideStats === void 0 && $$bindings.hideStats && hideStats !== void 0)
    $$bindings.hideStats(hideStats);
  columnsAmount = data.length == 0 ? 1 : data.length;
  studentsPerColumnAmount = data[0]?.length || 1;
  inputsValue = new Array(studentsPerColumnAmount).fill("").map((e, index) => index + 1);
  studentsAmount = countStudentsAttendance(data);
  chairsAmount = countChairs(data);
  spacesAmount = countSpaces(data);
  emptyChairsAmount = countEmptyChairs(data);
  return `
${!(hideStats || editable) ? `<div class="text-center text-sm m-4">Alunos: ${escape(studentsAmount)} | Cadeiras: ${escape(chairsAmount)} | Vazias: ${escape(emptyChairsAmount)} | Buracos: ${escape(spacesAmount)}</div>` : ``}

<div class="flex flex-row">
  ${editable ? `<div class="flex-initial"><div class="flex flex-col items-center justify-items-center mt-12">${each(data[0] || [], (line, lineIndex) => {
    return `<div class="flex flex-row mr-1.5 py-4 my-2 h-[60px]"><input type="text" class="w-4 mr-0 md:w-5 md:mr-1 text-white text-center bg-inherit"${add_attribute("value", inputsValue[lineIndex], 0)}>
            <button class="w-7 inline-block text-light-grey">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button>
          </div>`;
  })}</div></div>` : ``}

  
  <div style="${"grid-template-columns: repeat(" + escape(columnsAmount, true) + ", minmax(0, 1fr));"}" class="grid gap-4 grid-cols-5 grow">${data.length ? each(data, (column, columnIndex) => {
    return `
      ${validate_component(Column, "Column").$$render($$result, { students: column, columnIndex }, {}, {})}`;
  }) : `<span class="text-center p-4">Sem dados.</span>
      <span class="text-center text-sm text-neutral-400 -mt-6"><span class="font-bold">Dica: </span>${escape(tips[Math.floor(Math.random() * tips.length)])}</span>`}</div></div>`;
});
const ChevronBack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><polyline points="328 112 184 256 328 400" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"}"></polyline></svg>`;
});

export { Classroom as C, ChevronBack as a, classroomMapLayoutWritable as c };
//# sourceMappingURL=ChevronBack-4ad5ff4c.js.map
