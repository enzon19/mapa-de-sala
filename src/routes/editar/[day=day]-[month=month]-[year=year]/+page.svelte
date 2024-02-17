<script>
  import { setContext } from "svelte";
  import { DateTime } from "luxon";
  import { classroomMapLayoutWritable } from '$lib/data/classroomMapLayoutWritable.js';
  import tags from "$lib/data/tags.js";
  import Classroom from "$lib/components/classroomMap/Classroom.svelte";
  import DateInput from "$lib/components/DateInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import CloseOutline from 'svelte-ionicons/CloseOutline.svelte';

  // --------- Dados ---------
  setContext('editable', true);
  export let data; // dados vindo do page.server.js incluindo parâmetros da URL e coisas do banco de dados
  $: classroomMapData = data.classroomMapData; // do que veio do server, pegar só informações do mapa de sala a ser editado
  $: classroomMapLayoutWritable.set(classroomMapData.layout || []); // pegar informações das fileiras e colunas e botar no writable
  $: requestedDate = DateTime.local(Number(data.params.year), Number(data.params.month), Number(data.params.day), 0, 0);
  $: setContext('allRegisteredStudents', data.studentsData.filter(e => e.year.includes(Number(data.params.year)))); // receber todos estudantes cadastrados
  $: currentTags = classroomMapData.tags;
  $: requestedDate, syncTags();
  let updatedTags = [];
  
  function syncTags() {
    updatedTags = currentTags || [];
  }

  // --------- Ações ---------
  let saveModal, tagsModal;
  let classroomMapLayoutToSave = [];
  $: studentsPerColumnAmount = $classroomMapLayoutWritable[0]?.length || 1;

  function save() {
    console.log(updatedTags)
    classroomMapLayoutToSave = JSON.stringify($classroomMapLayoutWritable.map(column => column.map(student => student.id)));
    saveModal.showModal();
  }

  function manageTags() {
    tagsModal.showModal();
  }

  function newColumn() {
    const newColumn = new Array(studentsPerColumnAmount).fill({ id: "clssrmmp_empty", name: "Vazio" });
    classroomMapLayoutWritable.update(data => {
        data.push(newColumn);
        return data;
      }
    );
  }

  function newLine() {
    classroomMapLayoutWritable.update(data => {
        data.forEach(column => column.push({id: "clssrmmp_empty", name: "Vazio"}));
        return data;
      }
    );
  }
</script>

<svelte:head>
  <title>Editar Mapa do Dia {requestedDate.toFormat('dd/MM')}</title>
  <meta name="description" content="Mapa de Sala é um site que reúne dados sobre a posição de cada aluno na sala de aula. Projeto pessoal.">
</svelte:head>

<div class="container mx-auto {Number(data.params.year) == 2023 ? "max-w-4xl" : "max-w-7xl"}">
  <DateInput {requestedDate} route="editar"/>
  <div class="mx-2"><textarea on:change={(event) => classroomMapLayoutWritable.update(() => JSON.parse(event.currentTarget.value))} class="font-mono bg-input-grey p-4 w-full rounded-xl" rows="3">{JSON.stringify($classroomMapLayoutWritable, null, 2)}</textarea></div>
  <div class="flex flex-row justify-center gap-2 py-2">
    <Button on:click={save}>Salvar</Button>
    <Button on:click={newColumn}>Adicionar coluna</Button>
    <Button on:click={newLine}>Adicionar linha</Button>
    <Button on:click={manageTags}>Gerenciar tags</Button>
  </div>
  <Classroom data={$classroomMapLayoutWritable}/>
</div>

<!-- Modal para salvar os dados -->
<dialog class="backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white" bind:this={saveModal}>
  <button class="absolute top-2 right-2 hover:text-light-grey transition-colors" on:click={() => saveModal.close()}>
    <CloseOutline size="24"/>
  </button>
  <form method="post">
    <h3 class="text-xl font-semibold text-center mb-4">Salvar mapa de sala do dia {requestedDate.toFormat('dd/MM/yyyy')}</h3>
    <label for="password" class="inline-block mb-1.5">Senha</label>
    <input type="password" name="password" class="bg-input-grey p-2 mb-2 w-full rounded-xl">
    <input type="hidden" name="layout" value={classroomMapLayoutToSave}>
    <input type="hidden" name="tags" value={JSON.stringify(updatedTags)}>
    <input type="hidden" name="date" value={requestedDate.toString()}>
    <input type="submit" value="Salvar" on:click={() => saveModal.close()} class="bg-input-grey p-2 cursor-pointer rounded-xl hover:bg-input-hover-grey transition-colors mt-2">
  </form>
</dialog>

<!-- Modal para gerenciar tags -->
<dialog class="backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white" bind:this={tagsModal}>
  <button class="absolute top-2 right-2 hover:text-light-grey transition-colors" on:click={() => tagsModal.close()}>
    <CloseOutline size="24"/>
  </button>
  <h3 class="text-xl font-semibold text-center mb-4">Tags do dia {requestedDate.toFormat('dd/MM')}</h3>
  <textarea class="font-mono bg-input-grey p-4 w-full rounded-xl" rows="1">{JSON.stringify(updatedTags)}</textarea>
  <div class="flex flex-row gap-2">
    {#each Object.keys(tags) as tag}
      <label>
        <input type="checkbox" bind:group={updatedTags} name="newTags" value={tag}>
        {tag}
      </label>
    {/each}
  </div>
</dialog>