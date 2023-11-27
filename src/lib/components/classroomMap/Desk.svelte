<script>
  export let isNull = false;
  export let columnIndex, studentIndex;
  export let highlight;
</script>

<style>
  .highlightDesk {
    @apply bg-yellow-500/30;
  }
</style>

<div class:border-white={!isNull} class:border-2={!isNull} class:highlightDesk={highlight} class="px-2 py-4 my-2 max-w-120 w-full h-[60px] text-white text-center truncate">
  {#if !isNull}
     <slot/>
  {/if}
</div>