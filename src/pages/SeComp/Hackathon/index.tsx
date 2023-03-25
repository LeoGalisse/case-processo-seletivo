import { HackathonContainer, HackathonContent } from './styles'
import hackathonImg from '../../../assets/hackathonBackground.png'

export function Hackathon() {
  return (
    <div>
      <HackathonContainer>
        <img src={hackathonImg} alt="" />
        <HackathonContent>
          <span>22 a 27 de Maio de 2023</span>
          <span>HACKATHON</span>
          <span>Inatel App Challenge</span>
        </HackathonContent>
      </HackathonContainer>
    </div>
  )
}
