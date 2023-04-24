import { c as create_ssr_component, e as escape } from './index2-9a6413c1.js';
import { DateTime } from 'luxon';

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
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');html{background-color:#1c1c1c;color:#fff}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  $$result.css.add(css);
  return `<header class="${"bg-darker-grey p-4 text-center"}"><a href="${"/"}"><h2 class="${"text-2xl font-bold"}">Mapa de Sala</h2></a>
  <p class="${"text-sm mb-4"}"><a class="${"hover:text-light-grey transition-colors"}" href="${"/novidades"}">v0.3.1</a> • Feito por enzon19</p>
  <p class="${"text-sm text-light-grey"}">${escape(phrases[randomIndex])}</p></header>
<div class="${"flex-grow"}">${slots.default ? slots.default({}) : ``}</div>
<footer class="${"bg-darker-grey text-center text-sm p-4 mt-4"}"><span>Agradecimentos: Antônio Pomarico, Davi Barcelos, Gabriel Moljo, Lívia Carnot e Lucas Castro.</span>
  <br>
  <span>Veja esse projeto no
    <a target="${"blank"}" class="${"underline hover:text-light-grey transition-colors"}" href="${"https://github.com/enzon19/mapa-de-sala"}">GitHub</a>.
    Faça uma doação
    <a target="${"blank"}" class="${"underline hover:text-light-grey transition-colors"}" href="${"https://enzon19.com/#donate"}">aqui</a>.
  </span></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-8fac1a41.js.map
