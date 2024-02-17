import { Warning, Document, InformationCircle, Flag, Snow } from 'svelte-ionicons';

export default {
  "inaccurate": {
    title: "Dados Imprecisos",
    id: "inaccurate",
    text: "<b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.",
    color: "bg-bad-warning-red/80",
    icon: Warning
  },
  "exam": {
    title: "Dia de Prova",
    id: "exam",
    text: "<b>Dia de prova.</b> Por ser um dia de prova, o mapa de sala estava completamente fora do padrão.",
    color: "bg-information-warning-grey",
    icon: Document
  },
  "schoolAttacks": {
    title: "Ataques em Escolas",
    id: "schoolAttacks",
    text: "<b>Ataques em escolas?</b> Nesse dia, havia rumores por conta do aniversário de Columbine.",
    color: "bg-information-warning-grey",
    icon: InformationCircle
  },
  "chairRevolution": {
    title: "Revolução das Cadeiras",
    id: "chairRevolution",
    text: "<b>Revolução das Cadeiras.</b> O Davi e o Lucas inventaram de criar uma nova fileira e a galera apoiou.",
    color: "bg-information-warning-grey",
    icon: Flag
  },
  "room401": {
    title: "Sala 401",
    id: "room401",
    text: "<b>Sala 401.</b> Como o ar condicionado da nossa sala quebrou, mudamos pra sala do primeiro ano (de 2023).",
    color: "bg-information-warning-grey",
    icon: Snow
  }
}