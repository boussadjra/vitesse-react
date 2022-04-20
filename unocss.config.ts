import {
  defineConfig,
  // presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,

} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'


export default defineConfig({
  shortcuts: [
    ['btn', 'px-10 py-2 rounded inline-block bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 outline-none border-0 focus:outline-none'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 bg-transparent transition duration-200 text-white ease-in-out hover:opacity-100 hover:text-indigo-600'],
  ],
  presets: [
    // presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.3,
      warn: true,
    }),
    presetTypography({
      // className: 'prose prose-sm',
    }),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'Rubik',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
    presetWind(),
  ],
  theme: {
    colors: {
      'primary': {
        50: '#ABC2FF',
        100: '#96B3FF',
        200: '#6D95FF',
        300: '#4577FF',
        400: '#1a5Add',
        500: '#0042c2',
        600: '#0033BA',
        700: '#002382',
        800: '#001137',
        900: '#000525',
      },
      secondary: {
        '50': '#FCE9FD',
        '100': '#F9D7EF',
        '200': '#F3B4D3',
        '300': '#EE91B7',
        '400': '#E86D9B',
        '500': '#E34A7F',
        '600': '#D4215C',
        '700': '#A4194B',
        '800': '#731239',
        '900': '#420A28'

        // 50: '#f2f6f9',
        // 100: '#d5daec',
        // 200: '#B4BDDD',
        // 300: '#0B3954',
        // 400: '#072536',
        // 500: '#051A1E',
      },

    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [...'prose  w-max prose-lg border-2 border animate-spin'.split(' ')],
})
