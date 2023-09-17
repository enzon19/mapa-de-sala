import { c as create_ssr_component, j as getContext, e as escape, b as each, d as add_attribute, v as validate_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, a as subscribe } from './index2-17e2f452.js';
import { i as countStudentsAttendance, j as countChairs, k as countSpaces, l as countEmptyChairs } from './mapa-de-sala-flatpickr-218d411a.js';
import { w as writable } from './index-9c1c7479.js';
import './supabaseClient-3a988c3e.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';
import { I as InformationCircle } from './InformationCircle-0a9e4634.js';

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
  return `<select class="bg-input-grey p-0.5 rounded-md w-full"><option class="text-placeholder" value="clssrmmp_space">Buraco</option><option class="text-placeholder" value="clssrmmp_empty">Vazio</option>${each(students.filter((student) => !student.id.startsWith("clssrmmp_")), (student) => {
    return `<option class="text-white"${add_attribute("value", student.id, 0)}>${escape(student.name)}</option>`;
  })}</select>`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $classroomMapLayoutWritable, $$unsubscribe_classroomMapLayoutWritable;
  $$unsubscribe_classroomMapLayoutWritable = subscribe(classroomMapLayoutWritable, (value) => $classroomMapLayoutWritable = value);
  let { students = [] } = $$props;
  let { columnIndex } = $$props;
  let editable = getContext("editable");
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
          )}` : `<a href="${"/aluno/" + escape(student.id, true)}">${escape(student.name)}</a>`}
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
  let { data } = $$props;
  let editable = getContext("editable");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  columnsAmount = data.length == 0 ? 1 : data.length;
  studentsPerColumnAmount = data[0]?.length || 1;
  inputsValue = new Array(studentsPerColumnAmount).fill("").map((e, index) => index + 1);
  studentsAmount = countStudentsAttendance(data);
  chairsAmount = countChairs(data);
  spacesAmount = countSpaces(data);
  emptyChairsAmount = countEmptyChairs(data);
  return `
${!editable ? `<div class="text-center text-sm m-4">Alunos: ${escape(studentsAmount)} | Cadeiras: ${escape(chairsAmount)} | Vazias: ${escape(emptyChairsAmount)} | Buracos: ${escape(spacesAmount)}</div>` : ``}

<div class="flex flex-row">
  ${editable ? `<div class="flex-initial"><div class="flex flex-col items-center justify-items-center mt-12">${each(data[0] || [], (line, lineIndex) => {
    return `<div class="flex flex-row mr-1.5 py-4 my-2 h-[60px]"><input type="text" class="w-4 mr-0 md:w-5 md:mr-1 text-white text-center bg-inherit"${add_attribute("value", inputsValue[lineIndex], 0)}>
            <button class="w-7 inline-block text-light-grey">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button>
          </div>`;
  })}</div></div>` : ``}

  
  <div style="${"grid-template-columns: repeat(" + escape(columnsAmount, true) + ", minmax(0, 1fr));"}" class="grid gap-4 grid-cols-5 grow">${data.length ? each(data, (column, columnIndex) => {
    return `
      ${validate_component(Column, "Column").$$render($$result, { students: column, columnIndex }, {}, {})}`;
  }) : `<span class="text-center p-4">Sem dados.</span>`}</div></div>`;
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
  )}><polyline points="184 112 328 256 184 400" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"}"></polyline></svg>`;
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
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let requestedDateAsString;
  let { requestedDate } = $$props;
  let { route = "dia" } = $$props;
  let { checkInDatabase = false } = $$props;
  let datePickerElement;
  if ($$props.requestedDate === void 0 && $$bindings.requestedDate && requestedDate !== void 0)
    $$bindings.requestedDate(requestedDate);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  if ($$props.checkInDatabase === void 0 && $$bindings.checkInDatabase && checkInDatabase !== void 0)
    $$bindings.checkInDatabase(checkInDatabase);
  requestedDateAsString = requestedDate.setLocale("pt-BR").toLocaleString({
    day: "numeric",
    month: "long",
    weekday: "long"
  });
  return `<div class="flex items-center gap-2 m-4 justify-center"><button class="inline-block cursor-pointer">${validate_component(ChevronBack, "ChevronBack").$$render(
    $$result,
    {
      size: "2rem",
      class: "focus:outline-none focus:text-neutral-400"
    },
    {},
    {}
  )}</button>
  <button class="text-center px-2 py-1 cursor-pointer w-72"${add_attribute("this", datePickerElement, 0)}>${escape(requestedDateAsString)}</button>
  <button class="inline-block cursor-pointer">${validate_component(ChevronForward, "ChevronForward").$$render(
    $$result,
    {
      size: "2rem",
      class: "focus:outline-none focus:text-neutral-400"
    },
    {},
    {}
  )}</button></div>`;
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
  )}><path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224Z"></path><path d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z"></path></svg>`;
});
const Flag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M80,480a16,16,0,0,1-16-16V68.13A24,24,0,0,1,75.9,47.41C88,40.38,112.38,32,160,32c37.21,0,78.83,14.71,115.55,27.68C305.12,70.13,333.05,80,352,80a183.84,183.84,0,0,0,71-14.5,18,18,0,0,1,25,16.58V301.44a20,20,0,0,1-12,18.31c-8.71,3.81-40.51,16.25-84,16.25-24.14,0-54.38-7.14-86.39-14.71C229.63,312.79,192.43,304,160,304c-36.87,0-55.74,5.58-64,9.11V464A16,16,0,0,1,80,480Z"></path></svg>`;
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
  )}><path d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z"></path></svg>`;
});
const tags = {
  "inaccurate": {
    title: "Dados Imprecisos",
    id: "inaccurate",
    text: "<b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.",
    color: "bg-bad-warning-red/80",
    icon: Warning
  },
  "exam": {
    title: "Dia de Prova",
    id: "exam",
    text: "<b>Dia de prova.</b> Por ser um dia de prova, o mapa de sala estava completamente fora do padrão.",
    color: "bg-information-warning-grey",
    icon: Document
  },
  "schoolAttacks": {
    title: "Ataques em Escolas",
    id: "schoolAttacks",
    text: "<b>Ataques em escolas?</b> Nesse dia, havia rumores por conta do aniversário de Columbine.",
    color: "bg-information-warning-grey",
    icon: InformationCircle
  },
  "chairRevolution": {
    title: "Revolução das Cadeiras",
    id: "chairRevolution",
    text: "<b>Revolução das Cadeiras</b> O Davi e o Lucas inventaram de criar uma nova fileira e a galera apoiou.",
    color: "bg-information-warning-grey",
    icon: Flag
  }
};

export { Classroom as C, DateInput as D, classroomMapLayoutWritable as c, tags as t };
//# sourceMappingURL=tags-4f0c6452.js.map
