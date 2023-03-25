import { styled } from '../../../styles'

export const HackathonContainer = styled('div', {
  display: 'flex',
  img: {
    position: 'absolute',
    width: '100%',
    height: 445,
    objectFit: 'cover',
    zIndex: -1,
  },

  '@media (max-width: 490px)': {
    img: {
      width: '200%',
      transform: 'translateX(-375px)',
    },
  },
})

export const HackathonContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 183,
  marginLeft: 100,

  'span:first-child': {
    fontSize: '$xl',
  },

  'span:nth-child(2)': {
    fontSize: '$6xl',
    fontWeight: '$semiBold',
    fontFamily: 'Orbitron',
  },

  'span:last-child': {
    fontSize: '$3xl',
    fontFamily: 'Orbitron',
    fontWeight: '$semiBold',
  },

  '@media (max-width: 768px)': {
    marginLeft: 16,
  },

  '@media (max-width: 490px)': {
    'span:first-child': {
      fontSize: '$lg',
    },
    'span:nth-child(2)': {
      fontSize: '$4xl',
    },
    'span:last-child': {
      fontSize: '$2xl',
    },
  },
})
