/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Caminhos para os arquivos onde as classes Tailwind são usadas
  ],
  theme: {
    extend: {
      backgroundImage: {
        'items-bg': "url('/src/assets/itemsBg.png')",
      },

      colors: {
        'color-default': 'var(--color-default)',
        'color-pure': 'var(--color-pure)',
        'color-medium-gray': 'var(--color-medium-gray)',
        'color-dark-gray': 'var(--color-dark-gray)',
        'color-darker-dark-gray': 'var(--color-darker-dark-gray)',
        'color-dark': 'var(--color-dark)',
        'color-blue-20': 'var(--color-blue-20)',
        'color-light-gray': 'var(--color-light-gray)',
        'color-medium-light-gray': 'var(--color-medium-light-gray)',
      },
    },
  },
  plugins: [],
};
