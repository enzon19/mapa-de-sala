<script>
  import CloseCircle from 'svelte-ionicons/CloseCircle.svelte';
  import { getContext } from "svelte";
  import { classroomMapLayoutWritable } from '$lib/data/classroomMapLayoutWritable.js';
  import { countStudentsAttendance, countChairs, countSpaces, countEmptyChairs } from '$lib/getStats.js';
  import Column from "$lib/components/classroomMap/Column.svelte";

  // --------- Dados ---------
  export let data; // informações das fileiras e colunas
  let editable = getContext('editable');
  $: columnsAmount = data.length == 0 ? 1 : data.length; // Quantidade de colunas no dia (isso é pra ajudar no CSS)
  $: studentsPerColumnAmount = data[0]?.length || 1;

  // --------- Ações ---------
  function removeLine(index) {
    classroomMapLayoutWritable.update(data => {
        data.forEach(column => column.splice(index, 1));
        return data;
      }
    );
  }

  $: inputsValue = (new Array(studentsPerColumnAmount)).fill('').map((e, index) => index + 1);

  function reorderLine(lineIndex) {
    let indexOnInput = inputsValue[lineIndex];

    // evitar engraçadinhos botando letras, números negativos ou enormes
    if (isNaN(Number(indexOnInput)) || indexOnInput <= 0 || indexOnInput > studentsPerColumnAmount) inputsValue[lineIndex] = lineIndex + 1;
    indexOnInput = inputsValue[lineIndex]; // só atualizando a variável lá de cima

    classroomMapLayoutWritable.update(data => { 
      data.forEach(column => {
        const student = (column.splice([lineIndex], 1))[0]; // removendo o estudante que senta na carteira (de index original/atual) em cada coluna e retornando ele
        column.splice(indexOnInput - 1, 0, student); // adicioná-lo no novo index (que vem do input)
        return column;
      });
      return data;
    });
    inputsValue[lineIndex] = lineIndex + 1; // resetando o input para receber a nova coluna
  }

  // --------- Estatísticas ---------
  $: studentsAmount = countStudentsAttendance(data);
  $: chairsAmount = countChairs(data);
  $: spacesAmount = countSpaces(data);
  $: emptyChairsAmount = countEmptyChairs(data);
</script>

<!-- Estatísticas -->
{#if !editable}
  <div class="text-center text-sm m-4">Alunos: {studentsAmount} | Cadeiras: {chairsAmount} | Vazias: {emptyChairsAmount} | Buracos: {spacesAmount}</div>
{/if}

<div class="flex flex-row">
  <!-- [EDITAR] Botão de remover linha -->
  {#if editable}
    <div class="flex-initial">
      <div class="flex flex-col items-center justify-items-center mt-12">
        {#each data[0] || [] as line, lineIndex}
          <div class="flex flex-row mr-1.5 py-4 my-2 h-[60px]">
            <input on:change={() => reorderLine(lineIndex)} type="text" class="w-4 mr-0 md:w-5 md:mr-1 text-white text-center bg-inherit" bind:value={inputsValue[lineIndex]}>
            <button class="w-7 inline-block text-light-grey" on:click={() => removeLine(lineIndex)}><CloseCircle size="1.7rem" class="text-light-grey"/></button>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Renderizar mapa de sala com base no JSON -->
  <div style="grid-template-columns: repeat({columnsAmount}, minmax(0, 1fr));" class="grid gap-4 grid-cols-5 grow">
    {#each data as column, columnIndex}
      <!-- cada array do JSON vai ser dada pro componente Column (ou seja, o Column recebe uma array que cada elemento vira cadeiras) -->
      <Column students={column} {columnIndex} />
    {:else}
      <span class="text-center p-4">Sem dados.</span>
    {/each}
  </div>
</div>