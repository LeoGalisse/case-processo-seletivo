import { styled } from '../../../../styles'

export const BurguerContainer = styled('div', {
  width: '2rem',
  height: '2rem',
  position: 'fixed',
  top: 22,
  right: 20,
  zIndex: '20',
  display: 'none',

  variants: {
    open: {
      true: {
        div: {
          backgroundColor: '$white',
          '&:nth-child(1)': {
            transform: 'rotate(45deg)',
            translate: '0.35rem 0.45rem',
          },
          '&:nth-child(2)': {
            display: 'none',
          },
          '&:nth-child(3)': {
            transform: 'rotate(-45deg)',
            translate: '0.35rem -0.55rem',
          },
        },
      },
      false: {
        div: {
          backgroundColor: '$white',
          '&:nth-child(1)': {
            transform: 'rotate(0)',
          },
          '&:nth-child(2)': {
            transform: 'translateX(0)',
          },
          '&:nth-child(3)': {
            transform: 'rotate(0)',
          },
        },
      },
    },
  },

  '@media (max-width: 768px)': {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column nowrap',
  },

  div: {
    width: '2rem',
    height: '0.25rem',
    borderRadius: 10,
    transformOrigin: 1,
    transition: 'all 0.3s linear',
  },
})
