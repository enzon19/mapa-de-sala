<script>
  export let moreClasses = '';
</script>

<button class="bg-input-grey p-2 flex flex-row gap-2 items-center justify-center rounded-xl hover:bg-input-hover-grey transition-colors {moreClasses}" on:click>
  <slot/>
</button>