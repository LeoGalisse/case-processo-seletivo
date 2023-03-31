import { styled } from '../../../styles'

export const ProgramacaoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 96,
  paddingBottom: 96,
  paddingLeft: '7.9vw',
  paddingRight: '4vw',

  background: '$blue',

  '@media (max-width: 768px)': {
    paddingLeft: '2vw',
    paddingRight: '2vw',
  },
})

export const ProgramacaoTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  'span:first-child': {
    fontFamily: 'Orbitron',
    fontWeight: '$semiBold',
    fontSize: '$4xl',
  },

  'span:last-child': {
    fontSize: '$xl',
  },
})

export const ButtonContainer = styled('div', {
  marginTop: 40,
  button: {
    border: 0,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 50,
    background: 'transparent',

    cursor: 'pointer',
    color: '$white',
    fontWeight: '$semiBold',
    fontSize: '$lg',

    '&:hover': {
      background: '$white',
      color: '$blue',
    },
  },

  'button:not(:last-child)': {
    marginRight: 64,
  },

  '.active': {
    background: '$white',
    color: '$blue',
  },

  '@media (min-width: 866px)': {
    button: {
      '&::before': {
        content: 'attr(data-full-date)',
      },
    },
  },

  '@media (max-width: 865px)': {
    button: {
      '&::before': {
        content: 'attr(data-mobile-date)',
      },
    },
  },

  '@media (max-width: 480px)': {
    'button:not(:last-child)': {
      marginRight: 32,
    },
  },
})
