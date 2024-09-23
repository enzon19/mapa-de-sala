<script>
  import { supabase } from "$lib/supabaseClient";
  import flatpickr from 'flatpickr';
  import '$lib/themes/mapa-de-sala-flatpickr.css';
  import { Portuguese } from "flatpickr/dist/l10n/pt.js";
  import { DateTime } from "luxon";

  import ChevronForward from 'svelte-ionicons/ChevronForward.svelte';
  import ChevronBack from 'svelte-ionicons/ChevronBack.svelte';

  import { onMount, afterUpdate } from 'svelte';
  import { goto } from '$app/navigation';

  export let requestedDate;
  export let route = "dia";
  export let checkInDatabase = false;

  $: requestedDateAsString = requestedDate.setLocale('pt-BR').toLocaleString({day: 'numeric', month: 'long', weekday: 'long', year: requestedDate.year == 2023 ? 'numeric' : undefined });

  async function goToPreviousDay() {
    let previousDate;

    if (checkInDatabase) {
      const {data} = await supabase.from("classroomMap").select('day').lt('day', requestedDate.toString()).order('day', { ascending: false }).limit(1);
      previousDate = DateTime.fromISO(data[0]?.day);
      if (!previousDate.isValid) previousDate = requestedDate.minus({ day: 1 });
    } else {
      previousDate = requestedDate.minus({ day: 1 });
    }
    
    goto(`/${route}/` + previousDate.toFormat('dd-MM-yyyy'));
  }

  async function goToNextDay() {
    let previousDate;

    if (checkInDatabase) {
      const {data} = await supabase.from("classroomMap").select('day').gt('day', requestedDate.toString()).order('day', { ascending: true }).limit(1);
      previousDate = DateTime.fromISO(data[0]?.day);
      if (!previousDate.isValid) previousDate = requestedDate.plus({ day: 1 });
    } else {
      previousDate = requestedDate.plus({ day: 1 });
    }

    goto(`/${route}/` + previousDate.toFormat('dd-MM-yyyy'));
  }

  function changeDaysUsingKeyboard (event) {
    if (event.key === 'ArrowLeft') goToPreviousDay();
    if (event.key === 'ArrowRight') goToNextDay();
  };

  // Date Picker
  let datePicker, datePickerElement;

  export function openDatePicker() {
    datePicker.toggle();
  }

  function initDatePicker(node) {
    datePicker = flatpickr(node, {
      defaultDate: requestedDate.toJSDate(),
      dateFormat: 'd-m-Y',
      minDate: "6-2-2023",
      maxDate: "9-12-2024",
      locale: Portuguese,
      position: "auto center",
      clickOpens: false,
      disableMobile: true,
      onChange: function (selectedDates) {
        const selectedDate = DateTime.fromJSDate(selectedDates[0]);
        goto(`/${route}/` + selectedDate.toFormat('dd-MM-yyyy'))
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
  <button class="inline-block cursor-pointer" on:click={goToPreviousDay} on:keypress={goToPreviousDay}><ChevronBack size="2rem" class="focus:outline-none focus:text-neutral-400"/></button>
  <button class="text-center px-2 py-1 cursor-pointer min-w-[18rem] w-max" on:click={openDatePicker} on:keydown={(e) => e.key === 'Enter' && openDatePicker()} bind:this={datePickerElement}>{requestedDateAsString}</button>
  <button class="inline-block cursor-pointer" on:click={goToNextDay} on:keypress={goToNextDay}><ChevronForward size="2rem" class="focus:outline-none focus:text-neutral-400"/></button>
</div>

<svelte:window on:keydown={changeDaysUsingKeyboard} />