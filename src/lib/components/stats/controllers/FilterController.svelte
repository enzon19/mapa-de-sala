<script>
  import { slide } from 'svelte/transition';
  import { onMount, afterUpdate, createEventDispatcher } from 'svelte';
  import flatpickr from 'flatpickr';
  import '$lib/themes/mapa-de-sala-flatpickr.css';
  import { Portuguese } from 'flatpickr/dist/l10n/pt.js';
  import { DateTime } from 'luxon';
  import MultiSelect from 'svelte-multiselect';

  import tags from '$lib/data/tags.js';
  import Calendar from 'svelte-ionicons/Calendar.svelte';
  
  export let filter = {
    day: ['2023-02-06', '2023-12-11'].map(date => DateTime.fromISO(date)),
    tags: []
  }
  export let minDate = '6-2-2023';
  export let maxDate = '11-12-2023';

  const dispatch = createEventDispatcher();

  // Date Picker
  let datePicker, datePickerElement;

  function openDatePicker() {
    datePicker.toggle();
  }

  function initDatePicker(node) {
    datePicker = flatpickr(node, {
      dateFormat: 'd-m-Y',
      minDate,
      maxDate,
      locale: Portuguese,
      position: 'auto center',
      clickOpens: false,
      disableMobile: true,
      mode: 'range',
      defaultDate: filter.day.map(date => date.toJSDate()),
      onChange: function (selectedDates) {
        if (selectedDates.length === 2) {
          filter.day = selectedDates.map(date => DateTime.fromJSDate(date));
          dispatch('filterChanged', { filter });
        }
      }
    });
  }

  onMount(() => {
    initDatePicker(datePickerElement);
  });

  afterUpdate(() => {
    initDatePicker(datePickerElement);
  });
</script>

<div class="flex flex-col gap-1 mt-1" transition:slide={{ axis: 'y', duration: 300 }}>
  <div class="flex flex-col gap-0.5">
    <label for="dayRange" class="text-sm text-neutral-300">Período</label>
    <button id="dayRange" class="bg-input-grey p-2 flex flex-row gap-2 items-center justify-center rounded-xl hover:bg-input-hover-grey transition-colors" on:click={openDatePicker} on:keydown={(e) => e.key === 'Enter' && openDatePicker()} bind:this={datePickerElement}>
      <Calendar size="1.2rem" class="focus:outline-none" tabindex="-1"/> 
      <span>{filter.day[0].toLocaleString(DateTime.DATE_SHORT, { locale: 'pt-br' })} a {filter.day[1].toLocaleString(DateTime.DATE_SHORT, { locale: 'pt-br' })}</span>
    </button>
  </div>
  <div class="flex flex-col gap-0.5">
    <label for="excludeTags" class="text-sm text-neutral-300">Excluir Tags</label>
    <MultiSelect id="excludeTags" options={Object.values(tags).map(tag => ({label: tag.title, id: tag.id}))} bind:selected={filter.tags} on:change={() => dispatch('filterChanged', { filter })} outerDivClass="!bg-input-grey !p-2 !rounded-xl !border-none" ulOptionsClass="!bg-neutral-700" ulSelectedClass="!flex !gap-1.5 !mx-2" liSelectedClass="!bg-input-hover-grey !py-1 !px-2 !m-0"/>
  </div>
</div>