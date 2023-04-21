<script>
  import { getContext } from "svelte";
  import { classroomMapColumnsData } from '$lib/data/classroomMapColumnsData.js'; // JSON com dados do mapa de sala

  export let students = getContext('allRegisteredStudents'); // receber todos estudantes cadastrados
  export let value = "clssrmmp_empty"; // valor default
  export let studentIndex; // facilitar alteração no JSON
  export let columnIndex; // facilitar alteração no JSON

  function updateJSON() {
    classroomMapColumnsData.update(data => {
      data[columnIndex][studentIndex] = students.find(e => e.id == value);
      return data;
    });
  }
</script>

<select bind:value={value} on:change={updateJSON} class="bg-input-grey p-0.5 rounded-md w-full">
  <option class="text-placeholder" value="clssrmmp_space">Buraco</option>
  <option class="text-placeholder" value="clssrmmp_empty">Vazio</option>
  <!-- se você tirar esse filter, vai aparecer "buraco" e "vazio" duplicados (mas como null e "") por que eles foram adicionados lá no `students` -->
  {#each students.filter(student => !student.id.startsWith("clssrmmp_")) as student}
    <option class="text-white" value={student.id}>{student.name}</option>
  {/each}
</select>