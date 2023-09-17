<script>
  import { afterUpdate, onMount } from 'svelte';
  import SimpleHeat from 'simpleheat';
  import { generateFrequencyOfPosition } from '../../getStats.js'

  export let allClassroomMapData;
  export let studentID;
  export let invertDeskCounting;
  export let compensate;
  export let background;
  
  $: daysWithJustFiveColumns = allClassroomMapData.filter(classroomMapData => classroomMapData.columns.length === 5);
  $: maxDesksByDay = daysWithJustFiveColumns.map(classroomMapData => classroomMapData.columns[0].length);
  $: maxDesksEver = Math.max(...maxDesksByDay);

  $: frequencyOfPosition = generateFrequencyOfPosition(daysWithJustFiveColumns, studentID, invertDeskCounting, compensate ? maxDesksEver : -1).filter(({position}) => position[0] > -1);
  $: maxFrequency = Math.max(...frequencyOfPosition.map(data => data.frequency));
  $: data = frequencyOfPosition.map(({position, frequency}) => [...position.map(position => (position + 1) * 30), frequency]);

  function generateHeatmap() {
    const heat = SimpleHeat('heatmap');
  
    heat.data(data);
    heat.max(maxFrequency);
    heat.radius(25, 10);
  
    heat.draw();
  }

  onMount(generateHeatmap);
  afterUpdate(generateHeatmap);
</script>

<canvas class={`border-neutral-400 border-2 ${background ? 'bg-neutral-200' : ''}`} id="heatmap" width="180" height={maxDesksEver * 32}></canvas>