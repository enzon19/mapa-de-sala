<script>
  // icons
  import LockClosed from 'svelte-ionicons/LockClosed.svelte';
  import Time from 'svelte-ionicons/Time.svelte';
  import Sort from 'svelte-ionicons/Filter.svelte';
  import Filter from 'svelte-ionicons/Funnel.svelte';
  import ArrowUp from 'svelte-ionicons/ArrowUp.svelte';
  import Eye from 'svelte-ionicons/Eye.svelte';

  // components
  import Streak from '$lib/components/stats/Streak.svelte';
  import Heatmap from '$lib/components/stats/Heatmap.svelte';
  import ClosedList from '$lib/components/stats/ClosedList.svelte';
  import Button from '$lib/components/Button.svelte';

  import { DateTime } from 'luxon';
  import { countAttendancesAndAbsences, getAttendancesAndAbsences, generateRankedGroupedPositionHumanReadable } from '$lib/getStats.js';

  // dados vindo do page.server.js incluindo coisas do banco de dados
  export let data;
  let {student, allClassroomMapData, allDays} = data;

  // --------- Perfil; Visão Geral ---------
  let { attendances, absences } = getAttendancesAndAbsences(allClassroomMapData, student.id);

  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);

  if (student.left) absences = absences.filter(date => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late) absences = absences.filter(date => DateTime.fromISO(date) >= firstAttendanceAsDateTime);

  const count = countAttendancesAndAbsences(attendances, absences)
  let dataType = 'number';

  function changeDataTypeDisplay() {
    dataType = dataType === 'number' ? 'percentage' : 'number';
  }

  // --------- Estatísticas ---------
  // variáveis para sistema de ordenar e filtrar
  let invertDeskCounting = false;
  let compensate = true;

	$: rankedGroupedPosition = generateRankedGroupedPositionHumanReadable(allClassroomMapData, student.id, invertDeskCounting).filter(({position}) => !position.startsWith('0ª'));
  
  function changeDeskCountingOrder() {
    invertDeskCounting = invertDeskCounting === true ? false : true;
  }
</script>

<svelte:head>
  <title>{data.student.name}</title>
</svelte:head>

<div class="container mx-auto max-w-7xl px-4">
  <!-- <div class="p-4 bg-input-grey my-4 rounded-xl"> -->
    <!-- mb-4 -->
    <h2 class="text-center text-3xl font-bold m-4">{data.student.name}</h2>
    <!-- bg-back-grey -->
    <div class="grid grid-cols-4 gap-4 items-center max-w-xl mx-auto p-4 rounded-xl bg-neutral-800">
      <div class="flex flex-col items-center text-center">
        <div class="text-xl font-semibold">{firstAttendanceAsDateTime.toFormat('dd/MM')}</div>
        <div class="text-sm text-neutral-500">Primeira Aparição</div>
      </div>
      <div class="flex flex-col items-center text-center">
        <div class="text-xl font-semibold">{lastAttendanceAsDateTime.toFormat('dd/MM')}</div>
        <div class="text-sm text-neutral-500">Última Aparição</div>
      </div>
      <div class="flex flex-col items-center text-center cursor-pointer" on:click={changeDataTypeDisplay} on:keydown={changeDataTypeDisplay}>
        <div class="text-xl font-semibold">{count.attendances[dataType] + `${dataType === 'percentage' ? '%' : ''}`}</div>
        <div class="text-sm text-neutral-500">Presenças</div>
      </div>
      <div class="flex flex-col items-center text-center cursor-pointer" on:click={changeDataTypeDisplay} on:keydown={changeDataTypeDisplay}>
        <div class="text-xl font-semibold">{count.absences[dataType] + `${dataType === 'percentage' ? '%' : ''}`}</div>
        <div class="text-sm text-neutral-500">Faltas</div>
      </div>
    <!-- </div> -->
  </div>
  <span class="text-sm text-neutral-500 block text-center m-4">Nenhum dos dados desta página são precisos e não devem ser usados como parâmetro.</span>
  <hr class="my-4 border-neutral-500">
  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-input-grey rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Sequência de Presença</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Acompanhe e visualize sua sequência de presença ao longo do tempo.</span>
      <div class="overflow-x-auto">
        <div class="container my-3 max-w-0">
          <Streak daysPossible={allDays} daysTracked={attendances}/>
        </div>
      </div>
    </div>
    <div class="bg-input-grey rounded-xl p-4 grid grid-flow-row justify-items-center">
      <h5 class="font-bold text-xl">Sequência de Posição</h5>
      <div class="flex flex-col gap-1 items-center">
        <LockClosed class="text-neutral-500 mx-auto focus:outline-none" tabindex="-1" size="2rem"/>
        <span class="text-sm text-neutral-500 block text-center">Este dado é secreto até Dezembro.</span>
        <span class="text-sm text-neutral-400 block text-center">Usuários do Mapa de Sala Premium terão acesso a este dado em Agosto.</span>
      </div>
    </div>
    <div class="bg-input-grey rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Mapa de Calor</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Observe visualmente as áreas mais frequentemente ocupadas por você.<br>Dias com mais ou menos de 5 filas são desconsiderados do mapa de calor.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1 rounded-xl">
        <span class="text-center text-sm text-neutral-600 block mb-1">Ferramentas</span>
        <div class="flex sm:flex-row gap-1 justify-center flex-col">
          <Button on:click={() => alert('não tá pronto ainda!')}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button on:click={() => alert('não tá pronto ainda!')}>
            <Eye size="1.2rem" class="focus:outline-none" tabindex="-1"/> Visualizar
          </Button>
          <Button on:click={() => alert('não tá pronto ainda!')}>
            <ArrowUp size="1.2rem" class={`focus:outline-none transition-all ${invertDeskCounting ? '' : ''}`} tabindex="-1"/> Direção da Fila
          </Button>
        </div>
      </div>
      <div class="flex justify-center">
        <Heatmap allClassroomMapData={allClassroomMapData} studentID={student.id} {invertDeskCounting} {compensate}/>
      </div>
    </div>
    <div class="bg-input-grey rounded-xl p-4 grid grid-flow-row justify-items-center">
      <div>
        <h5 class="text-center font-bold text-xl">Trajetória</h5>
        <span class="text-sm text-neutral-500 block text-center m-1">Cada vez que você mudou de lugar.</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <Time class="text-neutral-500 mx-auto focus:outline-none" tabindex="-1" size="2rem"/>
        <span class="text-sm text-neutral-500 block text-center">Este dado será disponibilizado em breve... Preguiça.</span>
      </div>
    </div>
    <div class="bg-input-grey rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Ranking de Posição</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Quantas vezes você sentou em diferentes lugares.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1 rounded-xl">
        <span class="text-center text-sm text-neutral-600 block mb-1">Ferramentas</span>
        <div class="flex sm:flex-row gap-1 justify-center flex-col">
          <Button on:click={() => alert('não tá pronto ainda!')}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button on:click={() => alert('não tá pronto ainda!')}>
            <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
          </Button>
          <Button on:click={changeDeskCountingOrder}>
            <ArrowUp size="1.2rem" class={`focus:outline-none transition-all ${invertDeskCounting ? '' : 'rotate-180'}`} tabindex="-1"/> Direção da Fila
          </Button>
        </div>
      </div>
      <ClosedList summaries={rankedGroupedPosition.map(({position}) => position)} content={rankedGroupedPosition.map(({days}) => days)}></ClosedList>
    </div>
  </div>
</div>