<script>
  import tags from '$lib/data/tags.js'

  export let tagType;
  export let href = "/tags";
  const tag = tags[tagType];
  const IconComponent = tag.icon;
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class={`flex flex-row items-center justify-center text-center m-4 p-4 rounded-2xl w-full mx-auto ${tag.color}`}>
  <div class="w-max mr-2">
    <IconComponent class="outline-none w-7 h-7" />
  </div>
  <span>{@html tag.text}</span>
</svelte:element>