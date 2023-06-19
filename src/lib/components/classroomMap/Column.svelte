<script>
  import CloseCircle from 'svelte-ionicons/CloseCircle.svelte';
  import { getContext } from "svelte";
  import { classroomMapLayoutWritable } from '$lib/data/classroomMapLayoutWritable.js';
  import Desk from "./Desk.svelte";
  import SelectStudent from "./SelectStudent.svelte";

  // --------- Dados ---------
  export let students = []; // cada elemento dessa array vira uma cadeira
  export let columnIndex; // necessário quando for editar
  $: columnsAmount = $classroomMapLayoutWritable.length === 0 ? 1 : $classroomMapLayoutWritable.length;
  let editable = getContext('editable');

  // --------- Ações ---------
  let indexOnInput = columnIndex + 1;

  function removeColumn() {
    classroomMapLayoutWritable.update(data => {
        data.splice(columnIndex, 1);
        return data;
      }
    );
  }

  function reorderColumn() {
    // evitar engraçadinhos botando letras, números negativos ou enormes
    if (isNaN(Number(indexOnInput)) || indexOnInput <= 0 || indexOnInput > columnsAmount) indexOnInput = columnIndex + 1;

    classroomMapLayoutWritable.update(data => {
      const column = (data.splice(columnIndex, 1))[0]; // tirar elemento do seu index original/atual e retorná-lo
      data.splice(indexOnInput - 1, 0, column); // adicioná-lo no novo index (que vem do input)
      return data;
    });
    indexOnInput = columnIndex + 1; // resetando o input para receber a nova coluna
  }
</script>

<div class="flex flex-col items-center justify-items-center">
  <!-- [EDITAR] O botão de remover coluna é add antes de cada estudante -->
  {#if editable}
    <div class="flex flex-col items-center h-12">
      <input type="text" class="w-4 h-5 mb-1 text-white text-center bg-inherit" on:change={reorderColumn} bind:value={indexOnInput}>
      <button class="inline-block" on:click={removeColumn}><CloseCircle size="1.7rem" class="text-light-grey"/></button>
    </div>
  {/if}

  <!-- cada elemento dessa array vira uma cadeira -->
  {#each students as student, studentIndex}
    <Desk isNull={student.name == null && !editable}>
      {#if editable}
        <SelectStudent value={student.id} {columnIndex} {studentIndex}/>
      {:else}
        <a href="/aluno/{student.id}">{student.name}</a>
      {/if}
    </Desk>
  {/each}
</div>