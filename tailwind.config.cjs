/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        "extraMd": '880px',
        'extraLg': '1200px'

      },
      fontFamily: {
        'roboto': ['Roboto', "sans-serif"]
      },
      gridTemplateRows: {
        '12': 'repeat(12, auto)'
      },
      colors: {
        'flint': {
          '50': '#f7f7f6',
          '100': '#e4e4e3',
          '200': '#c9c8c6',
          '300': '#a7a3a1',
          '400': '#84807d',
          '500': '#716d6a',
          '600': '#53514e',
          '700': '#454240',
          '800': '#393836',
          '900': '#32312f',
        },
        'tuna': {
          '50': '#f4f4f7',
          '100': '#e4e5e9',
          '200': '#cbccd6',
          '300': '#a7a8b9',
          '400': '#7b7b95',
          '500': '#60607a',
          '600': '#545367',
          '700': '#484757',
          '800': '#403f4b',
          '900': '#302f37',
        },
        'cornflower-blue': {
          '50': '#eff2ff',
          '100': '#dbe1fe',
          '200': '#c0ccfd',
          '300': '#94abfc',
          '400': '#5d7cf8',
          '500': '#3d56f4',
          '600': '#2734e9',
          '700': '#1f22d6',
          '800': '#2220ad',
          '900': '#1f2189',
        },
        'screamin-green': {
          '50': '#eefff3',
          '100': '#d7ffe4',
          '200': '#b2ffcb',
          '300': '#66ff99',
          '400': '#33f574',
          '500': '#09de51',
          '600': '#01b83f',
          '700': '#059035',
          '800': '#0a712e',
          '900': '#0a5d29',
        },
        'riptide': {
          '50': '#f0fdf6',
          '100': '#ddfbeb',
          '200': '#bcf6d7',
          '300': '#76eaae',
          '400': '#4ddb92',
          '500': '#25c272',
          '600': '#19a05b',
          '700': '#177e4a',
          '800': '#18633d',
          '900': '#155234',
        },
        'silver-chalice': {
          '50': '#f8f8f8',
          '100': '#f0f0f0',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#b4b4b4',
          '500': '#9e9e9e',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
        },
        'wedgewood': {
          '50': '#f2f9f9',
          '100': '#ddeff0',
          '200': '#bfe0e2',
          '300': '#92cace',
          '400': '#5faab1',
          '500': '#438e96',
          '600': '#3b757f',
          '700': '#356169',
          '800': '#325158',
          '900': '#2d464c',
        },
        'outer-space': {
          '50': '#f3f7f8',
          '100': '#dfe9ee',
          '200': '#c3d6de',
          '300': '#9ab9c6',
          '400': '#6994a7',
          '500': '#4e788c',
          '600': '#436477',
          '700': '#3b5363',
          '800': '#364854',
          '900': '#2a353e',
        },

      },
      animation: {
        slideIn: 'slideIn 350ms ease',
        slideOut: 'slideOut 350ms ease'
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-1000px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-1000px)'
          }
        }
      },
      container: {
          center: true,
          screens: {
            sm: "100%",
            md: "100%",
            lg: "1024px",
            xl: "1192px",
          }
      }
    }
  },
  plugins: [],
}
