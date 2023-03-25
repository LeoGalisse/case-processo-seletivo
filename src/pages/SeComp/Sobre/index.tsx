import { SobreContainer, SobreContent, SobreTitle } from './styles'

export function Sobre() {
  return (
    <div id="#sobre">
      <SobreContainer>
        <SobreTitle>
          <span>Fique à frente no jogo</span>
          <span>Participe da Semana da Computação</span>
        </SobreTitle>
        <SobreContent>
          <span>
            Um evento criado para quem busca se atualizar nas tendências e
            inovações da área de desenvolvimento de software com foco em
            inteligência artificial. Durante o evento, haverá palestras e
            minicursos com renomados representantes de empresas que atuam na
            área, oferecendo oportunidades de networking e aprendizado sobre as
            mais recentes novidades e desafios do mercado. Além disso,
            recrutadores estarão presentes para conhecer novos talentos e
            promover oportunidades de carreira! Para os mais aventureiros, o
            Inatel App Challenge, um hackathon de desenvolvimento de
            aplicativos, promete desafiar os participantes e premiar os melhores
            com reconhecimento e incentivos.
          </span>
        </SobreContent>
      </SobreContainer>
    </div>
  )
}
