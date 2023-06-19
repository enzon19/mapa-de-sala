<script>
  import { onMount } from 'svelte';
  import SimpleHeat from 'simpleheat';
  import { generateFrequencyOfPosition } from '../../getStats.js'

  export let allClassroomMapData;
  export let studentID;
  export let invertDeskCounting;
  export let compensate;
  
  const daysWithJustFiveColumns = allClassroomMapData.filter(classroomMapData => classroomMapData.columns.length === 5);
  const maxDesksByDay = daysWithJustFiveColumns.map(classroomMapData => classroomMapData.columns[0].length);
  const maxDesksEver = Math.max(...maxDesksByDay);

  const frequencyOfPosition = generateFrequencyOfPosition(daysWithJustFiveColumns, studentID, invertDeskCounting, compensate ? maxDesksEver : -1).filter(({position}) => position[0] > -1);
  const maxFrequency = Math.max(...frequencyOfPosition.map(data => data.frequency));
  const data = frequencyOfPosition.map(({position, frequency}) => [...position.map(position => (position + 1) * 30), frequency]);

  onMount(() => {
    const heat = SimpleHeat('heatmap');

    heat.data(data);
    heat.max(maxFrequency);
    heat.radius(25, 10);

    heat.draw();
  });
</script>

<canvas class="border-neutral-400 border-2" id="heatmap" width="180" height={maxDesksEver * 32}></canvas>