<script>
  import tags from '$lib/data/tags.js'

  export let tagType;
  const tag = tags[tagType];
  const IconComponent = tag.icon;
</script>

<a href="/tags" class={`flex flex-row items-center justify-center text-center m-4 p-4 rounded-2xl ${tag.color}`}>
  <IconComponent class="inline-block mr-2 w-16 h-16 sm:w-7 sm:h-7" />
  <span>{@html tag.text}</span>
</a>