import { DateTime } from "luxon";

function randomDateBetween(startStr, endStr) {
  const start = DateTime.fromISO(startStr);
  const end = DateTime.fromISO(endStr);
  const diffDays = end.diff(start, "days").days;
  const randomOffset = Math.floor(Math.random() * diffDays);
  return start.plus({ days: randomOffset }).toFormat("dd/MM/yyyy");
}

const ranges = [
  ["2023-02-06", "2023-12-11"],
  ["2024-02-05", "2024-11-14"],
];

const [start, end] = ranges[Math.floor(Math.random() * ranges.length)];
const date = randomDateBetween(start, end);

export default [
  "Juro que não sou psicopata. Só gosto de estatísticas.",
  "No final do ano vai ser mó legal ver a evolução.",
  `Já imaginou? Você formando na faculdade e bateu uma curiosidade de como estava o mapa de sala no dia ${date}?`,
  "🫵 Valorize sua posição no mapa de sala hoje!",
  "Vai ter o Recap Mapa de Sala pra você compartilhar no seu Instagramzinho...",
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
  `Imagina poder falar para todo mundo que você sabe exatamente onde sentou no dia ${date}`,
  '"Kkkkkkkkkkk genial" — Opinião de um usuário',
];
