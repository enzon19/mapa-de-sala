import { c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component, m as missing_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value } from './index2-17e2f452.js';
import { p as page } from './stores-429a222b.js';
import { I as InformationCircle } from './InformationCircle-0a9e4634.js';
import { DateTime } from 'luxon';

const StatsChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z"></path><path d="M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z"></path><path d="M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z"></path><path d="M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z"></path></svg>`;
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M48.17,113.34A32,32,0,0,0,32,141.24V438a32,32,0,0,0,47,28.37c.43-.23.85-.47,1.26-.74l84.14-55.05a8,8,0,0,0,3.63-6.72V46.45a8,8,0,0,0-12.51-6.63Z"></path><path d="M212.36,39.31A8,8,0,0,0,200,46V403.56a8,8,0,0,0,3.63,6.72l96,62.42A8,8,0,0,0,312,466V108.67a8,8,0,0,0-3.64-6.73Z"></path><path d="M464.53,46.47a31.64,31.64,0,0,0-31.5-.88,12.07,12.07,0,0,0-1.25.74l-84.15,55a8,8,0,0,0-3.63,6.72V465.51a8,8,0,0,0,12.52,6.63l107.07-73.46a32,32,0,0,0,16.41-28v-296A32.76,32.76,0,0,0,464.53,46.47Z"></path></svg>`;
});
const today = DateTime.now().toFormat("dd/MM/yyyy");
const phrases = [
  "Juro que não sou psicopata. Só gosto de estatísticas.",
  "No final do ano vai ser mó legal ver a evolução.",
  `Já imaginou? Você formando na faculdade e bateu uma curiosidade de como estava o mapa de sala no dia ${today}?`,
  "🫵 Valorize sua posição no mapa de sala hoje!",
  "Vai ter o Recap 2023 Mapa de Sala pra você compartilhar no seu Instagramzinho...",
  "Cápsula do tempo de mapas de sala",
  "Volte no tempo e veja onde você sentava",
  "Se pergunte: por que será que nesse dia você mudou de lugar?",
  "Avalie quem era seu grupo de amigos com base em quem sentava perto de você!",
  "Tenha lembranças dessa época apenas vendo qual lugar você escolheu",
  "Não se esqueça que final do ano tem o Recap",
  "Qual será a frequência na qual você sentava nesse lugar?",
  '"Esse é o primeiro projeto do nosso futuro milionário da tecnologia" — Opinião de uma usuária',
  '"Imagina que incrível você abrir isso daqui a 20 anos e perceber que estudava com um gênio da tecnologia" — Opinião de uma usuária',
  "Lembre os nomes de quem estudava com você no ensino médio",
  "O seu lugar no mapa define seu grupo social!",
  "Qual foi o impacto de sentar nesse lugar, nesse dia?",
  "Será que em 5 anos você vai lembrar qual foi o motivo de ter escolhido esse lugar?",
  `Imagina poder falar para todo mundo que você sabe exatamente onde sentou no dia ${today}`,
  '"Kkkkkkkkkkk genial" — Opinião de um usuário'
];
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');html{background-color:#1c1c1c;color:#fff}.menuCurrentPage.svelte-1d0iw2a{--tw-bg-opacity:1;background-color:#525252}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentURL = $page.url.pathname;
  const pages = [
    {
      label: "Dados",
      icon: StatsChart,
      href: "/dados",
      pattern: /\/dados$/
    },
    {
      label: "Mapas",
      icon: Map,
      href: "/",
      pattern: /\/dia\/[0-9][0-9]?-[0-9][0-9]?$|\/$/
    },
    {
      label: "Sobre",
      icon: InformationCircle,
      href: "/sobre",
      pattern: /\/sobre$/
    }
  ];
  const randomIndex = Math.floor(Math.random() * phrases.length);
  $$result.css.add(css);
  currentURL = $page.url.pathname;
  $$unsubscribe_page();
  return `<header class="bg-darker-grey p-4 text-center flex flex-col items-center gap-4"><div><a href="/"><h1 class="text-2xl font-bold">Mapa de Sala</h1></a>
    <p class="text-sm"><a class="hover:text-light-grey transition-colors" href="/novidades">v0.4.2</a> • Feito por enzon19</p></div>
  <p class="text-sm text-light-grey">${escape(phrases[randomIndex])}</p>
  <nav class="grid grid-flow-col grid-cols-3 gap-3 text-center">${each(pages, (page2) => {
    return `<a class="${[
      "flex flex-row gap-2 justify-center items-center p-2 rounded-xl cursor-pointer transition-colors bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 svelte-1d0iw2a",
      currentURL.match(page2.pattern) ? "menuCurrentPage" : ""
    ].join(" ").trim()}"${add_attribute("href", page2.href, 0)} tabindex="0">${validate_component(page2.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        tabindex: "-1",
        class: "inline-block w-5 h-5 focus:outline-none"
      },
      {},
      {}
    )}
        ${escape(page2.label)}
      </a>`;
  })}</nav></header>
<div class="flex-grow">${slots.default ? slots.default({}) : ``}</div>
<footer class="bg-darker-grey text-center text-sm p-4 mt-4"><span>Agradecimentos: Antônio Pomarico, Davi Barcelos, Gabriel Moljo, Lívia Carnot e Lucas Castro.</span>
  <br>
  <span>Veja esse projeto no
    <a target="blank" class="underline hover:text-light-grey transition-colors" href="https://github.com/enzon19/mapa-de-sala">GitHub</a>.
    Faça uma doação
    <a target="blank" class="underline hover:text-light-grey transition-colors" href="https://enzon19.com/#donate">aqui</a>.
  </span></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-7e338e9b.js.map
