<script>
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/themes/dark.css';
  import { Portuguese } from "flatpickr/dist/l10n/pt.js"
  import { DateTime } from "luxon";

  import ChevronForward from 'svelte-ionicons/ChevronForward.svelte';
  import ChevronBack from 'svelte-ionicons/ChevronBack.svelte';

  import { onMount, afterUpdate } from 'svelte';
  import { goto } from '$app/navigation';

  export let requestedDate;
  export let route = "dia";

  $: yesterday = requestedDate.minus({ day: 1 });
  $: tomorrow = requestedDate.plus({ day: 1 });
  $: requestedDateAsString = requestedDate.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long' });
  
  // Date Picker de bosta
  let datePicker, datePickerElement;

  function openDatePicker() {
    datePicker.open();
  }

  function initDatePicker(node) {
    datePicker = flatpickr(node, {
      defaultDate: requestedDate.toJSDate(),
      dateFormat: 'd-m-Y',
      minDate: "6-2-2023",
      maxDate: "8-12-2023",
      locale: Portuguese,
      disableMobile: true,
      onChange: function (selectedDates) {
        const selectedDate = DateTime.fromJSDate(selectedDates[0]);
        goto(`/${route}/` + selectedDate.toFormat('dd-MM'))
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

<div class="flex items-center gap-2 m-4 justify-center">
  <a class="inline-block cursor-pointer" href={`/${route}/` + yesterday.toFormat('dd-MM')}><ChevronBack size="2rem" class="focus:outline-none focus:text-neutral-400"/></a>
  <button class="text-center px-2 py-1 cursor-pointer w-72" on:click={openDatePicker} on:keydown={(e) => e.key === 'Enter' && openDatePicker()} bind:this={datePickerElement}>{requestedDateAsString}</button>
  <a class="inline-block cursor-pointer" href={`/${route}/` + tomorrow.toFormat('dd-MM')}><ChevronForward size="2rem" class="focus:outline-none focus:text-neutral-400"/></a>
</div>
