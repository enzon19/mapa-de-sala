<script>
  import { setContext } from "svelte";
  import { DateTime } from "luxon";
  import Classroom from "$lib/components/classroomMap/Classroom.svelte";
  import DateInput from "$lib/components/DateInput.svelte";
  import Warning from "$lib/components/Tag.svelte";

  setContext('editable', false);

  export let data; // dados vindo do page.server.js incluindo parâmetros da URL e coisas do banco de dados
  $: classroomMapData = data.classroomMapData; // do que veio do server, pegar só informações do mapa de sala requisitado pelo usuário
  $: classroomMapLayout = classroomMapData.layout || []; // pegar informações das fileiras e colunas
  $: requestedDate = DateTime.local(Number(data.params.year) , Number(data.params.month), Number(data.params.day), 0, 0);
</script>

<svelte:head>
  <title>Mapa de Sala</title>
  <meta name="description" content="Mapa de Sala é um site que reúne dados sobre a posição de cada aluno na sala de aula. Projeto pessoal.">
</svelte:head>

<div class="container mx-auto {Number(data.params.year) == 2023 ? "max-w-4xl" : "max-w-7xl"}">
  <DateInput {requestedDate} checkInDatabase/>
  {#each classroomMapData.tags || [] as tagType (tagType)}
    <Warning {tagType} />
  {/each}
  <Classroom data={classroomMapLayout}/>
</div>