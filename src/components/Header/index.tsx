import { HeaderContainer, HeaderContent, LinksContainer } from './styles'
import inatelLogo from '../../assets/inatelLogo.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={inatelLogo} alt="Inatel" />
        <LinksContainer>
          <a href="">SeComp</a>
          <a href="">Descrição</a>
          <a href="">Programação</a>
          <a href="">Hackathon</a>
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
