<script>
  import List from '$lib/components/stats/List.svelte'

  export let data; // dados vindo do page.server.js incluindo parâmetros da URL e coisas do banco de dados
  let {attendancesAndAbsencesWithStudentData} = data;

  let absencesRanking = [...attendancesAndAbsencesWithStudentData].sort((a, b) => b.absences.number - a.absences.number);
  let attendancesRanking = [...attendancesAndAbsencesWithStudentData].sort((a, b) => b.attendances.number - a.attendances.number);

  function absencesContentTemplate(item) {
    return `<a href="/aluno/${item.id}">${item.name}</a>: ${item.absences.number} ${item.absences.number < 2 ? 'falta' : 'faltas'} (${item.absences.percentage}%)`
  }

  function attendancesContentTemplate(item) {
    return `<a href="/aluno/${item.id}">${item.name}</a>: ${item.attendances.number} ${item.attendances.number < 2 ? 'presença' : 'presenças'} (${item.attendances.percentage}%)`
  }
</script>

<svelte:head>
  <title>Dados</title>
  <meta name="description" content="Estatísticas bacanas com base nos dados coletados pelo site Mapa de Sala.">
</svelte:head>

<div class="container mx-auto max-w-7xl p-4 grid md:grid-cols-2 gap-4">
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Ranking de Faltas</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Estes dados não são precisos e não devem ser usados como parâmetro.</span>
    <List data={absencesRanking} contentTemplate={absencesContentTemplate}/>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Ranking de Presença</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Estes dados não são precisos e não devem ser usados como parâmetro.</span>
    <List data={attendancesRanking} contentTemplate={attendancesContentTemplate}/>
  </div>
</div>