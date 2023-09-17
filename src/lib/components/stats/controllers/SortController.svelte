<script>
  import { slide } from 'svelte/transition';

  export let sortOptions = [{'id': 'days', 'label': 'Quantidade de Dias'}, {'id': 'rows', 'label': 'Fileiras'}, {'id': 'desks', 'label': 'Cadeiras'}];
  export let sort;
</script>

<div class="grid grid-flow-col gap-1 mt-1" transition:slide={{ axis: 'y', duration: 300 }}>
  <div class="flex flex-col gap-0.5">
    <label for="order" class="text-sm text-neutral-300">Ordem</label>
    <select id="order" class="bg-input-grey p-0.5 rounded-md w-full" bind:value={sort.type}>
      {#each sortOptions as sortOption}
        <option class="text-white" value={sortOption.id}>{sortOption.label}</option>
      {/each}
    </select>
  </div>
  <div class="flex flex-col gap-0.5">
    <label for="direction" class="text-sm text-neutral-300">Direção</label>
    <select id="order" class="bg-input-grey p-0.5 rounded-md w-full" bind:value={sort.direction}>
      <option class="text-white" value="increscent">Crescente</option>
      <option class="text-white" value="decrescent">Decrescente</option>
    </select>
  </div>
</div>