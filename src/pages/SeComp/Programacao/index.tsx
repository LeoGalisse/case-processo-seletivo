import {
  ButtonContainer,
  ProgramacaoContainer,
  ProgramacaoContent,
  ProgramacaoItem,
  ProgramacaoTitle,
  TemaPalestrante,
  TipoContato,
  TitleLocation,
} from './styles'

import { At, LinkedinLogo } from 'phosphor-react'
import { useState } from 'react'

interface ProgramacaoProps {
  id: string
  horario: string
  local: string
  tema: string
  palestrante: string
  tipo: string
  contatoLinkedin: string
  contatoEmail: string
}

const programacaoItensQuarta: ProgramacaoProps[] = [
  {
    id: '1',
    horario: '08h00',
    local: 'Prédio I, salas 20-22',
    tema: 'Construindo chatbots inteligentes com Machine Learning',
    palestrante: 'Carlos Oliveia, BotBuilders',
    tipo: 'Minicurso',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '2',
    horario: '10h00',
    local: 'Auditório Aureliano Chaves',
    tema: 'O uso de redes neurais no desenvolvimento de softwares inteligentes',
    palestrante: 'Gabriela Fernandes, NeuralMind',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '3',
    horario: '13h30',
    local: 'Prédio I, salas 15-17',
    tema: 'Aprendizado de máquina aplicado à analise de dados em software',
    palestrante: 'Paula Vieira, DataAI',
    tipo: 'Minicurso',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '4',
    horario: '15h30',
    local: 'Laboratório de Ideação',
    tema: 'Como a Inteligência Artificial está mudando o mundo de software',
    palestrante: 'Andrea Santos e Pedro Silva, AI Tech',
    tipo: 'Debate',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '5',
    horario: '17h30',
    local: 'Auditório Aureliano Chaves',
    tema: 'Como o aprendizado por reforço pode melhorar a experiência do usuário',
    palestrante: 'Roberto Mendes, Reinforcement AI',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '6',
    horario: '19h30',
    local: 'Teatro Inatel',
    tema: 'Abertura: O futuro do desenvolvimento de software com Inteligência Artificial',
    palestrante: 'Maria Souza, SmartAI',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
]
const programacaoItensQuinta: ProgramacaoProps[] = [
  {
    id: '1',
    horario: '08h00',
    local: 'Prédio I, salas 20-22',
    tema: 'Criando um sistema de recomendação com aprendizado de máquina',
    palestrante: 'Juliana Santos, RecommenderAI',
    tipo: 'Minicurso',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '2',
    horario: '10h00',
    local: 'Auditório Aureliano Chaves',
    tema: 'Inteligência Artificial para tomada de decisões em negócios ',
    palestrante: 'Luís Carlos, DeciAI',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '3',
    horario: '13h30',
    local: 'Prédio I, salas 15-17',
    tema: 'Aprendizado de máquina: criando um modelo preditivo em Python',
    palestrante: 'Patrícia Martins, AI Solution',
    tipo: 'Minicurso',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '4',
    horario: '15h30',
    local: 'Auditório Aureliano Chaves',
    tema: 'Introdução ao Processamento de Linguagem Natural (NLP) na programação',
    palestrante: 'Alberto da Silva, AI Digital',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '5',
    horario: '17h30',
    local: 'Espaço de Eventos',
    tema: 'Feira de Oportunidades & Networking',
    palestrante: 'Representantes e recrutadores de empresas parceiras',
    tipo: 'Louge',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '6',
    horario: '19h30',
    local: 'Teatro Inatel',
    tema: 'Inteligência Artificial pode substituir completamente os desenvolvedores?',
    palestrante: 'André Almeira, AI Future',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
]
const programacaoItensSexta: ProgramacaoProps[] = [
  {
    id: '1',
    horario: '08h00',
    local: 'Prédio I, salas 20-22',
    tema: 'Criando um assistente virtual com NPL: uma abordagem prática',
    palestrante: 'Eduardo Silva, AI Bots',
    tipo: 'Minicurso',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '2',
    horario: '10h00',
    local: 'Auditório Aureliano Chaves',
    tema: 'Inteligência Artificial e Ética: responsabilidade social dos desenvolvedores',
    palestrante: 'Paulo Souza, AI Legal',
    tipo: 'Debate',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '3',
    horario: '13h30',
    local: 'Prédio I, salas 15-17',
    tema: 'Desenvolvimento de aplicações de reconhecimento de fala com Inteligência Artificial',
    palestrante: 'Cláudia Lima, AI Learnign',
    tipo: 'Minicurso',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '4',
    horario: '15h30',
    local: 'Auditório Aureliano Chaves',
    tema: 'Desafios e oportunidades na implementação de IA em softwares: melhores práticas',
    palestrante: 'Marcelo Ribeiro, AI Digital',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '5',
    horario: '17h30',
    local: 'Laboratório de Ideação',
    tema: 'O futuro do desenvolvimento de software com IA: tendências e perspectivas',
    palestrante: 'Carla Gomes, AI Security',
    tipo: 'Debate',
    contatoLinkedin: '',
    contatoEmail: '',
  },
  {
    id: '6',
    horario: '19h30',
    local: 'Teatro Inatel',
    tema: 'DevOps: como a IA mudou a forma como desenvolvemos e entregamos software',
    palestrante: 'Felipe Alves, AI Tech',
    tipo: 'Palestra',
    contatoLinkedin: '',
    contatoEmail: '',
  },
]

export function Programacao() {
  const [value, setValue] = useState('quarta')

  return (
    <div id="programacao">
      <ProgramacaoContainer>
        <ProgramacaoTitle>
          <span>Agenda do Sucesso</span>
          <span>Confira a programação da semana</span>
        </ProgramacaoTitle>
        <div>
          <ButtonContainer>
            <button
              onClick={() => setValue('quarta')}
              className={value === 'quarta' && 'active'}
              data-full-date="Quarta-feira(24/05)"
              data-mobile-date="24/05"
            />
            <button
              onClick={() => setValue('quinta')}
              className={value === 'quinta' && 'active'}
              data-full-date="Quinta-feira(25/05)"
              data-mobile-date="25/05"
            />
            <button
              onClick={() => setValue('sexta')}
              className={value === 'sexta' && 'active'}
              data-full-date="Sexta-feira(26/05)"
              data-mobile-date="26/05"
            />
          </ButtonContainer>
          <ProgramacaoContent>
            {value === 'quarta' &&
              programacaoItensQuarta.map((item) => {
                return (
                  <ProgramacaoItem key={item.id}>
                    <TitleLocation>
                      <span>{item.horario}</span>
                      <span>{item.local}</span>
                    </TitleLocation>
                    <TemaPalestrante>
                      <span>{item.tema}</span>
                      <span>{item.palestrante}</span>
                    </TemaPalestrante>
                    <TipoContato>
                      <span>{item.tipo}</span>
                      <div>
                        <At size={20} weight="bold" id="at" />
                        <LinkedinLogo size={20} weight="fill" />
                      </div>
                    </TipoContato>
                  </ProgramacaoItem>
                )
              })}
            {value === 'quinta' &&
              programacaoItensQuinta.map((item) => {
                return (
                  <ProgramacaoItem key={item.id}>
                    <TitleLocation>
                      <span>{item.horario}</span>
                      <span>{item.local}</span>
                    </TitleLocation>
                    <TemaPalestrante>
                      <span>{item.tema}</span>
                      <span>{item.palestrante}</span>
                    </TemaPalestrante>
                    <TipoContato>
                      <span>{item.tipo}</span>
                      <div>
                        <At size={20} weight="bold" id="at" />
                        <LinkedinLogo size={20} weight="fill" />
                      </div>
                    </TipoContato>
                  </ProgramacaoItem>
                )
              })}
            {value === 'sexta' &&
              programacaoItensSexta.map((item) => {
                return (
                  <ProgramacaoItem key={item.id}>
                    <TitleLocation>
                      <span>{item.horario}</span>
                      <span>{item.local}</span>
                    </TitleLocation>
                    <TemaPalestrante>
                      <span>{item.tema}</span>
                      <span>{item.palestrante}</span>
                    </TemaPalestrante>
                    <TipoContato>
                      <span>{item.tipo}</span>
                      <div>
                        <At size={20} weight="bold" id="at" />
                        <LinkedinLogo size={20} weight="fill" />
                      </div>
                    </TipoContato>
                  </ProgramacaoItem>
                )
              })}
          </ProgramacaoContent>
        </div>
      </ProgramacaoContainer>
    </div>
  )
}
