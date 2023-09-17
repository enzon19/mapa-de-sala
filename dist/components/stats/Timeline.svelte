<script>
  import { generatePositionTimeline } from "../../getStats";
  import { DateTime } from "luxon";

  export let allClassroomMapData;
  export let studentID;
  export let invertDeskCounting;
  export let compensate;
  export let sort;

  $: data = generatePositionTimeline(allClassroomMapData, studentID, invertDeskCounting, compensate, sort);
</script>

<div class="max-h-90 overflow-y-auto p-1">  
  <ol class="relative border-l border-neutral-700 grid grid-flow-row gap-6">
    {#each data.filter(day => day.length > 0) as range}
      <li class="ml-4">
        <div class="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -left-1.5 border border-neutral-800"></div>
        <time class="mb-1 text-sm font-normal leading-none text-neutral-400">de {DateTime.fromISO(range[0].day).toFormat('dd/MM')} a {DateTime.fromISO(range.at(-1).day).toFormat('dd/MM')}</time>
        <h6 class="text-lg font-medium text-white">{`${range[0].position[0] + 1}ª fileira, ${range[0].position[1] + 1}ª cadeira`}</h6>
        <p class="text-neutral-300">Você sentou <a href={'/dia/' + DateTime.fromISO(range[0].day).toFormat('dd-MM')} class="underline">nesta posição</a> por {range.length} {range.length > 1 ? 'dias' : 'dia'}.</p>
      </li>
    {/each}
  </ol>
</div>