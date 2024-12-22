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
        default: 'var(--color-default)',
        pure: 'var(--color-pure)',
        'medium-gray': 'var(--color-medium-gray)',
        'dark-gray': 'var(--color-dark-gray)',
        'darker-dark-gray': 'var(--color-darker-dark-gray)',
        dark: 'var(--color-dark)',
        'blue-20': 'var(--color-blue-20)',
        'light-gray': 'var(--color-light-gray)',
        'medium-light-gray': 'var(--color-medium-light-gray)',
      },
    },
  },
  plugins: [],
};
