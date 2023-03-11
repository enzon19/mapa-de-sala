<script>
  export let editable = false;
</script>

{#if editable}
  <div class="flex flex-row gap-2 items-center">
    <slot/>
  </div>
{:else}
  <slot/>
{/if}