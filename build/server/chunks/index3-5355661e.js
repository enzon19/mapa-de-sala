import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value } from './index2-17e2f452.js';

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
function scroll_into_view_if_needed_polyfill(centerIfNeeded = true) {
  const elem = this;
  const observer = new IntersectionObserver(function([entry]) {
    const ratio = entry.intersectionRatio;
    if (ratio < 1) {
      const place = ratio <= 0 && centerIfNeeded ? `center` : `nearest`;
      elem.scrollIntoView({
        block: place,
        inline: place
      });
    }
    this.disconnect();
  });
  observer.observe(elem);
  return observer;
}
if (typeof Element !== `undefined` && !Element.prototype?.scrollIntoViewIfNeeded && typeof IntersectionObserver !== `undefined`) {
  Element.prototype.scrollIntoViewIfNeeded = scroll_into_view_if_needed_polyfill;
}

export { Funnel as F, Filter as a };
//# sourceMappingURL=index3-5355661e.js.map
