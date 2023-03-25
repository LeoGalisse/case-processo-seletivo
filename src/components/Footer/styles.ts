import { styled } from '../../styles'

export const FooterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 182,
  marginLeft: 100,

  '@media (max-width: 768px)': {
    marginLeft: 16,
  },
})
export const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  img: {
    width: 180,
    height: 50,

    marginBottom: 24,
  },

  'span:nth-child(2)': {
    fontWeight: '$semiBold',
    fontStyle: 'italic',
    fontSize: '$lg',
  },

  'span:not(:nth-child(2))': {
    fontSize: '$md',
  },
})
export const FooterLogo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 100,
  marginTop: 80,
  marginBottom: 32,
  img: {
    width: 33,
    height: 15,

    marginLeft: 8,
  },

  '@media (max-width: 768px)': {
    marginRight: 20,
  },
})
