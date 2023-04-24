<script>
  import "../app.css";
  import phrases from "$lib/data/phrases";
  const randomIndex = Math.floor(Math.random() * phrases.length);
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
	
  :global(html) {
		background-color: theme(colors.back-grey);
		color: theme(colors.white);
	}
</style>

<header class="bg-darker-grey p-4 text-center">
  <a href="/">
    <h2 class="text-2xl font-bold">Mapa de Sala</h2>
  </a>
  <p class="text-sm mb-4"><a  class="hover:text-light-grey transition-colors" href="/novidades">v0.3.1</a> • Feito por enzon19</p>
  <p class="text-sm text-light-grey">{phrases[randomIndex]}</p>
</header>
<div class="flex-grow"><slot/></div>
<footer class="bg-darker-grey text-center text-sm p-4 mt-4">
  <span>Agradecimentos: Antônio Pomarico, Davi Barcelos, Gabriel Moljo, Lívia Carnot e Lucas Castro.</span>
  <br>
  <span>
    Veja esse projeto no
    <a target="blank" class="underline hover:text-light-grey transition-colors" href="https://github.com/enzon19/mapa-de-sala">GitHub</a>.
    Faça uma doação
    <a target="blank" class="underline hover:text-light-grey transition-colors" href="https://enzon19.com/#donate">aqui</a>.
  </span>
</footer>