<script>
  import ChevronForward from 'svelte-ionicons/ChevronForward.svelte';
  import ChevronBack from 'svelte-ionicons/ChevronBack.svelte';

  export let requestedDate;
  export let route = "dia";

  $: yesterday = requestedDate.minus({ day: 1 });
  $: tomorrow = requestedDate.plus({ day: 1 });
  $: requestedDateAsString = requestedDate.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long' });
</script>

<div class="flex items-center gap-2 m-4 justify-center">
  <a class="inline-block cursor-pointer" href={`/${route}/` + yesterday.toFormat('dd-MM')}><ChevronBack size="2rem"/></a>
  <div class="text-center px-2 py-1 cursor-pointer w-72">{requestedDateAsString}</div>
  <a class="inline-block cursor-pointer" href={`/${route}/` + tomorrow.toFormat('dd-MM')}><ChevronForward size="2rem"/></a>
</div>