<script>
  import { DateTime } from "luxon";
  import ChevronForward from 'svelte-ionicons/ChevronForward.svelte';
  import ChevronBack from 'svelte-ionicons/ChevronBack.svelte';
  import { getDayURL } from "$lib/getStats";

  export let value1 = [];
  // export let value2 = [];
  export let currentMonth = 0;
  export let initialDate = DateTime.now();
  
  $: firstDayOfCurrentMonth = initialDate.plus({months: currentMonth}).startOf('month');
</script>


<div class="flex items-center gap-2 m-4 justify-center">
  <button class="inline-block cursor-pointer" on:click={() => currentMonth -= 1}><ChevronBack size="2rem" class="focus:outline-none active:text-neutral-400"/></button>
  <button class="text-center px-2 py-1 cursor-pointer border-none rounded-lg md:min-w-[35%]" on:click={() => currentMonth = 0}>{firstDayOfCurrentMonth.setLocale('pt-BR').toFormat('LLLL/yy', {})}</button>
  <button class="inline-block cursor-pointer" on:click={() => currentMonth += 1}><ChevronForward size="2rem" class="focus:outline-none active:text-neutral-400"/></button>
</div>

<div class="h-full">
  <div class="mt-2 grid grid-cols-7 gap-2 mb-1">
    <div class="text-center">D</div>
    <div class="text-center">S</div>
    <div class="text-center">T</div>
    <div class="text-center">Q</div>
    <div class="text-center">Q</div>
    <div class="text-center">S</div>
    <div class="text-center">S</div>
  </div>
  <div class="grid grid-cols-7 gap-2 h-fit">
    {#each Array.from({ length: firstDayOfCurrentMonth.weekday }, (_, i) => i) as day}
      <div class="h-full"></div>
    {/each}
    {#each Array.from({ length: firstDayOfCurrentMonth.daysInMonth }, (_, i) => i + 1) as day}
      {@const dayAsDateTime = firstDayOfCurrentMonth.plus({day: day-1})}
      {#if value1.find(e => +DateTime.fromISO(e).startOf('day') == +dayAsDateTime)}
        <a href={getDayURL(dayAsDateTime.toISO())} class="rounded-md text-center bg-neutral-500 text-neutral-900 w-full aspect-square flex items-center justify-center text-2xl">{day}</a>
      <!-- {:else if value2.find(e => +DateTime.fromISO(e).startOf('day') == +dayAsDateTime)}
        <button class="rounded-md text-center bg-orange-300 text-neutral-700 w-full aspect-square">{day}</button> -->
      {:else}
        <div class="cursor-not-allowed rounded-md text-center bg-neutral-850 text-neutral-500 w-full aspect-square flex items-center justify-center text-2xl"><span>{day}</span></div>
      {/if}
    {/each}
  </div>
</div>