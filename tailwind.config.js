/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './announcement.html'],
  theme: {
    screens: {
      'media-1255': {'max': '1255px'},
      'media-920': {'max': '920px'},
      'media-780': {'max': '780px'},
      'media-655': {'max': '655px'},
      'media-533': {'max': '533px'},
    },
    extend: {
      content: {
        'breadcrumb': "url('../img/arr-right-sm.svg')",
      },
      backgroundImage: {
        'card1': "url('../img/photo-1.jpg')",
      },
      boxShadow: {
        '3xl': '0 0 20px 0 rgba(0, 0, 0, 0.07)',
        '2xl': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        '-2xl': '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        'media-3': 'repeat(3, minmax(0, 243px))',
        'media-2': 'repeat(2, minmax(0, 320px))',
        'media-list-1': 'repeat(1, minmax(0, 320px))',
        'media-grid-2': 'repeat(2, minmax(0, 243px))',
        'media-grid-mobile-md-2': 'repeat(2, minmax(0, 215px))',
        'media-grid-mobile-sm-2': 'repeat(2, minmax(0, 165px))',
        'media-grid-mobile-2': 'repeat(2, minmax(0, 150px))',
      },
      
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'accent-600': '#35532F',
      'accent-500': '#57864D',
      'accent-400': '#7CC06E',
      'accent-300': '#96CD8B',
      'accent-200': '#BDDFB7',
      'accent-100': '#DEEFDB',
      'accent-50': '#F2F9F0 ',
      'vk-600': '#213346',
      'vk-500': '#365371',
      'vk-400': '#4D77A2',
      'vk-300': '#7192B5',
      'vk-200': '#A6BBD1',
      'vk-100': '#D2DDE8',
      'vk-50': '#EDF1F6 ',
      'neutralBlack': '#000000',
      'neutralWhite': '#FFFFFF',
      'neutral-600': '#373737',
      'neutral-500': '#5A5A5A',
      'neutral-400': '#808080',
      'neutral-300': '#9A9A9A',
      'neutral-200': '#C0C0C0',
      'neutral-100': '#DFDFDF',
      'neutral-50': '#F2F2F2',
      'error-600': '#5F2222',
      'error-500': '#9A3737',
      'error-400': '#DC4F4F',
      'error-300': '#E37272',
      'error-200': '#EDA7A7',
      'error-100': '#F6D3D3',
      'error-50': '#FBEDED',
    },
  },
  plugins: [],
}

