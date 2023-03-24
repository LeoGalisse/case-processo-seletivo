import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    borderBox: 'border-box',
  },

  body: {
    color: '$white',
    backgroundColor: '$black',

    fontFamily: 'Titillium Web',
    fontWeight: '$normal',

    '-webkit-font-smoothing': 'antialiased',
  },
})
