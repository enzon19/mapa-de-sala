import { c as create_ssr_component, k as createEventDispatcher, e as escape, d as add_attribute, l as each, v as validate_component, f as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value } from './index-a7b8a8e3.js';

const Desk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isNull = false } = $$props;
  if ($$props.isNull === void 0 && $$bindings.isNull && isNull !== void 0)
    $$bindings.isNull(isNull);
  return `<div class="${[
    "px-2 py-4 my-2 max-w-120 w-full h-[60px] text-white text-center truncate",
    (!isNull ? "border-white" : "") + " " + (!isNull ? "border-2" : "")
  ].join(" ").trim()}">${!isNull ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
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
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { id } = $$props;
  let { editable = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  return `<div${add_attribute("id", "c-" + id, 0)} class="${"flex flex-col items-center justify-items-center"}">${editable ? `<button class="${["inline-block", id == 0 ? "ml-9" : ""].join(" ").trim()}">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button>` : ``}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const SelectStudents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { students = [] } = $$props;
  let { value = "" } = $$props;
  let { id } = $$props;
  if ($$props.students === void 0 && $$bindings.students && students !== void 0)
    $$bindings.students(students);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<select${add_attribute("id", "s-" + id, 0)} class="${"bg-input-grey p-0.5 rounded-md w-full"}"><option class="${"text-placeholder"}" value="${"clssrmmp_space"}">Buraco</option><option class="${"text-placeholder"}" value="${"clssrmmp_empty"}">Vazio</option>${each(students.filter((student) => !student.id.startsWith("clssrmmp_")), (student) => {
    return `<option class="${"text-white"}"${add_attribute("value", student.id, 0)}>${escape(student.name)}</option>`;
  })}</select>`;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { editable = false } = $$props;
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  return `${editable ? `<div class="${"flex flex-row gap-2 items-center"}">${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Classroom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnsAmount;
  createEventDispatcher();
  let { columns = [] } = $$props;
  let { students = [] } = $$props;
  let { editable = false } = $$props;
  let { classroomMapAsElement } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.students === void 0 && $$bindings.students && students !== void 0)
    $$bindings.students(students);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.classroomMapAsElement === void 0 && $$bindings.classroomMapAsElement && classroomMapAsElement !== void 0)
    $$bindings.classroomMapAsElement(classroomMapAsElement);
  columnsAmount = columns.length == 0 ? 1 : columns.length;
  return `<div style="${"grid-template-columns: repeat(" + escape(columnsAmount, true) + ", minmax(0, 1fr));"}" class="${"grid gap-4 grid-cols-5"}"${add_attribute("this", classroomMapAsElement, 0)}>${columns.length ? each(columns, (column, columnIndex) => {
    return `${validate_component(Column, "Column").$$render($$result, { id: columnIndex, editable }, {}, {
      default: () => {
        return `${each(column, (student, studentIndex) => {
          return `${validate_component(Wrapper, "Wrapper").$$render($$result, { editable }, {}, {
            default: () => {
              return `
          ${columnIndex == 0 && editable ? `<button class="${"w-7 inline-block text-light-grey"}">${validate_component(CloseCircle, "CloseCircle").$$render($$result, { size: "1.7rem", class: "text-light-grey" }, {}, {})}</button>` : ``}
          ${validate_component(Desk, "Desk").$$render(
                $$result,
                {
                  isNull: student.name == null && !editable
                },
                {},
                {
                  default: () => {
                    return `${editable ? `${validate_component(SelectStudents, "SelectStudents").$$render(
                      $$result,
                      {
                        students,
                        value: student.id,
                        id: studentIndex
                      },
                      {},
                      {}
                    )}` : `${escape(student.name)}`}
          `;
                  }
                }
              )}
        
        `;
            }
          })}`;
        })}
    `;
      }
    })}`;
  }) : `<span class="${"text-center p-4"}">Sem dados.</span>`}</div>`;
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
  <div class="${"text-center px-2 py-1 cursor-pointer w-72"}">${escape(requestedDateAsString)}</div>
  <a class="${"inline-block cursor-pointer"}"${add_attribute("href", `/${route}/` + tomorrow.toFormat("dd-MM"), 0)}>${validate_component(ChevronForward, "ChevronForward").$$render($$result, { size: "2rem" }, {}, {})}</a></div>`;
});

export { Classroom as C, DateInput as D };
//# sourceMappingURL=DateInput-4b1edd18.js.map
