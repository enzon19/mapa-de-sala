<script>
  import "../app.css";
import { DateTime } from "luxon";
  const phrases = ["Juro que não sou psicopata. Só gosto de estatísticas.", "No final do ano vai ser mó legal ver a evolução.", `Já imaginou? Você formando na faculdade e bateu uma curiosidade de como estava o mapa de sala no dia ${DateTime.now().toFormat('dd/MM/yyyy')}?`, "🫵 Valorize sua posição no mapa de sala hoje!", "Vai ter o Recap 2023 Mapa de Sala pra você compartilhar no seu Instagramzinho..."];
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
  <p class="text-sm mb-4">v0.1.1 • Feito por enzon19</p>
  <p class="text-sm text-light-grey">{phrases[randomIndex]}</p>
</header>
<div class="flex-grow"><slot/></div>
<footer class="bg-darker-grey text-center text-sm p-4 mt-4">
  <span>Agradecimentos: Antônio Pomarico, Davi Barcelos, Lívia Carnot e Lucas Castro.</span>
  <br>
  <span>
    Veja esse projeto no
    <a target="blank" class="underline hover:text-light-grey transition-colors" href="https://github.com/enzon19/mapa-de-sala">GitHub</a>.
    Faça uma doação
    <a target="blank" class="underline hover:text-light-grey transition-colors" href="https://enzon19.com/#donate">aqui</a>.
  </span>
</footer>