<script>
  import { supabase } from "$lib/supabaseClient";
  import { generateDatasetsOfStudentsAttendanceAndChairs, generateDatasetsOfSpacesAndEmptyChairs, getAttendancesAndAbsencesFixedAndWithStudentData, generateDatasetsOfAbsencesPerDay } from '$lib/getStats.js';
  import { DateTime } from 'luxon';
  const hideData = [];
  // "e6d34ef4-babc-4223-a3e3-82002b1462da"

  // icons
  import Sort from 'svelte-ionicons/Filter.svelte';
  import Filter from 'svelte-ionicons/Funnel.svelte';
  import Eye from 'svelte-ionicons/Eye.svelte';

  // components
  import List from '$lib/components/stats/List.svelte';
  import Chart from '$lib/components/stats/Chart.svelte';
  import BarsChart from '$lib/components/stats/BarsChart.svelte';
  import Minimap from '$lib/components/stats/Minimap.svelte';
  import Heatmap from '$lib/components/stats/Heatmap.svelte';
  import Calendar from '$lib/components/stats/Calendar.svelte';
  import Button from '$lib/components/Button.svelte';
  import FilterController from '$lib/components/stats/controllers/FilterController.svelte';
  import SortController from '$lib/components/stats/controllers/SortController.svelte';
  import ViewController from '$lib/components/stats/controllers/ViewController.svelte';

  export let data; // dados vindo do page.server.js incluindo parâmetros da URL e coisas do banco de dados
  let {studentsData, allClassroomMapData} = data;
  let dataForComponents = {
    absencesRanking: allClassroomMapData,
    attendancesRanking: allClassroomMapData,
    absencesDaysDataset: allClassroomMapData,
    positionDesks: allClassroomMapData,
    studentsAndChairsDataset: allClassroomMapData,
    spacesAndEmptyChairsDataset: allClassroomMapData,
    heatmap: allClassroomMapData
  };

  function absencesContentTemplate(item) {
    return `<a href="/aluno/${item.id}">${item.name}</a>: ${hideData.includes(item.id) ? '?' : item.absences.number} ${item.absences.number < 2 ? 'falta' : 'faltas'} (${hideData.includes(item.id) ? '?' : item.absences.percentage}%)`
  }

  function attendancesContentTemplate(item) {
    return `<a href="/aluno/${item.id}">${item.name}</a>: ${hideData.includes(item.id) ? '?' : item.attendances.number} ${item.attendances.number < 2 ? 'presença' : 'presenças'} (${hideData.includes(item.id) ? '?' : item.attendances.percentage}%)`
  }

  $: studentsAndChairsDataset = generateDatasetsOfStudentsAttendanceAndChairs(dataForComponents.studentsAndChairsDataset);
  $: spacesAndEmptyChairsDataset = generateDatasetsOfSpacesAndEmptyChairs(dataForComponents.spacesAndEmptyChairsDataset);
  $: absencesPerDayDataset = generateDatasetsOfAbsencesPerDay(dataForComponents.absencesDaysDataset, studentsData, 2024);
  
  // sistema de ordenar e filtrar
  let sort = {
    absencesRanking: {
      type: 'absolute',
      direction: 'decrescent'
    },
    attendancesRanking: {
      type: 'absolute',
      direction: 'decrescent'
    }
  }

  function sortData(data, sort) {
    if (sort.type === 'percentage-ab') {
      data = data.sort((a, b) => b.absences.percentage - a.absences.percentage);
    } else if (sort.type === 'percentage-at') {
      data = data.sort((a, b) => a.absences.percentage - b.absences.percentage);
    } else if (sort.type === 'alphabetical') {
      data = data.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sort.direction === 'increscent') data.reverse();

    return data;
  }

  $: absencesRanking = sortData(studentsData.map(student => getAttendancesAndAbsencesFixedAndWithStudentData(dataForComponents.absencesRanking, student, null, 2024)).sort((a, b) => b.absences.number - a.absences.number), sort.absencesRanking);
  $: attendancesRanking = sortData(studentsData.map(student => getAttendancesAndAbsencesFixedAndWithStudentData(dataForComponents.attendancesRanking, student, null, 2024)).sort((a, b) => b.attendances.number - a.attendances.number), sort.attendancesRanking);
  
  let dataManipulation = {
    absencesRanking: "",
    attendancesRanking: "",
    absencesDaysDataset: "",
    positionDesks: "",
    studentsAndChairsDataset: "",
    spacesAndEmptyChairsDataset: "",
    heatmap: ""
  }
  
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

  let background = false;
  // exibir iniciais no minimapa
  // let showLettersOnMinimap = false;
