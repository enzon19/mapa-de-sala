import { c as create_ssr_component, g as getContext, e as escape, b as each, d as add_attribute, v as validate_component, f as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value, a as subscribe } from './index2-9a6413c1.js';
import { w as writable } from './index-2244facc.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';

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
  )}><path d="${"M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm75.31,260.69a16,16,0,1,1-22.62,22.62L256,278.63l-52.69,52.68a16,16,0,0,1-22.62-22.62L233.37,256l-52.68-52.69a16,16,0,0,1,22.62-22.62L256,233.37l52.69-52.68a16,16,0,0,1,22.62,22.62L278.63,256Z"}"></path></svg>`;
});
const classroomMapColumnsData = writable([]);
function getStudentsPresentAmount(classroomMapColumnsData2) {
  return classroomMapColumnsData2.map((column) => column.filter((student) => student.id != "clssrmmp_space" && student.id != "clssrmmp_empty")).flat().length;
}
function getChairsAmount(classroomMapColumnsData2) {
  return classroomMapColumnsData2.map((column) => column.filter((student) => student.id != "clssrmmp_space")).flat().length;
}
function getSpacesAmount(classroomMapColumnsData2) {
  return classroomMapColumnsData2.map((column) => column.filter((student) => student.id == "clssrmmp_space")).flat().length;
}
function getEmptyChairsAmount(classroomMapColumnsData2) {
  return classroomMapColumnsData2.map((column) => column.filter((student) => student.id == "clssrmmp_empty")).flat().length;
}
const Desk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isNull = false } = $$props;
  if ($$props.isNull === void 0 && $$bindings.isNull && isNull !== void 0)
    $$bindings.isNull(isNull);
  return `<div class="${[
    "px-2 py-4 my-2 max-w-120 w-full h-[60px] text-white text-center truncate",
    (!isNull ? "border-white" : "") + " " + (!isNull ? "border-2" : "")
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
  return `<select class="${"bg-input-grey p-0.5 rounded-md w-full"}"><option class="${"text-placeholder"}" value="${"clssrmmp_space"}">Buraco</option><option class="${"text-placeholder"}" value="${"clssrmmp_empty"}">Vazio</option>${each(students.filter((student) => !student.id.startsWith("clssrmmp_")), (student) => {
    return `<option class="${"text-white"}"${add_attribute("value", student.id, 0)}>${escape(student.name)}</option>`;
  })}</select>`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $classroomMapColumnsData, $$unsubscribe_classroomMapColumnsData;
  $$unsubscribe_classroomMapColumnsData = subscribe(classroomMapColumnsData, (value) => $classroomMapColumnsData = value);
  let { students = [] } = $$props;
  let { columnIndex } = $$props;
  let editable = getContext("editable");
  let indexOnInput = columnIndex + 1;
  if ($$props.students === void 0 && $$bindings.students && students !== void 0)
    $$bindings.students(students);
  if ($$props.columnIndex === void 0 && $$bindings.columnIndex && columnIndex !== void 0)
    $$bindings.columnIndex(columnIndex);
  $classroomMapColumnsData.length == 0 ? 1 : $classroomMapColumnsData.length;
  $$unsubscribe_classroomMapColumnsData();
  return `<div class="${"flex flex-col items-center justify-items-center"}">
  ${editable ? `<div class="${"flex flex-col items-center h-12"}"><input type="${"text"}" class="${"w-4 h-5 mb-1 text-white text-center bg-inherit"}"${add_attribute("value", indexOnInput, 0)}>
      <button class="${"inline-block"}">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button></div>` : ``}

  
  ${each(students, (student, studentIndex) => {
    return `${validate_component(Desk, "Desk").$$render(
      $$result,
      {
        isNull: student.name == null && !editable
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
          )}` : `${escape(student.name)}`}
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
  let studentsPresentAmount;
  let chairsAmount;
  let spacesAmount;
  let emptyChairsAmount;
  let { data } = $$props;
  let editable = getContext("editable");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  columnsAmount = data.length == 0 ? 1 : data.length;
  studentsPerColumnAmount = data[0]?.length || 1;
  inputsValue = new Array(studentsPerColumnAmount).fill("").map((e, index) => index + 1);
  studentsPresentAmount = getStudentsPresentAmount(data);
  chairsAmount = getChairsAmount(data);
  spacesAmount = getSpacesAmount(data);
  emptyChairsAmount = getEmptyChairsAmount(data);
  return `
${!editable ? `<div class="${"text-center text-sm m-4"}">Alunos: ${escape(studentsPresentAmount)} | Cadeiras: ${escape(chairsAmount)} | Vazias: ${escape(emptyChairsAmount)} | Buracos: ${escape(spacesAmount)}</div>` : ``}

<div class="${"flex flex-row"}">
  ${editable ? `<div class="${"flex-initial"}"><div class="${"flex flex-col items-center justify-items-center mt-12"}">${each(data[0] || [], (line, lineIndex) => {
    return `<div class="${"flex flex-row mr-1.5 py-4 my-2 h-[60px]"}"><input type="${"text"}" class="${"w-4 mr-0 md:w-5 md:mr-1 text-white text-center bg-inherit"}"${add_attribute("value", inputsValue[lineIndex], 0)}>
            <button class="${"w-7 inline-block text-light-grey"}">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button>
          </div>`;
  })}</div></div>` : ``}

  
  <div style="${"grid-template-columns: repeat(" + escape(columnsAmount, true) + ", minmax(0, 1fr));"}" class="${"grid gap-4 grid-cols-5 grow"}">${data.length ? each(data, (column, columnIndex) => {
    return `
      ${validate_component(Column, "Column").$$render($$result, { students: column, columnIndex }, {}, {})}`;
  }) : `<span class="${"text-center p-4"}">Sem dados.</span>`}</div></div>`;
});
const ChevronForward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><polyline points="${"184 112 328 256 184 400"}" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"}"></polyline></svg>`;
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
  )}><polyline points="${"328 112 184 256 328 400"}" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"}"></polyline></svg>`;
});
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yesterday;
  let tomorrow;
  let requestedDateAsString;
  let { requestedDate } = $$props;
  let { route = "dia" } = $$props;
  let datePickerElement;
  if ($$props.requestedDate === void 0 && $$bindings.requestedDate && requestedDate !== void 0)
    $$bindings.requestedDate(requestedDate);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  yesterday = requestedDate.minus({ day: 1 });
  tomorrow = requestedDate.plus({ day: 1 });
  requestedDateAsString = requestedDate.setLocale("pt-BR").toLocaleString({
    day: "numeric",
    month: "long",
    weekday: "long"
  });
  return `<div class="${"flex items-center gap-2 m-4 justify-center"}"><a class="${"inline-block cursor-pointer"}"${add_attribute("href", `/${route}/` + yesterday.toFormat("dd-MM"), 0)}>${validate_component(ChevronBack, "ChevronBack").$$render($$result, { size: "2rem" }, {}, {})}</a>
  <div class="${"text-center px-2 py-1 cursor-pointer w-72"}"${add_attribute("this", datePickerElement, 0)}>${escape(requestedDateAsString)}</div>
  <a class="${"inline-block cursor-pointer"}"${add_attribute("href", `/${route}/` + tomorrow.toFormat("dd-MM"), 0)}>${validate_component(ChevronForward, "ChevronForward").$$render($$result, { size: "2rem" }, {}, {})}</a></div>`;
});
const Document = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="${"M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224Z"}"></path><path d="${"M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z"}"></path></svg>`;
});
const InformationCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="${"M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z"}"></path></svg>`;
});
const Warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="${"M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z"}"></path></svg>`;
});
const tags = {
  "inaccurate": {
    text: "<b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.",
    color: "bg-bad-warning-red/80",
    icon: Warning
  },
  "exam": {
    text: "<b>Dia de prova.</b> Por ser um dia de prova, o mapa de sala estava completamente fora do padrão.",
    color: "bg-information-warning-grey",
    icon: Document
  },
  "schoolAttacks": {
    text: "<b>Ataques em escolas?</b> Nesse dia, havia rumores por conta do aniversário de Columbine.",
    color: "bg-information-warning-grey",
    icon: InformationCircle
  }
};

export { Classroom as C, DateInput as D, classroomMapColumnsData as c, tags as t };
//# sourceMappingURL=tags-2a0d170c.js.map
