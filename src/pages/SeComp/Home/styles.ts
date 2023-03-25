import { styled } from '../../../styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  marginTop: -78,
  height: 832,

  background: 'linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #1E1E1E 77.4%)',
  backgroundSize: 'cover',

  img: {
    position: 'absolute',
    width: '100%',
    height: 832,
    objectFit: 'cover',
    zIndex: -1,
  },
})

export const HomeContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  paddingLeft: 99,
  paddingBottom: 72,

  'span:first-child': {
    fontSize: '$2xl',
  },
  'span:nth-child(2)': {
    fontSize: '$5xl',
    fontFamily: 'Orbitron',
    fontWeight: '$semiBold',
  },
  'span:last-child': {
    fontSize: '$lg',
  },

  '@media (max-width: 768px)': {
    paddingLeft: 15,
  },
})