</script>

<svelte:head>
  <title>Dados</title>
  <meta name="description" content="Estatísticas bacanas com base nos dados coletados pelo site Mapa de Sala.">
</svelte:head>

<!-- Ranking de sequência e lugares diferentes -->

<div class="container mx-auto max-w-7xl px-4 flex flex-row justify-between items-center mt-2 -mb-2">
  <span class="text-sm text-neutral-500 block text-left">Nenhum dos dados desta página são 100% precisos e não devem ser usados como parâmetro.</span>
  <div class="p-0.5 flex flex-row gap-0.5 bg-input-grey rounded-lg items-center">
    <div class="text-sm px-2 py-1 rounded-md text-neutral-200 bg-neutral-700">2024</div>
    <a href="/dados/2023" class="text-sm px-2 py-1 rounded-md text-neutral-200">2023</a>
  </div>
</div>
<div class="container mx-auto max-w-7xl p-4 grid md:grid-cols-2 gap-4">
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Ranking de Faltas</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Conheça os profissionais em matar em aula.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.absencesRanking === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesRanking = dataManipulation.absencesRanking != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
        <Button moreClasses={dataManipulation.absencesRanking === 'sort' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesRanking = dataManipulation.absencesRanking != 'sort' ? 'sort' : ''}>
          <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
        </Button>
      </div>
      {#if dataManipulation.absencesRanking === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('absencesRanking', event.detail.filter)}/>
      {:else if dataManipulation.absencesRanking === 'sort'}
        <SortController bind:sort={sort.absencesRanking} sortOptions={[{'id': 'absolute', 'label': 'Quantidade de Faltas'}, {'id': 'percentage-ab', 'label': 'Porcentagem'}, {'id': 'alphabetical', 'label': 'Alfabética'}]}/>
      {/if}
    </div>
    <List data={absencesRanking} contentTemplate={absencesContentTemplate}/>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Ranking de Presença</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Esses gostam de vir pra aula.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.attendancesRanking === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.attendancesRanking = dataManipulation.attendancesRanking != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
        <Button moreClasses={dataManipulation.attendancesRanking === 'sort' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.attendancesRanking = dataManipulation.attendancesRanking != 'sort' ? 'sort' : ''}>
          <Sort size="1.2rem" class="focus:outline-none" tabindex="-1"/> Ordenar
        </Button>
      </div>
      {#if dataManipulation.attendancesRanking === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('attendancesRanking', event.detail.filter)}/>
      {:else if dataManipulation.attendancesRanking === 'sort'}
        <SortController bind:sort={sort.attendancesRanking} sortOptions={[{'id': 'absolute', 'label': 'Quantidade de Presenças'}, {'id': 'percentage-at', 'label': 'Porcentagem'}, {'id': 'alphabetical', 'label': 'Alfabética'}]}/>
      {/if}
    </div>
    <List data={attendancesRanking} contentTemplate={attendancesContentTemplate}/>
  </div>
  <div class="bg-neutral-800 rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Mapa de Calor</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Observe visualmente as áreas mais ocupadas da sala.<br>Dias com mais ou menos de 9 filas são desconsiderados do mapa de calor.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.heatmap === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.heatmap = dataManipulation.heatmap != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
        <Button moreClasses={dataManipulation.heatmap === 'view' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.heatmap = dataManipulation.heatmap != 'view' ? 'view' : ''}>
          <Eye size="1.2rem" class="focus:outline-none" tabindex="-1"/> Visualizar
        </Button>
      </div>
      {#if dataManipulation.heatmap === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('heatmap', event.detail.filter)}/>
      {:else if dataManipulation.heatmap === 'view'}
        <ViewController type="heatmap" hideCompensate bind:background on:sortChanged={event => filterData('heatmap', event.detail.sort)}/>
      {/if}
    </div>
    <div class="!mt-4">
      <Heatmap allClassroomMapData={dataForComponents.heatmap} otherClasses='w-full' isWholeClass maxColumns={9} maxDesks={6} heightMultiplier={34} widthMultiplier={33} {background}/>
    </div>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Ocupação de Território</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Clique em uma cadeira pra ver quem já sentou naquela posição. Alguns dias foram excluídos.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-1 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.positionDesks === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.positionDesks = dataManipulation.positionDesks != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
      </div>
      {#if dataManipulation.positionDesks === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('positionDesks', event.detail.filter)}/>
      {/if}
    </div>
    <div class="overflow-y-auto max-h-[35rem] p-2">
      <Minimap allClassroomMapData={dataForComponents.positionDesks} {studentsData} maxColumns={9} maxDeskPerColumn={6}/>
    </div>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Dias Mais Faltados</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Os dias da semana com mais faltas registradas.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-1 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.absencesDaysDataset === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.absencesDaysDataset = dataManipulation.absencesDaysDataset != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
      </div>
      {#if dataManipulation.absencesDaysDataset === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('absencesDaysDataset', event.detail.filter)}/>
      {/if}
    </div>
    <BarsChart data={absencesPerDayDataset} height={168}/>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Calendário</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Tenha uma visão geral dos dias cadastrados no site.</span>
    <span class="block text-center text-neutral-300 mb-1">{allClassroomMapData.length} dias cadastrados com, aproximadamente, {Math.trunc((allClassroomMapData.length-(allClassroomMapData.filter(({tags}) => tags.includes('inaccurate')).length+10))/allClassroomMapData.length*100)}% de precisão.</span>
    <Calendar value1={allClassroomMapData.map(e => e.day)} initialDate={DateTime.fromISO('2024-02-01')}/>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Presenças e Cadeiras × Tempo</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Veja a variação de cadeiras e presenças ao longo do tempo.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-1 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.studentsAndChairsDataset === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.studentsAndChairsDataset = dataManipulation.studentsAndChairsDataset != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
      </div>
      {#if dataManipulation.studentsAndChairsDataset === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('studentsAndChairsDataset', event.detail.filter)}/>
      {/if}
    </div>
    <Chart data={studentsAndChairsDataset}/>
  </div>
  <div class="bg-input-grey rounded-xl p-4">
    <h5 class="text-center font-bold text-xl">Buracos e Vazias × Tempo</h5>
    <span class="text-sm text-neutral-500 block text-center m-1">Veja a variação de cadeiras vazias e buracos ao longo do tempo.</span>
    <div class="my-2 md:mx-auto bg-neutral-850 p-1.5 rounded-2xl">
      <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-1 sm:grid-rows-1 gap-1.5">
        <Button moreClasses={dataManipulation.spacesAndEmptyChairsDataset === 'filter' ? '!bg-neutral-700' : ''} on:click={() => dataManipulation.spacesAndEmptyChairsDataset = dataManipulation.spacesAndEmptyChairsDataset != 'filter' ? 'filter' : ''}>
          <Filter size="1.2rem" class="focus:outline-none" tabindex="-1"/> Filtrar
        </Button>
      </div>
      {#if dataManipulation.spacesAndEmptyChairsDataset === 'filter'}
        <FilterController minDate="5-2-2024" maxDate="14-11-2024" filter={{day: ['2024-02-05', '2024-11-14'].map(date => DateTime.fromISO(date)),tags: []}} on:filterChanged={event => filterData('spacesAndEmptyChairsDataset', event.detail.filter)}/>
      {/if}
    </div>
    <Chart data={spacesAndEmptyChairsDataset}/>
  </div>
</div>