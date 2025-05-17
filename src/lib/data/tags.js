import {
  Warning,
  Document,
  InformationCircle,
  Flag,
  Snow,
  HandLeft,
} from "svelte-ionicons";

export default {
  inaccurate: {
    title: "Dados Imprecisos",
    id: "inaccurate",
    text: "<b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.",
    color: "bg-bad-warning-red/80",
    icon: Warning,
  },
  exam: {
    title: "Dia de Prova",
    id: "exam",
    text: "<b>Dia de prova.</b> Por ser um dia de prova, o mapa de sala estava completamente fora do padrão.",
    color: "bg-information-warning-grey",
    icon: Document,
  },
  schoolAttacks: {
    title: "Ataques em Escolas",
    id: "schoolAttacks",
    text: "<b>Ataques em escolas?</b> Nesse dia, havia rumores por conta do aniversário de Columbine.",
    color: "bg-information-warning-grey",
    icon: InformationCircle,
  },
  chairRevolution: {
    title: "Revolução das Cadeiras",
    id: "chairRevolution",
    text: "<b>Revolução das Cadeiras.</b> O Davi e o Lucas inventaram de criar uma nova fileira e a galera apoiou.",
    color: "bg-information-warning-grey",
    icon: Flag,
  },
  room401: {
    title: "Sala 401",
    id: "room401",
    text: "<b>Sala 401.</b> Como o ar condicionado da nossa sala quebrou, mudamos pra sala do primeiro ano (de 2023).",
    color: "bg-information-warning-grey",
    icon: Snow,
  },
  stoppage: {
    title: "Apoio Total ao Sindicato",
    id: "stoppage",
    text: "<b>Paralisação dos Professores.</b> Embora tenha tido a paralisação, ainda tivemos algumas aulas — só duas pessoas compareceram.",
    color: "bg-information-warning-grey",
    icon: HandLeft,
  },
  sa2: {
    title: "Último Dia na 1",
    id: "sa2",
    text: "<b>Último Dia na 1.</b> Depois desse dia, nossa turma foi dividida e misturada com turmas da outra unidade para poder focar em revisões.",
    color: "bg-information-warning-grey",
    icon: InformationCircle,
  },
  readonly: {
    title: "Apenas Leitura",
    id: "readonly",
    text: '<b>Modo de Apenas Leitura.</b> Este site não poderá ser mais editado, mas o conteúdo permanecerá disponível para consulta.<br>Saiba <a href="/sobre" class="underline">por que</a> eu criei esse site. Confira o <a href="/db.json" target="_blank" class="underline">banco de dados</a> (antes em SQL) e o <a href="/editar/15-11-2024" class="underline">editor de mapas de sala</a>.',
    color: "bg-yellow-500/30",
    icon: Warning,
  },
};
