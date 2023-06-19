<script>
  import { DateTime } from 'luxon';
  import { tooltip } from "@svelte-plugins/tooltips";

  export let daysPossible = [];
  export let daysTracked = [];

  function getDayURL(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    const dayForURL = dayAsDateTime.toFormat('dd-MM');
    return `/dia/${dayForURL}`
  }

  function getTooltipLabel(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    return dayAsDateTime.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long' });
  }

  const style = {
    opacity: '0.8',
    fontSize: '0.8rem',
    fontFamily: 'Inter, sans-serif',
    arrowSize: '5px',
    padding: '8px',
    borderRadius: '0.5rem'
  }
</script>

<div class="grid grid-rows-5 grid-flow-col justify-items-center gap-1">
  {#each daysPossible as day, index}
    <a href={getDayURL(day)}>
      <div class='w-4 h-4 rounded-sm bg-neutral-600' {index} class:bg-neutral-300={daysTracked.includes(day)} use:tooltip={{ style, content: getTooltipLabel(day), maxWidth: 1000, position: index >= 65 ? 'left' : 'right'}}></div>
    </a>
  {/each}
</div>

<style>
  :global(.tooltip.show) {
    white-space: nowrap !important;
  }
</style>