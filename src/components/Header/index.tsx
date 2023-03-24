import { HeaderContainer, HeaderContent } from './styles'
import inatelLogo from '../../assets/inatelLogo.png'
import { Burger } from './components/Burguer'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={inatelLogo} alt="Inatel" />
        <Burger />
      </HeaderContent>
    </HeaderContainer>
  )
}
