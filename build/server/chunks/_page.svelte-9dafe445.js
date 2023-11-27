import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, b as each } from './index2-fa3938dc.js';
import './supabaseClient-3a988c3e.js';
import { DateTime } from 'luxon';
import { g as getAttendancesAndAbsences, c as countAttendancesAndAbsences, a as generateRankedGroupedPositionHumanReadable, b as generateAbsencesPerDayHumanReadable, d as generatePositionTimeline, e as getDayURL, f as generateFrequencyOfPosition } from './getStats-26dc7d04.js';
import { F as Funnel, a as Filter } from './index3-9445294b.js';
import 'simpleheat';
import { B as Button } from './Button-072ff8a3.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';
import '@supabase/supabase-js';

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
const css = {
  code: ".tooltip.show{white-space:nowrap !important}.streakTracked.svelte-12mwdq7{--tw-bg-opacity:1;background-color:#d4d4d4}",
  map: null
};
const Streak = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { daysPossible = [] } = $$props;
  let { daysTracked = [] } = $$props;
  function getDayURL2(day) {
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
    return `<a${add_attribute("href", getDayURL2(day), 0)}><div class="${[
      "w-4 h-4 rounded-sm bg-neutral-600 svelte-12mwdq7",
      daysTracked.includes(day) ? "streakTracked" : ""
    ].join(" ").trim()}"${add_attribute("index", index, 0)}></div>
    </a>`;
  })}
