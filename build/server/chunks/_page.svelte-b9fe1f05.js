import { c as create_ssr_component, e as escape, v as validate_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, b as each, d as add_attribute } from './index2-17e2f452.js';
import { DateTime } from 'luxon';
import 'simpleheat';
import { g as getAttendancesAndAbsences, c as countAttendancesAndAbsences, a as generateRankedGroupedPositionHumanReadable, b as generateFrequencyOfPosition } from './getStats-d0566680.js';
import { B as Button } from './Button-e25897ae.js';

const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><polyline points="112 244 256 100 400 244" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"}"></polyline><line x1="256" y1="120" x2="256" y2="412" style="${"fill:none;stroke:" + escape(color, true) + ";stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"}"></line></svg>`;
});
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><circle cx="256" cy="256" r="64"></circle><path d="M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96c-42.52,0-84.33,12.15-124.27,36.11C90.66,156.54,53.76,192.23,21.71,238.18a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416c46.71,0,93.81-14.43,136.2-41.72,38.46-24.77,72.72-59.66,99.08-100.92A32.2,32.2,0,0,0,490.84,238.6ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z"></path></svg>`;
});
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z"></path><path d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z"></path><path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z"></path></svg>`;
});
const Funnel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M296,464a23.88,23.88,0,0,1-7.55-1.23l-80.15-26.67A23.92,23.92,0,0,1,192,413.32V294.11a.44.44,0,0,0-.09-.13L23.26,97.54A30,30,0,0,1,46.05,48H466a30,30,0,0,1,22.79,49.54L320.09,294a.77.77,0,0,0-.09.13V440a23.93,23.93,0,0,1-24,24Z"></path></svg>`;
});
const LockClosed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M368,192H352V112a96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Zm-48,0H192V112a64,64,0,1,1,128,0Z"></path></svg>`;
});
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm96,240H256a16,16,0,0,1-16-16V128a16,16,0,0,1,32,0V256h80a16,16,0,0,1,0,32Z"></path></svg>`;
});
const css = {
  code: ".tooltip.show{white-space:nowrap !important}",
  map: null
};
const Streak = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { daysPossible = [] } = $$props;
  let { daysTracked = [] } = $$props;
  function getDayURL(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    const dayForURL = dayAsDateTime.toFormat("dd-MM");
    return `/dia/${dayForURL}`;
  }
  if ($$props.daysPossible === void 0 && $$bindings.daysPossible && daysPossible !== void 0)
    $$bindings.daysPossible(daysPossible);
  if ($$props.daysTracked === void 0 && $$bindings.daysTracked && daysTracked !== void 0)
    $$bindings.daysTracked(daysTracked);
  $$result.css.add(css);
  return `<div class="grid grid-rows-5 grid-flow-col justify-items-center gap-1">${each(daysPossible, (day, index) => {
    return `<a${add_attribute("href", getDayURL(day), 0)}><div class="${[
      "w-4 h-4 rounded-sm bg-neutral-600",
      daysTracked.includes(day) ? "bg-neutral-300" : ""
    ].join(" ").trim()}"${add_attribute("index", index, 0)}></div>
    </a>`;
  })}
</div>`;
});
const Heatmap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { allClassroomMapData } = $$props;
  let { studentID } = $$props;
  let { invertDeskCounting } = $$props;
  let { compensate: compensate2 } = $$props;
  const daysWithJustFiveColumns = allClassroomMapData.filter((classroomMapData) => classroomMapData.columns.length === 5);
  const maxDesksByDay = daysWithJustFiveColumns.map((classroomMapData) => classroomMapData.columns[0].length);
  const maxDesksEver = Math.max(...maxDesksByDay);
  const frequencyOfPosition = generateFrequencyOfPosition(daysWithJustFiveColumns, studentID, invertDeskCounting, compensate2 ? maxDesksEver : -1).filter(({ position }) => position[0] > -1);
  Math.max(...frequencyOfPosition.map((data) => data.frequency));
  frequencyOfPosition.map(({ position, frequency }) => [...position.map((position2) => (position2 + 1) * 30), frequency]);
  if ($$props.allClassroomMapData === void 0 && $$bindings.allClassroomMapData && allClassroomMapData !== void 0)
    $$bindings.allClassroomMapData(allClassroomMapData);
  if ($$props.studentID === void 0 && $$bindings.studentID && studentID !== void 0)
    $$bindings.studentID(studentID);
  if ($$props.invertDeskCounting === void 0 && $$bindings.invertDeskCounting && invertDeskCounting !== void 0)
    $$bindings.invertDeskCounting(invertDeskCounting);
  if ($$props.compensate === void 0 && $$bindings.compensate && compensate2 !== void 0)
    $$bindings.compensate(compensate2);
  return `<canvas class="border-neutral-400 border-2" id="heatmap" width="180"${add_attribute("height", maxDesksEver * 32, 0)}></canvas>`;
});
const ClosedList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { summaries } = $$props;
  let { content } = $$props;
  function getDayURL(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    const dayForURL = dayAsDateTime.toFormat("dd-MM");
    return `/dia/${dayForURL}`;
  }
  function getTooltipLabel(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    return dayAsDateTime.setLocale("pt-BR").toLocaleString({
      day: "numeric",
      month: "long",
      weekday: "long"
    });
  }
  if ($$props.summaries === void 0 && $$bindings.summaries && summaries !== void 0)
    $$bindings.summaries(summaries);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${each(summaries, (summary, index) => {
    return `<details><summary><span class="cursor-pointer"><strong>${escape(index + 1)}.</strong> ${escape(summary)}</span></summary>
    <ol class="list-disc list-inside pl-5">${each(content[index], (item) => {
      return `<li><a${add_attribute("href", getDayURL(item.day), 0)}>${escape(getTooltipLabel(item.day))}</a></li>`;
    })}</ol>
  </details>`;
  })}`;
});
let compensate = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rankedGroupedPosition;
  let { data } = $$props;
  let { student, allClassroomMapData, allDays } = data;
  let { attendances, absences } = getAttendancesAndAbsences(allClassroomMapData, student.id);
  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);
  if (student.left)
    absences = absences.filter((date) => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late)
    absences = absences.filter((date) => DateTime.fromISO(date) >= firstAttendanceAsDateTime);
  const count = countAttendancesAndAbsences(attendances, absences);
  let dataType = "number";
  let invertDeskCounting = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  rankedGroupedPosition = generateRankedGroupedPositionHumanReadable(allClassroomMapData, student.id, invertDeskCounting).filter(({ position }) => !position.startsWith("0ª"));
  return `${$$result.head += `<!-- HEAD_svelte-f83u3d_START -->${$$result.title = `<title>${escape(data.student.name)}</title>`, ""}<!-- HEAD_svelte-f83u3d_END -->`, ""}

