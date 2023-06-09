import { Warning, Document, InformationCircle, Flag } from 'svelte-ionicons';

export default {
  "inaccurate": {
    text: "<b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.",
    color: "bg-bad-warning-red/80",
    icon: Warning
  },
  "exam": {
    text: "<b>Dia de prova.</b> Por ser um dia de prova, o mapa de sala estava completamente fora do padrão.",
    color: "bg-information-warning-grey",
    icon: Document
  },
  "schoolAttacks": {
    text: "<b>Ataques em escolas?</b> Nesse dia, havia rumores por conta do aniversário de Columbine.",
    color: "bg-information-warning-grey",
    icon: InformationCircle
  },
  "chairRevolution": {
    text: "<b>Revolução das Cadeiras</b> O Davi e o Lucas inventaram de criar uma nova fileira e a galera apoiou.",
    color: "bg-information-warning-grey",
    icon: Flag
  }
}