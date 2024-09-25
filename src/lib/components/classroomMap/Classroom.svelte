<script>
  import CloseCircle from 'svelte-ionicons/CloseCircle.svelte';
  import { getContext } from "svelte";
  import { classroomMapLayoutWritable } from '$lib/data/classroomMapLayoutWritable.js';
  import { countStudentsAttendance, countChairs, countSpaces, countEmptyChairs, getPeopleAttendancesAndAbsencesOnDay } from '$lib/getStats.js';
  import CloseOutline from 'svelte-ionicons/CloseOutline.svelte';
  import Column from "$lib/components/classroomMap/Column.svelte";
  import Recommendations from "$lib/components/Recommendations.svelte";

  // --------- Dados ---------
  export let data; // informações das fileiras e colunas
  export let hideStats = false;
  export let students;
  export let day;
  export let viewWithScroll = true;
  $: if (data.length === 0) viewWithScroll = false // se não tiver dados, viewWithScroll deve ser falso

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
  $: duplicates = structuredClone(data)?.flat().filter((item, index, array) => ["clssrmmp_empty", "clssrmmp_space"].includes(item.id) ? false : array.map(e => e.id).indexOf(item.id) !== index) || [];

  // --------- Estatísticas ---------
  $: studentsAmount = countStudentsAttendance(data);
  $: chairsAmount = countChairs(data);
  $: spacesAmount = countSpaces(data);
  $: emptyChairsAmount = countEmptyChairs(data);
  let statsModal;
</script>

<!-- Estatísticas -->
{#if !(hideStats || editable)}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="text-center text-sm m-4 w-max mx-auto" class:cursor-pointer={data.length !== 0} on:click={() => {if (data.length !== 0) statsModal.showModal();}}>Alunos: {studentsAmount} | Cadeiras: {chairsAmount} | Vazias: {emptyChairsAmount} | Buracos: {spacesAmount}</div>
  {#if data.length !== 0}
    <dialog class="backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white w-72 max-h-[26rem]" bind:this={statsModal}>
      <button class="absolute top-2 right-2 hover:text-light-grey transition-colors" on:click={() => statsModal.close()}>
        <CloseOutline size="24" class="outline-none"/>
      </button>
      {#await getPeopleAttendancesAndAbsencesOnDay({columns: data, day}, students, day)}
        <span class="text-neutral-400">Obtendo dados...</span>
      {:then peopleAttendancesAndAbsencesData}
        <div>
          <h3 class="text-xl font-semibold">Ausentes ({peopleAttendancesAndAbsencesData.absences.length})</h3>
          <ul class="mb-2 list-disc list-inside">
            {#each peopleAttendancesAndAbsencesData.absences.sort((a, b) => {
              const nameA = (a.hidden_name || '') + (a.name || '');
              const nameB = (b.hidden_name || '') + (b.name || '');
              return nameA.localeCompare(nameB, 'pt-BR', { sensitivity: 'base' });
            }) as student}
              <li><a href="/aluno/{student.id}">{student.hidden_name ? student.hidden_name + ' ' : ''}{student.name}</a></li>
            {:else}
              <span class="text-neutral-400">Ninguém faltou :O</span>
            {/each}
          </ul>
          <h3 class="text-xl font-semibold">Presentes ({peopleAttendancesAndAbsencesData.attendances.length})</h3>
          <ul class="list-disc list-inside">
            {#each peopleAttendancesAndAbsencesData.attendances.sort((a, b) => {
              const nameA = (a.hidden_name || '') + (a.name || '');
              const nameB = (b.hidden_name || '') + (b.name || '');
              return nameA.localeCompare(nameB, 'pt-BR', { sensitivity: 'base' });
            }) as student}
              <li><a href="/aluno/{student.id}">{student.hidden_name ? student.hidden_name + ' ' : ''}{student.name}</a></li>
            {:else}
              <span class="text-neutral-400">Ninguém foi na aula 😨😨😨</span>
            {/each}
          </ul>
        </div>
      {/await}
    </dialog>
  {/if}
{/if}

{#if editable && duplicates.length > 0}
  <div class="my-2 p-2 text-center">⚠️ Duplicatas: {duplicates.map(e => e.name).join(', ')}</div>
{/if}

<div class={viewWithScroll ? 'overflow-y-auto' : ''}>
  <div class="flex flex-row {viewWithScroll ? 'w-max px-4 pb-2 mx-auto md:p-0 md:m-0 md:w-full': ''}">
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
        <Column students={column} {columnIndex} on:selectedDesk/>
      {:else}
        <span class="text-center p-4">Sem dados.</span>
        {#if !(editable)}
          <span class="text-center text-sm text-neutral-400 -mb-5">RECOMENDAÇÕES</span>
          <Recommendations {students} on:openDatePicker/>
        {/if}
      {/each}
    </div>
  </div>
</div>