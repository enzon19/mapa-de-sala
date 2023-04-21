<script>
  export let isNull = false;
</script>

<div class:border-white={!isNull} class:border-2={!isNull} class="px-2 py-4 my-2 max-w-120 w-full h-[60px] text-white text-center truncate">
  {#if !isNull}
     <slot/>
  {/if}
</div>