<svelte:head>
  <title>Sobre</title>
  <meta name="description" content="Mapa de Sala é um site que reúne dados sobre a posição de cada aluno na sala de aula. Projeto pessoal.">
</svelte:head>

<div class="container mx-auto px-4">
  <h2 class="text-center text-3xl font-bold m-4">Sobre</h2>
  <div class="text-center">O Mapa de Sala é um experimento pessoal realizado por Enzo, com o objetivo de reunir dados sobre a posição de cada aluno na sala de aula.</div>
  <h3 class="text-2xl font-bold my-2">O Projeto</h3>
  <p class="indent-8">A concepção do Mapa de Sala surgiu em 2022, quando eu quis ver a evolução do layout da sala ao longo do tempo e criar um vídeo ilustrando como a dinâmica do ambiente se transformou significativamente desde o início do ano. No entanto, lamentavelmente, não consegui manter um registro diário do mapa da sala no ano passado, o que adiou a realização do projeto. Mesmo tentando recuperar essas informações com a ajuda de outras pessoas, não obtive resultados satisfatórios.</p>
  <p class="indent-8">Em 2023, finalmente transformei a ideia em realidade, aproveitando meus novos conhecimentos em programação para desenvolver este site! Iniciei o registro diário do mapa da sala desde o primeiro dia de aula. Graças à eficiência do framework SvelteKit, criar um site com tantos recursos e requisitos tornou-se consideravelmente mais simples. Além disso, adquiri conhecimentos em gerenciamento de um banco de dados simples com SQL. Apesar das várias estatísticas e dados, o único item que mantenho realmente registrado no banco de dados é o mapa da sala do dia em si. As demais estatísticas são geradas dinamicamente a partir do JSON criado no editor.</p>
  <h3 class="text-2xl font-bold mt-2">Agradecimentos</h3>
  <div class="mb-2">O site e o banco de dados não seria completo sem a ajuda desse pessoal:</div>
  <div class="flex flex-col gap-3">
    <div>
      <h4 class="text-lg font-medium">Antônio Pomarico</h4>
      <span class="text-sm text-neutral-400">Anotou um mapa um dia desses aí.</span>
    </div>
    <div>
      <h4 class="text-lg font-medium">Davi Barcelos</h4>
      <span class="text-sm text-neutral-400">Anotou vários mapas e deu a ideia do Mapa de Calor.</span>
    </div>
    <div>
      <h4 class="text-lg font-medium">Gabriel Moljo</h4>
      <span class="text-sm text-neutral-400">Anotou alguns mapas e deu a ideia de ver quem já sentou em um determinado lugar.</span>
    </div>
    <div>
      <h4 class="text-lg font-medium">Gustavo Carvalho</h4>
      <span class="text-sm text-neutral-400">Vaiiii Gugu!!! Anotou um mapa um dia desses aí.</span>
    </div>
    <div>
      <h4 class="text-lg font-medium">Lívia Carnot</h4>
      <span class="text-sm text-neutral-400">Anotou vários mapas e escreveu várias frases que ficam no cabeçalho do site.</span>
    </div>
    <div>
      <h4 class="text-lg font-medium">Lucas Castro</h4>
      <span class="text-sm text-neutral-400">Me falou o nome dos novatos no começo do ano e me ajudou a fazer alguns mapas.</span>
    </div>
  </div>
</div>