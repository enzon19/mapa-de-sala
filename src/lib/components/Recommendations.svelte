<script>
  import { supabase } from "$lib/supabaseClient";
  import BulbOutline from 'svelte-ionicons/BulbOutline.svelte';
  import ArrowForwardCircleOutline from 'svelte-ionicons/ArrowForwardCircleOutline.svelte';
  import Shuffle from 'svelte-ionicons/Shuffle.svelte';
  import PersonOutline from 'svelte-ionicons/PersonOutline.svelte';
  import Button from '$lib/components/Button.svelte';
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation';
  import { getDayURL } from "$lib/getStats";
  const dispatch = createEventDispatcher();
  
  export let students;
  
  const tips = ["Clique no nome de alguém para ver dados sobre ela.", "Utilize as setas acima para navegar entre os dias.", "Clique no dia entre as setas acima para ver o calendário.", "Clique em uma tag para ver todas as tags e seus dias.", 'Você pode ver todas as novidades e mudanças do site clicando ali em cima no "v1.3.2"', "Clique nas estatísticas de alunos, cadeiras, vazias e buracos em um dia para ver os ausentes e presentes."];
  let goToStudent = students.map(e => e.id)[Math.floor(Math.random() * students.length)];

  async function goToRandomDay() {
	  const {data: allClassroomMapData} = await supabase.from("classroomMap").select('*').order('day');
    const chosenDay = allClassroomMapData[Math.floor(Math.random() * allClassroomMapData.length)]
    goto(getDayURL(chosenDay.day));
  }
</script>

<div class="flex flex-col gap-2 max-w-md w-full mx-auto p-2">
  <button class="bg-red-800/20 rounded-lg p-3 gap-3 flex flex-row items-start text-left" on:click={() => dispatch('openDatePicker')}>
    <ArrowForwardCircleOutline class="outline-none text-red-500 w-8 h-8 flex-shrink-0"/>
    <div class="flex flex-col w-full">
      <span class="text-red-500 font-bold">Dia específico</span>
      <span class="text-neutral-200 text-sm">Clique aqui para escolher um dia específico.</span>
    </div>
  </button>
  <div class="bg-blue-800/20 rounded-lg p-3 gap-3 flex flex-row items-start">
    <PersonOutline class="outline-none text-blue-500 w-8 h-8 flex-shrink-0"/>
    <div class="flex flex-col w-full">
      <span class="text-blue-500 font-bold">Perfil do Aluno</span>
      <span class="text-neutral-200 text-sm">Escolha um aluno para conferir seu perfil:</span>
      <div class="flex flex-row gap-1 w-full mt-1">
        <select bind:value={goToStudent} class="bg-neutral-700 p-0.5 rounded-md w-full outline-none">
          {#each students.filter(student => !student.id.startsWith("clssrmmp_")).sort((a, b) => {
            const nameA = (a.hidden_name || '') + (a.name || '');
            const nameB = (b.hidden_name || '') + (b.name || '');
            return nameA.localeCompare(nameB, 'pt-BR', { sensitivity: 'base' });
          }) as student}
            <option class="text-white" value={student.id}>{student.hidden_name ? student.hidden_name + ' ' : ''}{student.name}</option>
          {/each}
        </select>
        <Button moreClasses="h-8 !rounded-md bg-neutral-700 w-10" on:click={() => goto('/aluno/' + goToStudent)}>
          Ir
        </Button>
      </div>
    </div>
  </div>
  <button class="bg-purple-800/20 rounded-lg p-3 gap-3 flex flex-row items-start text-left" on:click={goToRandomDay}>
    <Shuffle class="outline-none text-purple-500 w-8 h-8 flex-shrink-0"/>
    <div class="flex flex-col w-full">
      <span class="text-purple-500 font-bold">Dia aleatório</span>
      <span class="text-neutral-200 text-sm">Clique aqui para visitar o mapa de um dia aleatório.</span>
    </div>
  </button>
  <div class="bg-yellow-700/20 rounded-lg p-3 gap-3 flex flex-row items-start">
    <BulbOutline class="outline-none text-yellow-500 w-8 h-8 flex-shrink-0"/>
    <div class="flex flex-col w-full">
      <span class="text-yellow-500 font-bold">Dica</span>
      <span class="text-neutral-200 text-sm">{tips[Math.floor(Math.random() * tips.length)]}</span>
    </div>
  </div>
</div>