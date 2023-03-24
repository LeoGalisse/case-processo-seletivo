import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: '#403FFF',
      black: '#1E1E1E',
    },

    fontSizes: {
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.625rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '6xl': '4rem',
    },

    fontWeight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
    },
  },
})
