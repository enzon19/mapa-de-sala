<script>
  import Desk from './Desk.svelte';
  import Column from './Column.svelte';
  import SelectStudents from './SelectStudents.svelte';
  import Wrapper from './Wrapper.svelte';
  import CloseCircle from 'svelte-ionicons/CloseCircle.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let columns = [];
  export let students = [];
  export let editable = false;
  export let classroomMapAsElement;

  $: studentsPresent = columns.map(column => column.filter(student => student.id != "clssrmmp_space" && student.id != "clssrmmp_empty"));
  $: studentsPresentAmount = studentsPresent.flat().length;
  $: chairs = columns.map(column => column.filter(student => student.id != "clssrmmp_space"));
  $: chairsAmount = chairs.flat().length;
  $: spaces = columns.map(column => column.filter(student => student.id == "clssrmmp_space"));
  $: spacesAmount = spaces.flat().length;
  $: emptyChairs = columns.map(column => column.filter(student => student.id == "clssrmmp_empty"));
  $: emptyChairsAmount = emptyChairs.flat().length;

  $: columnsAmount = columns.length == 0 ? 1 : columns.length;
</script>

{#if !editable}
  <div class="text-center text-sm m-4">Alunos: {studentsPresentAmount} | Cadeiras: {chairsAmount} | Cadeiras vazias: {emptyChairsAmount} | Buracos: {spacesAmount}</div>
{/if}
<div bind:this={classroomMapAsElement} style="grid-template-columns: repeat({columnsAmount}, minmax(0, 1fr));" class="grid gap-4 grid-cols-5">
  {#each columns as column, columnIndex}
    <Column id={columnIndex} {editable} on:removeColumn>
      {#each column as student, studentIndex}
        <Wrapper {editable}>
          <!-- <div class="flex flex-row gap-2 items-center"> -->
          {#if columnIndex == 0 && editable}
            <span class="w-2">{studentIndex + 1}</span>
            <button on:click={() => dispatch('removeLine', {id: studentIndex})} class="w-7 inline-block text-light-grey"><CloseCircle size="1.7rem" class="text-light-grey"/></button>
          {/if}
          <Desk isNull={student.name == null && !editable}>
            {#if editable}
              <SelectStudents on:changeStudent {students} value={student.id} id={studentIndex}/>
            {:else}
              {student.name}
            {/if}
          </Desk>
        <!-- </div> -->
        </Wrapper>
      {/each}
    </Column>
  {:else}
    <span class="text-center p-4">Sem dados.</span>
  {/each}
</div>