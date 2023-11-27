import { c as create_ssr_component, b as each, v as validate_component, m as missing_component, e as escape, d as add_attribute } from './index2-fa3938dc.js';
import { t as tags } from './tags-b8f1664e.js';
import { DateTime } from 'luxon';
import { e as getDayURL } from './getStats-26dc7d04.js';
import './InformationCircle-74590622.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1cwru7v_START -->${$$result.title = `<title>Tags</title>`, ""}<meta name="description" content="Todos os dias com tags e as tags."><!-- HEAD_svelte-1cwru7v_END -->`, ""}

<div class="container mx-auto px-4"><h2 class="text-center text-3xl font-bold m-4">Tags</h2>
  <div class="text-center">Veja todas as tags e os dias com elas.</div>
  <div class="flex flex-col gap-4 mt-4">${each(Object.values(tags), (tag) => {
    return `<div><div class="flex flex-row items-center">${validate_component(tag.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        class: "inline-block mr-2 w-7 h-7 outline-none",
        tabindex: "-1"
      },
      {},
      {}
    )}
          <h3 class="text-xl font-medium">${escape(tag.title)}</h3></div>
        <span class="text-sm text-neutral-400"><!-- HTML_TAG_START -->${tag.text}<!-- HTML_TAG_END --></span>
        <div class="flex md:flex-wrap md:flex-row flex-col gap-1 mt-1">${each(data.tagDays.filter(({ tags: tags2 }) => tags2.includes(tag.id)), (day) => {
      return `<a${add_attribute("href", getDayURL(day.day), 0)} class="bg-neutral-800 py-2 px-2.5 rounded-xl">${escape(DateTime.fromISO(day.day).setLocale("pt-BR").toLocaleString({
        day: "numeric",
        month: "long",
        weekday: "long"
      }))}</a>`;
    })}</div>
      </div>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8931b320.js.map
