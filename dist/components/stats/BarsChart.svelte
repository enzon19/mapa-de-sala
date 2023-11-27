<script>
  import Chart from 'chart.js/auto';
  import { afterUpdate, onMount } from 'svelte';

  export let data;
  let chartCanvasElement;
  let chart;

  $: config = {
    type: 'bar',
    data: data,
    options: {
      borderRadius: '5',
      responsive: true,
      cutout: '95%',
      spacing: 2,
      plugins: {
        tooltip: {
          cornerRadius: 8,
          padding: 8,
          bodyFont: {
            family: "'Inter', sans-serif",
          },
          titleFont: {
            family: "'Inter', sans-serif",
          },
          footerFont: {
            family: "'Inter', sans-serif",
          },
          yAlign: 'bottom'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: "'Inter', sans-serif"
            },
            color: '#737373'
          },
          grid: {
            color: '#353535'
          }
        },
        x: {
          beginAtZero: true,
          ticks: {
            font: {
              family: "'Inter', sans-serif"
            },
            color: '#737373'
          },
          grid: {
            color: '#353535'
          }
        }
      }
    }
  };

  onMount(() => {
    const ctx = chartCanvasElement.getContext('2d');
    chart = new Chart(ctx, config);
  });

  afterUpdate(() => {
    chart.destroy();
    const ctx = chartCanvasElement.getContext('2d');
    chart = new Chart(ctx, config);
  })
</script>

<canvas bind:this={chartCanvasElement} width={200} height={200} />