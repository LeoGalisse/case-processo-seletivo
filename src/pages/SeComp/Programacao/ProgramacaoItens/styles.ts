import { styled } from '../../../../styles'

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

  a: {
    textDecoration: 'none',
    color: '$white',

    '&:active': {
      color: '$white',
    },
  },
})
