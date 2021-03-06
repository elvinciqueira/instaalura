import typographyVariants from './typographyVariants'

export const colors = {
  modes: {
    light: {
      error: {
        main: {
          color: '#dc3545',
          contrastText: '#fff',
        },
      },
      success: {
        main: {
          color: '#28a745',
          contrastText: '#fff',
        },
      },
      background: {
        light: {
          color: '#f2f2f2',
        },
        main: {
          color: '#fff',
        },
      },
      borders: {
        main: {
          color: '#F1F1F1',
        },
        light: {
          color: '#d5d5d5',
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
      error: {
        main: {
          color: '#dc3545',
          contrastText: '#fff',
        },
      },
      success: {
        main: {
          color: '#28a745',
          contrastText: '#fff',
        },
      },
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
        light: {
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
  mode: 'light',
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out',
}
