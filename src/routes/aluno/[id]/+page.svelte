<!-- Código meio porco, mas tá funcionando e o resultado tá legal! -->
<script>
  import { slide } from 'svelte/transition';
  import { supabase } from "$lib/supabaseClient";
  import { DateTime } from 'luxon';
  import { countAttendancesAndAbsences, getAttendancesAndAbsences, generateRankedGroupedPositionHumanReadable, generateAbsencesPerDayHumanReadable, generateSubjectsPerDayHumanReadable } from '$lib/getStats.js';
  const hideData = [];
  // "e6d34ef4-babc-4223-a3e3-82002b1462da"

  // icons
  import Sort from 'svelte-ionicons/Filter.svelte';
  import Filter from 'svelte-ionicons/Funnel.svelte';
  import ArrowUp from 'svelte-ionicons/ArrowUp.svelte';
  import Eye from 'svelte-ionicons/Eye.svelte';
  import Calculator from 'svelte-ionicons/Calculator.svelte';

  // components
  import Streak from '$lib/components/stats/Streak.svelte';
  import PositionStreak from '$lib/components/stats/PositionStreak.svelte';
  import Heatmap from '$lib/components/stats/Heatmap.svelte';
  import Timeline from '$lib/components/stats/Timeline.svelte';
  import ClosedList from '$lib/components/stats/ClosedList.svelte';
  import Button from '$lib/components/Button.svelte';
  import FilterController from '$lib/components/stats/controllers/FilterController.svelte';
  import SortController from '$lib/components/stats/controllers/SortController.svelte';
  import ViewController from '$lib/components/stats/controllers/ViewController.svelte';

  // dados vindo do page.server.js incluindo coisas do banco de dados
  export let data;
  let {student, allClassroomMapData, allDays} = data;
  let dataForComponents = {
    positionStreak: allClassroomMapData,
    heatmap: allClassroomMapData,
    timeline: allClassroomMapData,
    positionRanking: allClassroomMapData,
    absencesPerDay: allClassroomMapData,
    absencesPerSubject: allClassroomMapData
  };

  // --------- Perfil; Visão Geral ---------
  let { attendances, absences } = getAttendancesAndAbsences(allClassroomMapData, student);

  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);

  if (student.left === 2024) absences = absences.filter(date => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late === 2024) absences = absences.filter(date => DateTime.fromISO(date) >= firstAttendanceAsDateTime);

  const count = countAttendancesAndAbsences(attendances, absences)
  let dataType = 'number';

  function changeDataTypeDisplay() {
    dataType = dataType === 'number' ? 'percentage' : 'number';
  }

  // --------- Estatísticas ---------
  let sort = {
    positionRanking: {
      type: 'days',
      direction: 'decrescent'
    },
    timeline: {
      type: 'chronology',
      direction: 'increscent'
    },
    absencesPerDay: {
      type: 'days',
      direction: 'decrescent'
    },
    absencesPerSubject: {
      type: 'percentage',
      direction: 'decrescent'
    }
  }
	$: rankedGroupedPosition = generateRankedGroupedPositionHumanReadable(dataForComponents.positionRanking, student.id, invertDeskCounting.positionRanking, sort.positionRanking).filter(({position}) => !position.startsWith('0ª')); // esse 0ª são os dias com falta
  $: absencesPerDay = generateAbsencesPerDayHumanReadable(dataForComponents.absencesPerDay, student, sort.absencesPerDay, 2024);
  $: absencesPerSubject = generateSubjectsPerDayHumanReadable(dataForComponents.absencesPerSubject, student, sort.absencesPerSubject, 2024, simulateDays);

  // sistema de ordenar e filtrar
  let dataManipulation = {
    positionStreak: "",
    heatmap: "",
    timeline: "",
    positionRanking: "",
    absencesPerDay: "",
    absencesPerSubject: ""
  }
  let invertDeskCounting = {
    positionStreak: false,
    heatmap: false,
    timeline: false,
    positionRanking: false,
    absencesPerDay: false,
    absencesPerSubject: false
  };
  let compensate = true;
  let background = false;
  
  async function filterData(component, filter) {
    let query = supabase.from("classroomMap").select();
    const days = filter.day?.map(date => date?.toISODate());

    if (days.length === 2) {
      query = query.gte('day', days[0]).lte('day', days[1]).order('day');
    }
    
    let { data } = await query;

    if (filter.tags.length > 0) {
      data = data.filter(({tags}) => !filter.tags.some(excludedTag => tags.includes(excludedTag.id)));
      // .not("tags", "&&", `{${filter.tags.map(tag => `"${tag.id}"`).join(",")}}`)
      // .overlaps("tags", filter.tags.map(tag => tag.id));
    }

    dataForComponents[component] = data;
  }

  function changeDeskCountingOrder(component) {
    invertDeskCounting[component] = invertDeskCounting[component] === true ? false : true;
    dataManipulation[component] = '';
  }

  let simulateDays = {
    '"segunda-feira"': 0,
    '"terça-feira"': 0,
    '"quarta-feira"': 0,
    '"quinta-feira"': 0,
    '"sexta-feira"': 0
  }
