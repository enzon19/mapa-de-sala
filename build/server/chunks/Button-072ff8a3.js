import { c as create_ssr_component, e as escape } from './index2-fa3938dc.js';

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { moreClasses = "" } = $$props;
  if ($$props.moreClasses === void 0 && $$bindings.moreClasses && moreClasses !== void 0)
    $$bindings.moreClasses(moreClasses);
  return `<button class="${"bg-input-grey p-2 flex flex-row gap-2 items-center justify-center rounded-xl hover:bg-input-hover-grey transition-colors " + escape(moreClasses, true)}">${slots.default ? slots.default({}) : ``}</button>`;
});

export { Button as B };
//# sourceMappingURL=Button-072ff8a3.js.map
