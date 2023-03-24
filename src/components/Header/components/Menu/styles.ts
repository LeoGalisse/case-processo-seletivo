import { styled } from '../../../../styles'

export const ListContainer = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row nowrap',

  variants: {
    open: {
      true: {
        '@media (max-width: 768px)': {
          transform: 'translateX(0)',

          'li:first-child': {
            marginLeft: 20,
            marginTop: 131,
          },
          li: {
            marginBottom: 40,
          },
          'li:last-child': {
            marginLeft: 0,
          },
        },
      },
      false: {
        '@media (max-width: 768px)': {
          transform: 'translateX(100%)',
        },
      },
    },
  },

  a: {
    textDecoration: 'none',
    color: '$white',
  },

  'li:first-child': {
    marginRight: 20,
  },

  'li:not(:first-child):not(:last-child)': {
    marginLeft: 20,
    marginRight: 20,
  },

  'li:last-child': {
    marginLeft: 20,
  },

  '@media (max-width: 768px)': {
    flexFlow: 'column nowrap',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: 300,
    paddingTop: '3.5rem',
    alignItems: 'center',

    li: {
      color: '$white',
    },
  },
})
