<script>
  import tags from '$lib/data/tags.js'
  import { DateTime } from 'luxon';
  import { getDayURL } from '$lib/getStats.js';
  export let data;
</script>

<svelte:head>
  <title>Tags</title>
  <meta name="description" content="Todos os dias com tags e as tags.">
</svelte:head>

<div class="container mx-auto px-4">
  <h2 class="text-center text-3xl font-bold m-4">Tags</h2>
  <div class="text-center">Veja todas as tags e os dias com elas.</div>
  <div class="flex flex-col gap-4 mt-4">
    {#each Object.values(tags) as tag}
      <div>
        <div class="flex flex-row items-center">
          <svelte:component this={tag.icon} class="inline-block mr-2 w-7 h-7 outline-none" tabindex="-1"/>
          <h3 class="text-xl font-medium">{tag.title}</h3>
        </div>
        <span class="text-sm text-neutral-400">{@html tag.text}</span>
        <div class="flex md:flex-wrap md:flex-row flex-col gap-1 mt-1">
          {#each data.tagDays.filter(({tags}) => tags.includes(tag.id)) as day}
            <a href={getDayURL(day.day)} class="bg-neutral-800 py-2 px-2.5 rounded-xl">{DateTime.fromISO(day.day).setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' })}</a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>