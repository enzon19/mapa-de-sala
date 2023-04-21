<script>
  import { setContext } from "svelte";
  import { DateTime } from "luxon";
  import Classroom from "$lib/components/Classroom.svelte";
  import DateInput from "$lib/components/DateInput.svelte";
  import Warning from "$lib/components/Warning.svelte";

  setContext('editable', false);

  export let data; // dados vindo do page.server.js incluindo parâmetros da URL e coisas do banco de dados
  $: classroomMapData = data.classroomMapData; // do que veio do server, pegar só o banco de dados
  $: classroomMapColumnsData = classroomMapData.columns || []; // pegar JSON do banco de dados
</script>

<svelte:head>
  <title>Mapa de Sala</title>
</svelte:head>

<div class="container mx-auto max-w-4xl">
  <DateInput requestedDate={DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0)}/>
  {#each classroomMapData.tags || [] as tagType (tagType)}
    <Warning {tagType} />
  {/each}
  <Classroom data={classroomMapColumnsData}/>
</div>