<script>
  import Chart from 'chart.js/auto';
  import { afterUpdate, onMount } from 'svelte';

  export let data;
  let chartCanvasElement;
  let chart;

  $: config = {
    type: 'line',
    data: {
      datasets: data
    },
    options: {
      borderRadius: '30',
      responsive: true,
      cutout: '95%',
      spacing: 2,
    elements: {
      point: {
        pointStyle: false
      }
    },
      plugins: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 20,
            font: {
              size: 14,
              family: "'Inter', sans-serif"
            },
            color: '#737373'
          }
        },
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
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: {
              family: "'Inter', sans-serif",
            },
            color: '#737373'
          },
          grid: {
            color: '#353535'
          }
        },
        y: {
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