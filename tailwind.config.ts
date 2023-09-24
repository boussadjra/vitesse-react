/** @type {import('tailwindcss').Config} */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#ebfffc',
          '100': '#cdfffb',
          '200': '#a1fffb',
          '300': '#60fffb',
          '400': '#18f8f7',
          '500': '#00dcde',
          '600': '#00afb9',
          '700': '#088b96',
          '800': '#106f7a',
          '900': '#125c67',
          '950': '#053d47',

        },
        secondary: {
          '50': '#fdfcdc',
          '100': '#fdfbc4',
          '200': '#fcf68c',
          '300': '#fbe949',
          '400': '#f7d818',
          '500': '#e7be0b',
          '600': '#c79507',
          '700': '#9f6b09',
          '800': '#835410',
          '900': '#704513',
          '950': '#412407',

        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['solar', 'tabler']),
    }),
  ],
};
