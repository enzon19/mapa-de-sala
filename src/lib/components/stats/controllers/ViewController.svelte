<script>
  import { slide } from 'svelte/transition';

  export let type = "";

  // Heatmap
  export let compensate = true;
  export let hideCompensate = false;
  export let background = false;
</script>

<div class="flex flex-col gap-1 mt-1" transition:slide={{ axis: 'y', duration: 300 }}>
  {#if type === 'heatmap'}
    {#if !hideCompensate}
      <div class="flex flex-col gap-0.5">
        <label for="order" class="text-sm text-neutral-300">Dados</label>
        <div class="flex flex-row gap-2">
          <input type="checkbox" id="compensate" class="cursor-pointer" bind:checked={compensate}>
          <label for="compensate" class="cursor-pointer">Compensar diferenças de cadeiras (recomendado)</label>
        </div>
      </div>
    {/if}
    <div class="flex flex-col gap-0.5">
      <label for="order" class="text-sm text-neutral-300">Gráficos</label>
      <div class="flex flex-row gap-2">
        <input type="checkbox" id="background" class="cursor-pointer" bind:checked={background}>
        <label for="background" class="cursor-pointer">Inserir fundo no mapa de calor</label>
      </div>
    </div>
  {:else if type === 'graph'}
     <!-- else if content here -->
  {:else}
    Falha ao gerar controlador de visualização.
  {/if}
</div>