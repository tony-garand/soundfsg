const _ = require('lodash')

module.exports = {
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'serif'],
      body: ['Open Sans', 'sans-serif']
    },
    lineHeight: {
      none: 1,
      'extra-tight': 1.1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.6,
      loose: 2,
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '2': '0.5rem',
      '4': '1rem',
      '6': '1.5rem'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1400px'
    },
    rotate: {
      '1/4': '90deg',
      '1/2': '180deg',
      '3/4': '270deg',
    },
    extend: {
      colors: {
        primary: {
          default: '#002B54',
          lighter: '#005EAF'
        },
        secondary: {
          default: '#4A90E2',
          lighter: '#E3F1FD',
          transparent: 'rgba(74,144,226,0.5)'
        },
        extra: {
          default: '#005EAF',
          lighter: '#4A90E2'
        },
        accent: {
          default: '#FFE070',
          lighter: '#FFF5D3'
        },
        gray: {
          '100': '#FFFFFF',
          '200': '#FAFAFA',
          '250': '#F5F6F8',
          '300': '#E4E4E4',
          '400': '#CCCCCC',
          '500': '#999999',
          '600': '#666666',
          '700': '#333333',
          '800': '#222222',
          '900': '#000000'
        }
      },
      fontSize: {
        'xxs': '0.6rem',
        'xs': '0.8rem',
        '2xl': '1.375rem',
        '3xl': '1.6rem',
        '4xl': '2.4rem',
        '5xl': '3rem',
        '6xl': '5rem',
        'percent-sm': '12rem',
        'percent-lg': '17.5rem',
        'percent-sign': '7rem'
      },
      spacing: {
        '7': '1.75rem',
        '22': '5.5rem',
        '32': '8rem',
        '36': '9rem',
        '44': '11rem',
        '64': '16rem',
        '136': '34rem'
      },
      width: {
        '3/2': '150%'
      },
      height: {
        '1/10': '10%'
      },
      maxWidth: {
        inner: '60rem',
        container: '71rem',
        'article-scroller': '160rem',
        'video-scroller': '370rem'
      },
      minWidth: {
        'article-scroller': '160rem',
        'video-scroller': '370rem'
      },
      boxShadow: {
        dot: '0 2px 4px rgba(0,0,0,.5)',
        md: '0 5px 10px rgba(0,0,0,.16)',
        fade: '0 40px 99px rgba(0,0,0,0.16)'
      },
      borderWidth: {
        '5': '5px'
      }
    }
  },
  variants: {
    display: ['group-hover', 'responsive', 'focus-within', 'hover', 'focus', 'active'],
    backgroundColor: ['group-hover', 'responsive', 'focus-within', 'hover', 'focus', 'active']
  },
  plugins: [
    function({ addUtilities, config, e }) {
      const rotateUtilities = _.map(config('theme.rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities)
    },
  ]
}