<script>
  import { DateTime } from 'luxon';

  export let summaries;
  export let content;

  function getDayURL(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    const dayForURL = dayAsDateTime.toFormat('dd-MM');
    return `/dia/${dayForURL}`
  }

  function getTooltipLabel(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    return dayAsDateTime.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long' });
  }
</script>

{#each summaries as summary, index}
  <details>
    <summary><span class="cursor-pointer"><strong>{index + 1}.</strong> {summary}</span></summary>
    <ol class="list-disc list-inside pl-5">
      {#each content[index] as item}
        <li><a href={getDayURL(item.day)}>{getTooltipLabel(item.day)}</a></li>
      {/each}
    </ol>
  </details>
{/each}