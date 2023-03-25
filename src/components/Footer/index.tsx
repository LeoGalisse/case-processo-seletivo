import { FooterContainer, FooterContent, FooterLogo } from './styles'
import inatelLogo from '../../assets/inatelLogo.png'
import CP2Logo from '../../assets/CP2Logo.png'

export function Footer() {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          <img src={inatelLogo} alt="Inatel" />
          <span>Instituto Nacional de Telecomunicações - Inatel</span>
          <span>Campus em Santa Rita do Sapucaí - MG - Brasil</span>
          <span>Av. João Camargo, 510 - Centro - 37540-000</span>
          <span>+55 35 3471 9200</span>
        </FooterContent>
        <FooterLogo>
          <span>Designed by</span>
          <img src={CP2Logo} alt="" />
        </FooterLogo>
      </FooterContainer>
    </div>
  )
}
