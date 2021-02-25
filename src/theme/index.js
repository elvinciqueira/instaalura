import typographyVariants from './typographyVariants'

export const colors = {
  modes: {
    light: {
      background: {
        light: {
          color: '#FFF',
        },
        main: {
          color: '#fff',
        },
      },
      borders: {
        main: {
          color: '#F1F1F1',
        },
      },
      primary: {
        main: {
          color: '#D7385E',
          contrastText: '#fff',
        },
      },
      secondary: {
        main: {
          color: '#FB7B6B',
          contrastText: '#fff',
        },
      },
      tertiary: {
        main: {
          color: '#070C0E',
          contrastText: '#fff',
        },
        light: {
          color: '#88989E',
          contrastText: '#fff',
        },
      },
    },
    dark: {
      background: {
        light: {
          color: '#181F22',
        },
        main: {
          color: '#030506',
        },
      },
      borders: {
        main: {
          color: '#181F22',
        },
      },
      primary: {
        main: {
          color: '#D7385E',
          contrastText: '#fff',
        },
      },
      secondary: {
        main: {
          color: '#FFA59A',
          contrastText: '#fff',
        },
      },
      tertiary: {
        main: {
          color: '#fff',
          contrastText: '#070C0E',
        },
        light: {
          color: '#D4D4D4',
          contrastText: '#070C0E',
        },
      },
    },
  },
}

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

export default {
  colors,
  borderRadius: '8px',
  typographyVariants,
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out',
}
