<script>
  import {page} from '$app/stores';
  import "../app.css";

  // navegação
  import StatsChart from 'svelte-ionicons/StatsChart.svelte';
  import Map from 'svelte-ionicons/Map.svelte';
  import Pricetag from 'svelte-ionicons/Pricetag.svelte';
  let currentURL = $page.url.pathname;
  $: currentURL = $page.url.pathname;
  const pages = [
    { 
      label: "Dados",
      icon: StatsChart,
      href: "/dados",
      pattern: /\/dados$/
    },
    { 
      label: "Mapas",
      icon: Map,
      href: "/",
      pattern: /\/dia\/[0-9][0-9]?-[0-9][0-9]?-202[3-4]$|\/$/
    },
    // { 
    //   label: "Sobre",
    //   icon: InformationCircle,
    //   href: "/sobre",
    //   pattern: /\/sobre$/
    // },
    { 
      label: "Tags",
      icon: Pricetag,
      href: "/tags",
      pattern: /\/tags$/
    }
  ]
  
  // frases aleatórias
  import phrases from "$lib/data/phrases";
  const randomIndex = Math.floor(Math.random() * phrases.length);
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
	
  :global(html) {
		background-color: theme(colors.back-grey);
		color: theme(colors.white);
	}

  .menuCurrentPage {
    --tw-bg-opacity: 1;
    background-color: #525252;
  }
</style>

<header class="bg-darker-grey p-4 text-center flex flex-col items-center gap-4">
  <div>
    <a href="/">
      <h1 class="text-2xl font-bold">Mapa de Sala</h1>
    </a>
    <p class="text-sm"><a class="hover:text-neutral-400 transition-colors" href="/novidades">v1.4.0</a> • Feito por <a class="hover:text-neutral-400 transition-colors" href="https://enzon19.com">enzon19</a></p>
  </div>
  <p class="text-sm text-light-grey">{phrases[randomIndex]}</p>
  <nav class="grid grid-flow-col grid-cols-3 gap-3 text-center">
    {#each pages as page}
      <a class="flex flex-row gap-2 justify-center items-center p-2 rounded-xl cursor-pointer transition-colors bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600" class:menuCurrentPage={currentURL.match(page.pattern)} href={page.href} tabindex="0">
        <svelte:component this={page.icon} tabindex="-1" class="inline-block w-5 h-5 focus:outline-none"/>
        {page.label}
      </a>
    {/each}
  </nav>
</header>
<div class="flex-grow"><slot/></div>
<footer class="bg-darker-grey text-center text-sm p-4 mt-4">
  <span>
    <a href="/sobre" class="underline hover:text-neutral-400 transition-colors">Sobre o projeto</a>
    e
    <a href="/sobre" class="underline hover:text-neutral-400 transition-colors">agradecimentos</a>.
  </span>
  <span>
    Veja esse projeto no
    <a target="blank" class="underline hover:text-neutral-400 transition-colors" href="https://github.com/enzon19/mapa-de-sala">GitHub</a>.
  </span>
  <br>
  <span class="text-neutral-500">
    Esse projeto não tem filiação com qualquer escola e nem faz referência a alguma.
  </span>
</footer>