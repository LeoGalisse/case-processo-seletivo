import { Header } from '../../../components/Header'
import heroImage from '../../../assets/heroImage.png'
import { HomeContainer, HomeContent } from './styles'

export function SeComp() {
  return (
    <div id="home">
      <Header />
      <HomeContainer>
        <img src={heroImage} alt="" />
        <HomeContent>
          <span id="SeComp">Semana da Computação 2023</span>
          <span>Artificial Intelligence & Beyond</span>
          <span>A chave para um futuro no desenvolvimento de software.</span>
        </HomeContent>
      </HomeContainer>
    </div>
  )
}
