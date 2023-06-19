<script>
  export let data;
  export let contentTemplate;
</script>

<div class="h-60 overflow-y-scroll">
  <ol class="list-decimal list-inside">
    {#each data as item, index}
      <li>{@html contentTemplate(item, index)}</li>
    {/each}
  </ol>
</div>