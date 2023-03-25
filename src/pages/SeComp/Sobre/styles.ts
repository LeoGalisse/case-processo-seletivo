import { styled } from '../../../styles'

export const SobreContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const SobreTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 96,

  'span:first-child': {
    fontFamily: 'Orbitron',
    fontWeight: '$semiBold',
    fontSize: '$4xl',
  },
  'span:last-child': {
    fontSize: '$xl',
  },
})

export const SobreContent = styled('div', {
  display: 'flex',
  textAlign: 'center',

  marginBottom: 96,
  marginTop: 36,
  marginLeft: '7.9vw',
  marginRight: '7.9vw',

  span: {
    fontSize: '$lg',
  },

  '@media (max-width: 768px)': {
    marginLeft: '2vw',
    marginRight: '2vw',
  },
})