<div class="container mx-auto max-w-7xl px-4">
    
    <h2 class="text-center text-3xl font-bold m-4">${escape(data.student.name)}</h2>
    
    <div class="grid grid-cols-4 gap-4 items-center max-w-xl mx-auto p-4 rounded-xl bg-neutral-800"><div class="flex flex-col items-center text-center"><div class="text-xl font-semibold">${escape(firstAttendanceAsDateTime.toFormat("dd/MM"))}</div>
        <div class="text-sm text-neutral-500">Primeira Aparição</div></div>
      <div class="flex flex-col items-center text-center"><div class="text-xl font-semibold">${escape(lastAttendanceAsDateTime.toFormat("dd/MM"))}</div>
        <div class="text-sm text-neutral-500">Última Aparição</div></div>
      <div class="flex flex-col items-center text-center cursor-pointer"><div class="text-xl font-semibold">${escape(count.attendances[dataType] + `${""}`)}</div>
        <div class="text-sm text-neutral-500">Presenças</div></div>
      <div class="flex flex-col items-center text-center cursor-pointer"><div class="text-xl font-semibold">${escape(count.absences[dataType] + `${""}`)}</div>
        <div class="text-sm text-neutral-500">Faltas</div></div>
    </div>
  <span class="text-sm text-neutral-500 block text-center m-4">Nenhum dos dados desta página são precisos e não devem ser usados como parâmetro.</span>
  <hr class="my-4 border-neutral-500">
  <div class="grid md:grid-cols-2 gap-4"><div class="bg-input-grey rounded-xl p-4"><h5 class="text-center font-bold text-xl">Sequência de Presença</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Acompanhe e visualize sua sequência de presença ao longo do tempo.</span>
      <div class="overflow-x-auto"><div class="container my-3 max-w-0">${validate_component(Streak, "Streak").$$render(
    $$result,
    {
      daysPossible: allDays,
      daysTracked: attendances
    },
    {},
    {}
  )}</div></div></div>
    <div class="bg-input-grey rounded-xl p-4 grid grid-flow-row justify-items-center"><h5 class="font-bold text-xl">Sequência de Posição</h5>
      <div class="flex flex-col gap-1 items-center">${validate_component(LockClosed, "LockClosed").$$render(
    $$result,
    {
      class: "text-neutral-500 mx-auto focus:outline-none",
      tabindex: "-1",
      size: "2rem"
    },
    {},
    {}
  )}
        <span class="text-sm text-neutral-500 block text-center">Este dado é secreto até Dezembro.</span>
        <span class="text-sm text-neutral-400 block text-center">Usuários do Mapa de Sala Premium terão acesso a este dado em Agosto.</span></div></div>
    <div class="bg-input-grey rounded-xl p-4"><h5 class="text-center font-bold text-xl">Mapa de Calor</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Observe visualmente as áreas mais frequentemente ocupadas por você.<br>Dias com mais ou menos de 5 filas são desconsiderados do mapa de calor.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1 rounded-xl"><span class="text-center text-sm text-neutral-600 block mb-1">Ferramentas</span>
        <div class="flex sm:flex-row gap-1 justify-center flex-col">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Funnel, "Filter").$$render(
        $$result,
        {
          size: "1.2rem",
          class: "focus:outline-none",
          tabindex: "-1"
        },
        {},
        {}
      )} Filtrar
          `;
    }
  })}
          ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Eye, "Eye").$$render(
        $$result,
        {
          size: "1.2rem",
          class: "focus:outline-none",
          tabindex: "-1"
        },
        {},
        {}
      )} Visualizar
          `;
    }
  })}
          ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ArrowUp, "ArrowUp").$$render(
        $$result,
        {
          size: "1.2rem",
          class: `focus:outline-none transition-all ${""}`,
          tabindex: "-1"
        },
        {},
        {}
      )} Direção da Fila
          `;
    }
  })}</div></div>
      <div class="flex justify-center">${validate_component(Heatmap, "Heatmap").$$render(
    $$result,
    {
      allClassroomMapData,
      studentID: student.id,
      invertDeskCounting,
      compensate
    },
    {},
    {}
  )}</div></div>
    <div class="bg-input-grey rounded-xl p-4 grid grid-flow-row justify-items-center"><div><h5 class="text-center font-bold text-xl">Trajetória</h5>
        <span class="text-sm text-neutral-500 block text-center m-1">Cada vez que você mudou de lugar.</span></div>
      <div class="flex flex-col gap-1 items-center">${validate_component(Time, "Time").$$render(
    $$result,
    {
      class: "text-neutral-500 mx-auto focus:outline-none",
      tabindex: "-1",
      size: "2rem"
    },
    {},
    {}
  )}
        <span class="text-sm text-neutral-500 block text-center">Este dado será disponibilizado em breve... Preguiça.</span></div></div>
    <div class="bg-input-grey rounded-xl p-4"><h5 class="text-center font-bold text-xl">Ranking de Posição</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Quantas vezes você sentou em diferentes lugares.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1 rounded-xl"><span class="text-center text-sm text-neutral-600 block mb-1">Ferramentas</span>
        <div class="flex sm:flex-row gap-1 justify-center flex-col">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Funnel, "Filter").$$render(
        $$result,
        {
          size: "1.2rem",
          class: "focus:outline-none",
          tabindex: "-1"
        },
        {},
        {}
      )} Filtrar
          `;
    }
  })}
          ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Filter, "Sort").$$render(
        $$result,
        {
          size: "1.2rem",
          class: "focus:outline-none",
          tabindex: "-1"
        },
        {},
        {}
      )} Ordenar
          `;
    }
  })}
          ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ArrowUp, "ArrowUp").$$render(
        $$result,
        {
          size: "1.2rem",
          class: `focus:outline-none transition-all ${"rotate-180"}`,
          tabindex: "-1"
        },
        {},
        {}
      )} Direção da Fila
          `;
    }
  })}</div></div>
      ${validate_component(ClosedList, "ClosedList").$$render(
    $$result,
    {
      summaries: rankedGroupedPosition.map(({ position }) => position),
      content: rankedGroupedPosition.map(({ days }) => days)
    },
    {},
    {}
  )}</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b9fe1f05.js.map