</script>

<svelte:head>
  <title>{data.student.name} no Mapa de Sala</title>
  <meta name="description" content={`Veja dados interessantes sobre ${data.student.name}! Tem a primeira e última aparição, presenças, faltas, mapa de calor e outras bobagens.`}>
</svelte:head>

<div class="container mx-auto max-w-7xl px-4">
  <!-- --------- Perfil; Visão Geral --------- -->
  <h2 class="text-center text-3xl font-bold m-4">{data.student.hidden_name ? data.student.hidden_name + ' ' : ''}{data.student.name}</h2>
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
      <div class="text-xl font-semibold">{hideData.includes(student.id) ? '?' : count.attendances[dataType] + `${dataType === 'percentage' ? '%' : ''}`}</div>
      <div class="text-sm text-neutral-500">Presenças</div>
    </div>
    <div class="flex flex-col items-center text-center cursor-pointer" on:click={changeDataTypeDisplay} on:keydown={changeDataTypeDisplay}>
      <div class="text-xl font-semibold">{hideData.includes(student.id) ? '?' : count.absences[dataType] + `${dataType === 'percentage' ? '%' : ''}`}</div>
      <div class="text-sm text-neutral-500">Faltas</div>
    </div>
  </div>

  <!-- Estatísticas -->
  <hr class="my-4 border-neutral-500">
  <div class="container mx-auto max-w-7xl flex flex-row justify-between items-center mb-4">
    <span class="text-sm text-neutral-500 block text-left">Nenhum dos dados desta página são precisos e não devem ser usados como parâmetro.</span>
    <div class="p-0.5 flex flex-row gap-0.5 bg-input-grey rounded-lg items-center">
      <div class="text-sm px-2 py-1 rounded-lg text-neutral-200 bg-neutral-700">2024</div>
      <a href={student.year.includes(2023) ? `/aluno/${student.id}/2023` : `/aluno/${student.id}`} class="text-sm px-2 py-1 rounded-lg {student.year.includes(2023) ? 'text-neutral-200' : 'text-neutral-600 cursor-not-allowed'}">2023</a>
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-neutral-800 rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Sequência de Presença</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Acompanhe e visualize a sequência de presença de {data.student.name} ao longo do tempo.</span>
      <div class="overflow-x-auto">
        <div class="container my-3 max-w-0">
          <Streak daysPossible={allDays} daysTracked={attendances}/>
        </div>
      </div>
    </div>
    <div class="bg-neutral-800 rounded-xl p-4">
      <div>
        <h5 class="text-center font-bold text-xl">Sequência de Posição</h5>
        <span class="text-sm text-neutral-500 block text-center m-1">Veja há quantos dias {data.student.name} está sentando no mesmo lugar.</span>
      </div>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl">
        <div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">
          <Button moreClasses={dataManipulation.positionStreak === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.positionStreak = dataManipulation.positionStreak != 'filter' ? 'filter' : ''}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button on:click={() => changeDeskCountingOrder('positionStreak')}>
            <ArrowUp size="1.2rem" class={`focus:outline-none transition-all ${invertDeskCounting.positionStreak ? '' : 'rotate-180'}`} tabindex="-1"/> Direção da Fila
          </Button>
        </div>
        {#if dataManipulation.positionStreak === 'filter'}
          <FilterController minDate="5-2-2024" maxDate="9-12-2024" filter={{day: ['2024-02-05', '2024-12-09'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('positionStreak', event.detail.filter)}/>
        {/if}
      </div>
      <PositionStreak allClassroomMapData={dataForComponents.positionStreak} studentID={student.id} invertDeskCounting={invertDeskCounting.positionStreak} compensate={false}/>
    </div>
    <div class="bg-neutral-800 rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Mapa de Calor</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Observe visualmente as áreas mais frequentemente ocupadas por {data.student.name}.<br>Dias com mais ou menos de 9 filas são desconsiderados do mapa de calor.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl">
        <div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">
          <Button moreClasses={dataManipulation.heatmap === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.heatmap = dataManipulation.heatmap != 'filter' ? 'filter' : ''}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button moreClasses={dataManipulation.heatmap === 'view' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.heatmap = dataManipulation.heatmap != 'view' ? 'view' : ''}>
            <Eye size="1.2rem" class="focus:outline-none" tabindex="-1"/> Visualizar
          </Button>
          <Button on:click={() => changeDeskCountingOrder('heatmap')}>
            <ArrowUp size="1.2rem" class={`focus:outline-none transition-all ${invertDeskCounting.heatmap ? '' : 'rotate-180'}`} tabindex="-1"/> Direção da Fila
          </Button>
        </div>
        {#if dataManipulation.heatmap === 'filter'}
          <FilterController minDate="5-2-2024" maxDate="9-12-2024" filter={{day: ['2024-02-05', '2024-12-09'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('heatmap', event.detail.filter)}/>
        {:else if dataManipulation.heatmap === 'view'}
          <ViewController type="heatmap" bind:compensate bind:background on:sortChanged={event => filterData('heatmap', event.detail.sort)}/>
        {/if}
      </div>
      <div class="flex justify-center">
        <Heatmap allClassroomMapData={dataForComponents.heatmap} studentID={student.id} invertDeskCounting={invertDeskCounting.heatmap} {compensate} {background} maxColumns={9} heightMultiplier={34} widthMultiplier={33}/>
      </div>
    </div>
    <div class="bg-neutral-800 rounded-xl p-4">
      <div>
        <h5 class="text-center font-bold text-xl">Linha do Tempo</h5>
        <span class="text-sm text-neutral-500 block text-center m-1">Períodos em que {data.student.name} se manteve em um lugar.</span>
      </div>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl">
        <div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">
          <Button moreClasses={dataManipulation.timeline === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.timeline = dataManipulation.timeline != 'filter' ? 'filter' : ''}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button moreClasses={dataManipulation.timeline === 'sort' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.timeline = dataManipulation.timeline != 'sort' ? 'sort' : ''}>
            <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
          </Button>
          <Button on:click={() => changeDeskCountingOrder('timeline')}>
            <ArrowUp size="1.2rem" class={`focus:outline-none transition-all ${invertDeskCounting.timeline ? '' : 'rotate-180'}`} tabindex="-1"/> Direção da Fila
          </Button>
        </div>
        {#if dataManipulation.timeline === 'filter'}
          <FilterController minDate="5-2-2024" maxDate="9-12-2024" filter={{day: ['2024-02-05', '2024-12-09'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('timeline', event.detail.filter)}/>
        {:else if dataManipulation.timeline === 'sort'}
          <SortController bind:sort={sort.timeline} sortOptions={[{'id': 'chronology', 'label': 'Cronológica'}, {'id': 'days', 'label': 'Quantidade de Dias'}, {'id': 'rows', 'label': 'Fileiras'}, {'id': 'desks', 'label': 'Cadeiras'}]}/>
        {/if}
      </div>
      <Timeline allClassroomMapData={dataForComponents.timeline} student={student} invertDeskCounting={invertDeskCounting.timeline} compensate={false} sort={sort.timeline} maxHeight="16.5rem"/>
    </div>
    <div class="bg-neutral-800 rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Ranking de Posição</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Quantas vezes {data.student.name} sentou em diferentes lugares no mapa de sala.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl">
        <div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">
          <Button moreClasses={dataManipulation.positionRanking === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.positionRanking = dataManipulation.positionRanking != 'filter' ? 'filter' : ''}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button moreClasses={dataManipulation.positionRanking === 'sort' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.positionRanking = dataManipulation.positionRanking != 'sort' ? 'sort' : ''}>
            <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
          </Button>
          <Button on:click={() => changeDeskCountingOrder('positionRanking')}>
            <ArrowUp size="1.2rem" class={`focus:outline-none transition-all ${invertDeskCounting.positionRanking ? '' : 'rotate-180'}`} tabindex="-1"/> Direção da Fila
          </Button>
        </div>
        {#if dataManipulation.positionRanking === 'filter'}
          <FilterController minDate="5-2-2024" maxDate="9-12-2024" filter={{day: ['2024-02-05', '2024-12-09'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('positionRanking', event.detail.filter)}/>
        {:else if dataManipulation.positionRanking === 'sort'}
          <SortController bind:sort={sort.positionRanking}/>
        {/if}
      </div>
      <ClosedList studentID={student.id} summaries={rankedGroupedPosition.map(({position}) => position)} content={rankedGroupedPosition.map(({days}) => days)}></ClosedList>
    </div>
    <div class="bg-neutral-800 rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Faltas por Dia</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">Os dias da semana em que {data.student.name} faltou mais.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl">
        <div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">
          <Button moreClasses={dataManipulation.absencesPerDay === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesPerDay = dataManipulation.absencesPerDay != 'filter' ? 'filter' : ''}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button moreClasses={dataManipulation.absencesPerDay === 'sort' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesPerDay = dataManipulation.absencesPerDay != 'sort' ? 'sort' : ''}>
            <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
          </Button>
        </div>
        {#if dataManipulation.absencesPerDay === 'filter'}
          <FilterController minDate="5-2-2024" maxDate="9-12-2024" filter={{day: ['2024-02-05', '2024-12-09'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('absencesPerDay', event.detail.filter)}/>
        {:else if dataManipulation.absencesPerDay === 'sort'}
          <SortController bind:sort={sort.absencesPerDay} sortOptions={[{'id': 'days', 'label': 'Quantidade de Dias'}, {'id': 'weekday', 'label': 'Dia da Semana'}]}/>
        {/if}
      </div>
      <ClosedList summaries={absencesPerDay.map(({dayOfWeek}) => dayOfWeek)} content={absencesPerDay.map(({days}) => days)}></ClosedList>
    </div>
    <div class="bg-neutral-800 rounded-xl p-4">
      <h5 class="text-center font-bold text-xl">Faltas por Matéria</h5>
      <span class="text-sm text-neutral-500 block text-center m-1">As faltas na escola são contabilizadas por aula e {data.student.name} só pode faltar 25% da carga horária de cada matéria, não importando o semestre. As vezes que {data.student.name} saiu mais cedo ou chegou atrasado não são calculadas por esse site.</span>
      <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-xl">
        <div class="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 gap-1.5">
          <Button moreClasses={dataManipulation.absencesPerSubject === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesPerSubject = dataManipulation.absencesPerSubject != 'filter' ? 'filter' : ''}>
            <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
          </Button>
          <Button moreClasses={dataManipulation.absencesPerSubject === 'sort' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesPerSubject = dataManipulation.absencesPerSubject != 'sort' ? 'sort' : ''}>
            <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
          </Button>
          <Button moreClasses={dataManipulation.absencesPerSubject === 'calculate' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesPerSubject = dataManipulation.absencesPerSubject != 'calculate' ? 'calculate' : ''}>
            <Calculator size="1.2rem" class="focus:outline-none" tabindex="-1"/> Simular
          </Button>
        </div>
        {#if dataManipulation.absencesPerSubject === 'filter'}
          <FilterController minDate="5-2-2024" maxDate="9-12-2024" filter={{day: ['2024-02-05', '2024-12-09'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('absencesPerSubject', event.detail.filter)}/>
        {:else if dataManipulation.absencesPerSubject === 'sort'}
          <SortController bind:sort={sort.absencesPerSubject} sortOptions={[{'id': 'percentage', 'label': 'Porcentagem'}, {'id': 'days', 'label': 'Quantidade de Aulas'}, {'id': 'alphabetical', 'label': 'Alfabética'}]}/>
        {:else if dataManipulation.absencesPerSubject === 'calculate'}
          <div class="flex flex-col mt-1" transition:slide={{ axis: 'y', duration: 300 }}>
            <!-- <span class="text-sm text-neutral-300 text-center">Adicione ou remova dias para simular faltas</span> -->
            <div class="grid grid-cols-5 gap-1">
              {#each [{label: "Segunda", id: '"segunda-feira"'}, {label: "Terça", id: '"terça-feira"'}, {label: "Quarta", id: '"quarta-feira"'}, {label: "Quinta", id: '"quinta-feira"'}, {label: "Sexta", id: '"sexta-feira"'}] as weekday}
                <div class="flex flex-col gap-0.5">
                  <label for={weekday.id} class="text-sm text-neutral-300">{weekday.label}</label>
                  <input type="number" name={weekday.id} id={weekday.id} class="bg-input-grey px-2 py-1 rounded-xl outline-none" bind:value={simulateDays[weekday.id]}>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
      <ClosedList summaries={absencesPerSubject.map(({subject}) => subject)} content={absencesPerSubject.map(({days}) => days)}></ClosedList>
    </div>
  </div>
</div>