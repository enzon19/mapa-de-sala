<script>
  import { generatePositionTimeline, getDayURL } from "../../getStats";

  export let allClassroomMapData;
  export let studentID;
  export let invertDeskCounting;
  export let compensate;

  $: data = generatePositionTimeline(allClassroomMapData, studentID, invertDeskCounting, compensate);
  $: recentRange = data.at(-1);
</script>

<div class="flex flex-col gap-0.5 text-center">
  <h6 class="text-3xl font-medium text-white">{recentRange.length} {recentRange.length > 1 ? 'dias' : 'dia'}</h6>
  <div class="mb-1 text-sm font-normal leading-none text-neutral-400">no <a href={getDayURL(recentRange[0].day, studentID)} class="underline">mesmo lugar</a></div>
</div>