</div>`;
});
const PositionStreak = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let recentRange;
  let { allClassroomMapData } = $$props;
  let { studentID } = $$props;
  let { invertDeskCounting } = $$props;
  let { compensate } = $$props;
  if ($$props.allClassroomMapData === void 0 && $$bindings.allClassroomMapData && allClassroomMapData !== void 0)
    $$bindings.allClassroomMapData(allClassroomMapData);
  if ($$props.studentID === void 0 && $$bindings.studentID && studentID !== void 0)
    $$bindings.studentID(studentID);
  if ($$props.invertDeskCounting === void 0 && $$bindings.invertDeskCounting && invertDeskCounting !== void 0)
    $$bindings.invertDeskCounting(invertDeskCounting);
  if ($$props.compensate === void 0 && $$bindings.compensate && compensate !== void 0)
    $$bindings.compensate(compensate);
  data = generatePositionTimeline(allClassroomMapData, studentID, invertDeskCounting, compensate);
  recentRange = data.at(-1);
  return `<div class="flex flex-col gap-0.5 text-center"><h6 class="text-3xl font-medium text-white">${escape(recentRange.length)} ${escape(recentRange.length > 1 ? "dias" : "dia")}</h6>
  <div class="mb-1 text-sm font-normal leading-none text-neutral-400">no <a${add_attribute("href", getDayURL(recentRange[0].day, studentID), 0)} class="underline">mesmo lugar</a></div></div>`;
});
const Heatmap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let daysWithJustFiveColumns;
  let maxDesksByDay;
  let maxDesksEver;
  let frequencyOfPosition;
  let { allClassroomMapData } = $$props;
  let { studentID } = $$props;
  let { invertDeskCounting } = $$props;
  let { compensate } = $$props;
  let { background } = $$props;
  if ($$props.allClassroomMapData === void 0 && $$bindings.allClassroomMapData && allClassroomMapData !== void 0)
    $$bindings.allClassroomMapData(allClassroomMapData);
  if ($$props.studentID === void 0 && $$bindings.studentID && studentID !== void 0)
    $$bindings.studentID(studentID);
  if ($$props.invertDeskCounting === void 0 && $$bindings.invertDeskCounting && invertDeskCounting !== void 0)
    $$bindings.invertDeskCounting(invertDeskCounting);
  if ($$props.compensate === void 0 && $$bindings.compensate && compensate !== void 0)
    $$bindings.compensate(compensate);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  daysWithJustFiveColumns = allClassroomMapData.filter((classroomMapData) => classroomMapData.columns.length === 5);
  maxDesksByDay = daysWithJustFiveColumns.map((classroomMapData) => classroomMapData.columns[0].length);
  maxDesksEver = Math.max(...maxDesksByDay);
  frequencyOfPosition = generateFrequencyOfPosition(daysWithJustFiveColumns, studentID, invertDeskCounting, compensate ? maxDesksEver : -1).filter(({ position }) => position[0] > -1);
  Math.max(...frequencyOfPosition.map((data) => data.frequency));
  frequencyOfPosition.map(({ position, frequency }) => [...position.map((position2) => (position2 + 1) * 30), frequency]);
  return `<canvas${add_attribute("class", `border-neutral-400 border-2 ${background ? "bg-neutral-200" : ""}`, 0)} id="heatmap" width="180"${add_attribute("height", maxDesksEver * 32, 0)}></canvas>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let { allClassroomMapData } = $$props;
  let { student } = $$props;
  let { invertDeskCounting } = $$props;
  let { compensate } = $$props;
  let { sort } = $$props;
  if ($$props.allClassroomMapData === void 0 && $$bindings.allClassroomMapData && allClassroomMapData !== void 0)
    $$bindings.allClassroomMapData(allClassroomMapData);
  if ($$props.student === void 0 && $$bindings.student && student !== void 0)
    $$bindings.student(student);
  if ($$props.invertDeskCounting === void 0 && $$bindings.invertDeskCounting && invertDeskCounting !== void 0)
    $$bindings.invertDeskCounting(invertDeskCounting);
  if ($$props.compensate === void 0 && $$bindings.compensate && compensate !== void 0)
    $$bindings.compensate(compensate);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  data = generatePositionTimeline(allClassroomMapData, student.id, invertDeskCounting, compensate, sort);
  return `<div class="max-h-[25rem] overflow-y-auto p-1"><ol class="relative border-l border-neutral-700 grid grid-flow-row gap-6">${each(data.filter((day) => day.length > 0), (range) => {
    return `<li class="ml-4"><div class="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -left-1.5 border border-neutral-800"></div>
        <time class="mb-1 text-sm font-normal leading-none text-neutral-400">de ${escape(DateTime.fromISO(range[0].day).toFormat("dd/MM"))} a ${escape(DateTime.fromISO(range.at(-1).day).toFormat("dd/MM"))}</time>
        <h6 class="text-lg font-medium text-white">${escape(`${range[0].position[0] + 1}ª fileira, ${range[0].position[1] + 1}ª cadeira`)}</h6>
        <p class="text-neutral-300">${escape(student.name)} sentou <a${add_attribute("href", getDayURL(range[0].day, student.id), 0)} class="underline">nesta posição</a> por ${escape(range.length)} ${escape(range.length > 1 ? "dias" : "dia")}.</p>
      </li>`;
  })}</ol></div>`;
});
const ClosedList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { summaries } = $$props;
  let { content } = $$props;
  let { studentID } = $$props;
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
  if ($$props.studentID === void 0 && $$bindings.studentID && studentID !== void 0)
    $$bindings.studentID(studentID);
  return `<div class="max-h-60 overflow-y-scroll"><ol class="list-decimal list-inside">${each(summaries, (summary, index) => {
    return `<div class="flex flex-row"><li class="marker:font-bold text-right w-7"></li>
        <details class="inline-block ml-2"><summary><span class="cursor-pointer">${escape(summary)}</span></summary>
          <ol class="list-disc list-inside pl-5">${each(content[index], (item) => {
      return `<li><a${add_attribute("href", getDayURL(item.day, studentID), 0)}>${escape(getTooltipLabel(item.day))}</a></li>`;
    })}
          </ol></details>
      </div>`;
  })}</ol></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rankedGroupedPosition;
  let absencesPerDay;
  const hideData = ["e6d34ef4-babc-4223-a3e3-82002b1462da"];
  let { data } = $$props;
  let { student, allClassroomMapData, allDays } = data;
  let dataForComponents = {
    positionStreak: allClassroomMapData,
    heatmap: allClassroomMapData,
    timeline: allClassroomMapData,
    positionRanking: allClassroomMapData,
    absencesPerDay: allClassroomMapData
  };
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
  let sort = {
    positionRanking: { type: "days", direction: "decrescent" },
    timeline: {
      type: "chronology",
      direction: "increscent"
    },
    absencesPerDay: { type: "days", direction: "decrescent" }
  };
  let invertDeskCounting = {
    positionStreak: false,
    heatmap: false,
    timeline: false,
    positionRanking: false,
    absencesPerDay: false
  };
  let compensate = true;
  let background = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    rankedGroupedPosition = generateRankedGroupedPositionHumanReadable(dataForComponents.positionRanking, student.id, invertDeskCounting.positionRanking, sort.positionRanking).filter(({ position }) => !position.startsWith("0ª"));
    absencesPerDay = generateAbsencesPerDayHumanReadable(dataForComponents.absencesPerDay, student, sort.absencesPerDay);
    $$rendered = `


${$$result.head += `<!-- HEAD_svelte-qwd9sp_START -->${$$result.title = `<title>${escape(data.student.name)} no Mapa de Sala</title>`, ""}<meta name="description"${add_attribute("content", `Veja dados interessantes sobre ${data.student.name}! Tem a primeira e última aparição, presenças, faltas, mapa de calor e outras bobagens.`, 0)}><!-- HEAD_svelte-qwd9sp_END -->`, ""}

