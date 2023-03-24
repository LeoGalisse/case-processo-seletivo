import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  backgroundColor: 'rgba(30, 30, 30, 0.5)',
})

export const HeaderContent = styled('div', {
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft: 64,
  paddingRight: 64,
  paddingTop: 24,
  paddingBottom: 26,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    width: 101,
    height: 28,
  },
})

export const LinksContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'row',

  a: {
    textDecoration: 'none',
    color: '$white',
  },

  'a:first-child': {
    marginRight: 20,
  },

  'a:not(:first-child):not(:last-child)': {
    marginLeft: 20,
    marginRight: 20,
  },

  'a:last-child': {
    marginLeft: 20,
  },
})
