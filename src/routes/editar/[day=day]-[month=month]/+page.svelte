<script>
  import { DateTime } from "luxon";
  import Classroom from "$lib/components/Classroom.svelte";
  import DateInput from "$lib/components/DateInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import CloseOutline from 'svelte-ionicons/CloseOutline.svelte';

  export let data;

  $: classroomMapData = data.classroomMapData;
  $: requestedDate = DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0);

  $: columnsAsString = JSON.stringify(classroomMapData.columns || [], null, 2);
  $: columnsToRender = JSON.parse(columnsAsString);
  let finalColumnsToSave = [];
  let classroomMapAsElement, saveModal;

  function transformNodeToArray(node) {
    let newClassroomMap = [];
    const columns = node.querySelectorAll('[id^="c-"]');
    const columnsAsArray = Array.from(columns);

    for (const column of columnsAsArray) {
      const students = column.querySelectorAll('[id^="s-"]');
      const studentsAsArray = Array.from(students);
      const studentsAsArrayOfIDs = studentsAsArray.map((student, index) => {
        const studentID = student.value;
        const studentName = (Array.from(studentsAsArray[index].querySelectorAll("option")).find(e => e.value == studentsAsArray[index].value)).innerText;

        return {id: studentID, name: studentName};
      });
      newClassroomMap.push(studentsAsArrayOfIDs)
    }

    return newClassroomMap;
  }

  function refreshColumnsAsString() {
    columnsAsString = JSON.stringify(transformNodeToArray(classroomMapAsElement), null, 2);
  }

  function transformColumnAsStringToArray() {
    columnsToRender = JSON.parse(columnsAsString);
  }

  function save() {
    transformColumnAsStringToArray();
    finalColumnsToSave = JSON.stringify(columnsToRender.map(column => column.map(student => student.id)));
    saveModal.showModal();
  }

  // function addTags() {
  //   tagsModal.showModal();
  // }

  // Manage columns and lines

  function newColumn() {
    transformColumnAsStringToArray();
    const columnLength = columnsToRender[0]?.length || 1;
    const newColumn = new Array(columnLength).fill({ id: "clssrmmp_empty", name: "Vazio" });
    columnsToRender.push(newColumn);
    columnsAsString = JSON.stringify(columnsToRender, null, 2);
  }

  function newLine() {
    transformColumnAsStringToArray();
    columnsToRender.forEach(column => column.push({id: "clssrmmp_empty", name: "Vazio"}));
    columnsAsString = JSON.stringify(columnsToRender, null, 2);
  }

  function removeColumn(id) {
    transformColumnAsStringToArray();
    columnsToRender.splice(id, 1);
    columnsAsString = JSON.stringify(columnsToRender, null, 2);
  }

  function removeLine(id) {
    transformColumnAsStringToArray();
    columnsToRender.forEach(column => column.splice(id, 1));
    columnsAsString = JSON.stringify(columnsToRender, null, 2);
  }

  $: if (classroomMapAsElement) refreshColumnsAsString();
</script>

<svelte:head>
  <title>Editar Mapa do Dia {requestedDate.toFormat('dd/MM')}</title>
</svelte:head>

<div class="container mx-auto max-w-4xl">
  <DateInput {requestedDate} route="editar"/>
  <textarea class="font-mono bg-input-grey p-4 w-full rounded-xl" rows="3">{columnsAsString}</textarea>
  <div class="flex flex-row justify-center gap-2 py-2">
    <Button on:click={save}>Salvar</Button>
    <Button on:click={newColumn}>Adicionar coluna</Button>
    <Button on:click={newLine}>Adicionar linha</Button>
    <!-- <Button on:click={addTags}>Adicionar tags</Button> -->
  </div>
  <Classroom on:changeStudent={refreshColumnsAsString} on:removeColumn={(event) => removeColumn(event.detail.id)} on:removeLine={(event) => removeLine(event.detail.id)} editable bind:classroomMapAsElement bind:columns={columnsToRender} students={data.studentsData}/>

  <dialog class="backdrop:bg-black/50 backdrop:backdrop-blur-little transition-all p-4 rounded-xl bg-back-grey shadow-2xl text-white" bind:this={saveModal}>
    <button class="absolute top-2 right-2 hover:text-light-grey transition-colors" on:click={() => saveModal.close()}>
      <CloseOutline size="24"/>
    </button>
    <form method="post">
      <h3 class="text-xl font-semibold text-center mb-4">Salvar mapa de sala do dia {requestedDate.toFormat('dd/MM')}</h3>
      <label for="password" class="inline-block mb-1.5">Senha</label>
      <input type="password" name="password" class="bg-input-grey p-2 mb-2 w-full rounded-xl">
      <input type="hidden" name="columns" value={finalColumnsToSave}>
      <input type="hidden" name="date" value={requestedDate.toString()}>
      <input type="submit" value="Salvar" on:click={() => saveModal.close()} class="bg-input-grey p-2 cursor-pointer rounded-xl hover:bg-input-hover-grey transition-colors mt-2">
    </form>
  </dialog>
</div>