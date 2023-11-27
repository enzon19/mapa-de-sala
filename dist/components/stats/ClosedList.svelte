<script>
  import { DateTime } from 'luxon';
  import { getDayURL } from '../../getStats.js';

  export let summaries;
  export let content;
  export let studentID;
  function getTooltipLabel(day) {
    const dayAsDateTime = DateTime.fromISO(day);
    return dayAsDateTime.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long' });
  }
</script>

<div class="max-h-60 overflow-y-scroll">
  <ol class="list-decimal list-inside">
    {#each summaries as summary, index}
      <div class="flex flex-row">
        <li class="marker:font-bold text-right w-7"></li>
        <details class="inline-block ml-2">
          <summary><span class="cursor-pointer">{summary}</span></summary>
          <ol class="list-disc list-inside pl-5">
            {#each content[index] as item}
              <li><a href={getDayURL(item.day, studentID)}>{getTooltipLabel(item.day)}</a></li>
            {/each}
          </ol>
        </details>
      </div>
    {/each}
  </ol>
</div>