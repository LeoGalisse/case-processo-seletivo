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

  '@media (min-width: 840px)': {
    button: {
      '&::before': {
        content: 'attr(data-full-date)',
      },
    },
  },

  '@media (max-width: 841px)': {
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

export const ProgramacaoContent = styled('div', {
  marginTop: 40,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',

  '@media (max-width: 1100px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

export const ProgramacaoItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '1px solid $white',
  borderRadius: '32px 0',
  padding: 32,
  marginRight: 36,
  marginBottom: 36,

  '@media (max-width: 768px)': {
    marginRight: 0,
  },
})

export const TitleLocation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 24,

  'span:first-child': {
    fontFamily: 'Orbitron',
    fontWeight: '$medium',
    fontSize: '$xl',
  },

  'span:last-child': {
    fontSize: '$md',
  },
})

export const TemaPalestrante = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 24,

  'span:first-child': {
    fontWeight: '$semiBold',
    fontSize: '$lg',
  },

  'span:last-child': {
    fontSize: '$md',
  },
})

export const TipoContato = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 50,
    marginBottom: 5,

    fontWeight: '$semiBold',
    fontSize: '$sm',
    color: '$blue',
    background: '$white',
  },

  '#at': {
    marginRight: 12,
  },
})
