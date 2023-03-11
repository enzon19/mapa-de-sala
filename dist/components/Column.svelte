<script>
  import CloseCircle from 'svelte-ionicons/CloseCircle.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let id;
  export let editable = false;
</script>

<div id={"c-" + id} class="flex flex-col items-center justify-items-center">
  {#if editable}
     <button on:click={() => dispatch('removeColumn', {id})} class:ml-9={id == 0} class="inline-block"><CloseCircle size="1.7rem" class="text-light-grey"/></button>
  {/if}
  <slot/>
</div>