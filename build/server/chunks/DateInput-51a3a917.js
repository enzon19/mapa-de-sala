import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value } from './index2-fa3938dc.js';
import './supabaseClient-3a988c3e.js';
import 'flatpickr';
import 'flatpickr/dist/l10n/pt.js';
import { a as ChevronBack } from './ChevronBack-4ad5ff4c.js';

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

export { DateInput as D };
//# sourceMappingURL=DateInput-51a3a917.js.map
