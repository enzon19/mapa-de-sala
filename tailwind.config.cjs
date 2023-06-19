/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      // Define your custom font here
      'sans': ['Inter', 'sans-serif'],
      'mono': ['Consolas', 'Courier New', 'monospace']
    },
    extend: {
      colors: {
        // Define your custom color palette here
        'darker-grey': '#161616',
        'back-grey': '#1c1c1c',
        'light-grey': '#6e737b',
        'input-grey': '#282828',
        'input-hover-grey': '#363636',
        'placeholder': '#9ca3ae',
        'good-warning-green': '#2a5f02',
        'bad-warning-red': '#750802',
        'information-warning-grey': '#3a3a3a',
        'neutral-850': '#212121'
      },
      boxShadow: {
        'md': '0 0 10px',
      },
      maxWidth: {
        '120': '120px',
      },
      backdropBlur: {
        'little': '1.5px',
      }
    },
  },
  plugins: [],
}