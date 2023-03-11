<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let students = [];
  export let value = "";
  export let id;  
</script>

<select on:change={() => dispatch('changeStudent')} id={"s-" + id} bind:value={value} class="bg-input-grey p-0.5 rounded-md w-full">
  <option class="text-placeholder" value="clssrmmp_space">Buraco</option>
  <option class="text-placeholder" value="clssrmmp_empty">Vazio</option>
  {#each students.filter(student => !student.id.startsWith("clssrmmp_")) as student}
     <option class="text-white" value={student.id}>{student.name}</option>
  {/each}
</select>