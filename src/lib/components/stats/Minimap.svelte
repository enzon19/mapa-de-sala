<script>
  import ClosedList from '$lib/components/stats/ClosedList.svelte';
  import Classroom from '$lib/components/classroomMap/Classroom.svelte';
  import { setContext } from 'svelte';
  import { DateTime } from 'luxon';
  import ChevronBack from 'svelte-ionicons/ChevronBack.svelte';
  import { getDayURL } from '$lib/getStats.js';
  import { CustomAuthError } from '@supabase/supabase-js';

  export let allClassroomMapData;
  export let studentsData;
  export let maxColumns = 5;
  export let maxDeskPerColumn = 10;
  // export let showLettersOnMinimap = false;

  $: daysWithJustFiveColumnsAndTenDesks = allClassroomMapData.filter(classroomMapData => classroomMapData.columns.length === maxColumns && classroomMapData.columns[0].length <= maxDeskPerColumn);
  $: maxDesksByDay = daysWithJustFiveColumnsAndTenDesks.map(classroomMapData => classroomMapData.columns[0].length);
  $: maxDesksEver = maxDesksByDay.length == 0 ? 0 : Math.max(...maxDesksByDay);
  $: allClassroomMapData, handleSelect(currentPosition)
  // $: console.log(daysWithJustFiveColumnsAndTenDesks)
  // $: console.log(Array(5).fill('').map(column => Array(maxDesksEver).fill({id: 'a', name: 'b'})))
  // $: dayWithMaxDesks = daysWithJustFiveColumns.reduce((max, obj) => obj.columns[0].length > (max ? max.columns[0].length : 0) ? obj : max, null);
  // $: dayWithMaxDesks = daysWithJustFiveColumnsAndTenDesks.reduce((max, obj) => obj.columns[0].length > (max ? max.columns[0].length : 0) ? obj : max, null);
  setContext('minimap', true);
  // setContext('showLettersOnMinimap', showLettersOnMinimap ? daysWithJustFiveColumnsAndTenDesks : false);

  let currentPosition = [];
  let studentsList = [];
  function handleSelect(position) {
    currentPosition = position;
    const allTimePeople = daysWithJustFiveColumnsAndTenDesks.map(({columns, day}) => columns[position[0]] ? {id: columns[position[0]][position[1]], day} : {id: undefined});
    studentsList = Object.entries(groupByProperty(allTimePeople.filter(({id}) => !['clssrmmp_empty', 'clssrmmp_space', undefined].includes(id)), 'id')).sort((a, b) => b[1].length - a[1].length);
    // const peopleHasEverSeat = [...new Set(allTimePeople)].filter(student => !['clssrmmp_empty', 'clssrmmp_space', undefined].includes(student));
  }

  function groupByProperty(array, property, humanReadable = false) {
    const groupedItems = array.reduce((result, item) => {
      const key = humanReadable ? `${item[property][0] + 1}ª fileira, ${item[property][1] + 1}ª cadeira` : item[property];
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
      return result;
    }, {});

    return groupedItems;
  }

  function getTooltipLabel(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    return dayAsDateTime.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long' });
  }
</script>

{#if currentPosition.length > 0}
  <div class="flex flex-row gap-4 items-center">
    <button on:click={() => currentPosition = []}><ChevronBack class="outline-none"/></button>
    <h2 class="text-xl">{currentPosition[0] + 1}ª fileira, {currentPosition[1] + 1}ª cadeira</h2>
  </div>
  <div class="p-2">
    <!-- {(studentsData.find(student => student.id === id)).name}<br> -->
    <ol class="list-decimal list-inside">
    {#each studentsList as [id, days], index}
        <div class="flex flex-row">
          <li class="marker:font-bold text-left w-7"></li>
          <details class="inline-block ml-2">
            <summary><span class="cursor-pointer">{(studentsData.find(student => student.id === id)).name} ({days.length} {days.length === 1 ? 'dia' : 'dias'})</span></summary>
            <ol class="list-disc list-inside pl-5">
              {#each days as {day}}
                <li><a href={getDayURL(day, id)}>{getTooltipLabel(day)}</a></li>
              {/each}
            </ol>
          </details>
        </div>
    {:else}
      Ninguém sentou nesta cadeira.
    {/each}
    </ol>
  </div>
{:else}
  <Classroom data={Array(maxColumns).fill('').map(column => Array(maxDesksEver).fill({id: 'a', name: 'b'}))} hideStats on:selectedDesk={(event) => handleSelect(event.detail)} viewWithScroll={false}/>
{/if}