<div class="container mx-auto max-w-7xl px-4">
  <h2 class="text-center text-3xl font-bold m-4">${escape(data.student.name)}</h2>
  <div class="grid grid-cols-4 gap-4 items-center max-w-xl mx-auto p-4 rounded-xl bg-neutral-800"><div class="flex flex-col items-center text-center"><div class="text-xl font-semibold">${escape(firstAttendanceAsDateTime.toFormat("dd/MM"))}</div>
      <div class="text-sm text-neutral-500">Primeira Aparição</div></div>
    <div class="flex flex-col items-center text-center"><div class="text-xl font-semibold">${escape(lastAttendanceAsDateTime.toFormat("dd/MM"))}</div>
      <div class="text-sm text-neutral-500">Última Aparição</div></div>
    <div class="flex flex-col items-center text-center cursor-pointer"><div class="text-xl font-semibold">${escape(hideData.includes(student.id) ? "?" : count.attendances[dataType] + `${""}`)}</div>
      <div class="text-sm text-neutral-500">Presenças</div></div>
    <div class="flex flex-col items-center text-center cursor-pointer"><div class="text-xl font-semibold">${escape(hideData.includes(student.id) ? "?" : count.absences[dataType] + `${""}`)}</div>
      <div class="text-sm text-neutral-500">Faltas</div></div></div>
  <span class="text-sm text-neutral-500 block text-center m-4">Nenhum dos dados desta página são precisos e não devem ser usados como parâmetro.</span>
  
  <hr class="my-4 border-neutral-500">
  <div class="grid md:grid-cols-2 gap-4"><div class="bg-neutral-800 rounded-xl p-4"><h5 class="text-center font-bold text-xl">Sequência de Presença</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Acompanhe e visualize a sequência de presença de ${escape(data.student.name)} ao longo do tempo.</span>
      <div class="overflow-x-auto"><div class="container my-3 max-w-0">${validate_component(Streak, "Streak").$$render(
      $$result,
      {
        daysPossible: allDays,
        daysTracked: attendances
      },
      {},
      {}
    )}</div></div></div>
    <div class="bg-neutral-800 rounded-xl p-4"><div><h5 class="text-center font-bold text-xl">Sequência de Posição</h5>
        <span class="text-sm text-neutral-500 block text-center m-1">Veja há quantos dias ${escape(data.student.name)} está sentando no mesmo lugar.</span></div>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl"><div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
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
    })}</div>
        ${``}</div>
      ${validate_component(PositionStreak, "PositionStreak").$$render(
      $$result,
      {
        allClassroomMapData: dataForComponents.positionStreak,
        studentID: student.id,
        invertDeskCounting: invertDeskCounting.positionStreak,
        compensate: false
      },
      {},
      {}
    )}</div>
    <div class="bg-neutral-800 rounded-xl p-4"><h5 class="text-center font-bold text-xl">Mapa de Calor</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Observe visualmente as áreas mais frequentemente ocupadas por ${escape(data.student.name)}.<br>Dias com mais ou menos de 5 filas são desconsiderados do mapa de calor.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl"><div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
          ${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
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
    })}</div>
        ${`${``}`}</div>
      <div class="flex justify-center">${validate_component(Heatmap, "Heatmap").$$render(
      $$result,
      {
        allClassroomMapData: dataForComponents.heatmap,
        studentID: student.id,
        invertDeskCounting: invertDeskCounting.heatmap,
        compensate,
        background
      },
      {},
      {}
    )}</div></div>
    <div class="bg-neutral-800 rounded-xl p-4"><div><h5 class="text-center font-bold text-xl">Linha do Tempo</h5>
        <span class="text-sm text-neutral-500 block text-center m-1">Períodos em que ${escape(data.student.name)} se manteve em um lugar.</span></div>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl"><div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
          ${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
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
    })}</div>
        ${`${``}`}</div>
      ${validate_component(Timeline, "Timeline").$$render(
      $$result,
      {
        allClassroomMapData: dataForComponents.timeline,
        student,
        invertDeskCounting: invertDeskCounting.timeline,
        compensate: false,
        sort: sort.timeline
      },
      {},
      {}
    )}</div>
    <div class="bg-neutral-800 rounded-xl p-4"><h5 class="text-center font-bold text-xl">Ranking de Posição</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Quantas vezes ${escape(data.student.name)} sentou em diferentes lugares no mapa de sala.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl"><div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
          ${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
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
    })}</div>
        ${`${``}`}</div>
      ${validate_component(ClosedList, "ClosedList").$$render(
      $$result,
      {
        studentID: student.id,
        summaries: rankedGroupedPosition.map(({ position }) => position),
        content: rankedGroupedPosition.map(({ days }) => days)
      },
      {},
      {}
    )}</div>
    <div class="bg-neutral-800 rounded-xl p-4"><h5 class="text-center font-bold text-xl">Faltas por Dia</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Os dias da semana em que ${escape(data.student.name)} faltou mais.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl"><div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}
          ${validate_component(Button, "Button").$$render(
      $$result,
      {
        moreClasses: ""
      },
      {},
      {
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
      }
    )}</div>
        ${`${``}`}</div>
      ${validate_component(ClosedList, "ClosedList").$$render(
      $$result,
      {
        summaries: absencesPerDay.map(({ dayOfWeek }) => dayOfWeek),
        content: absencesPerDay.map(({ days }) => days)
      },
      {},
      {}
    )}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9dafe445.js.map
