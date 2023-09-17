<script>
  import { generatePositionTimeline } from "$lib/getStats";
  import { DateTime } from "luxon";

  export let allClassroomMapData;
  export let studentID;
  export let invertDeskCounting;
  export let compensate;
  export let blocked = studentID == '9e4d2a2e-b3a8-494a-b841-849217fee970';

  $: data = generatePositionTimeline(allClassroomMapData, studentID, invertDeskCounting, compensate);
  $: recentRange = data.at(-1);
</script>

{#if blocked}
  <div class="text-center">Este dado está bloqueado para certas pessoas 😜</div>
  <div class="flex flex-col gap-0.5 text-center">
    <h6 class="text-3xl font-medium text-white blur-md">0 dias</h6>
    <div class="mb-1 text-sm font-normal leading-none text-neutral-400 blur-sm">no <a href class="underline">mesmo lugar</a></div>
  </div>
{:else}
  <div class="flex flex-col gap-0.5 text-center">
    <h6 class="text-3xl font-medium text-white">{recentRange.length} {recentRange.length > 1 ? 'dias' : 'dia'}</h6>
    <div class="mb-1 text-sm font-normal leading-none text-neutral-400">no <a href={'/dia/' + DateTime.fromISO(recentRange[0].day).toFormat('dd-MM')} class="underline">mesmo lugar</a></div>
  </div>
{/if}
