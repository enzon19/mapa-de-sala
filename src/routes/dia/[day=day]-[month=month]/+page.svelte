<script>
  import { DateTime } from "luxon";
  import Classroom from "$lib/components/Classroom.svelte";
  import DateInput from "$lib/components/DateInput.svelte";

  export let data;
  $: requestedDate = DateTime.local(2023, Number(data.params.month), Number(data.params.day), 0, 0);
  $: classroomMapData = data.classroomMapData;
</script>

<svelte:head>
  <title>Mapa de Sala em {requestedDate.toFormat('dd/MM')}</title>
</svelte:head>

<div class="container mx-auto max-w-4xl">
  <DateInput {requestedDate}/>
  {#if classroomMapData.inaccurate}
    <div class="text-center m-4 bg-bad-warning-red/80 p-4 rounded-2xl">
      <i><b>Dados imprecisos.</b> A representação abaixo pode não ser exatamente como foi originalmente no dia.</i>
    </div>
  {/if}
  <Classroom columns={classroomMapData.columns || []}/>
</div>