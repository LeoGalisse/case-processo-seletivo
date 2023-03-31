import { At, LinkedinLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../../../lib/axios'
import {
  ProgramacaoContent,
  ProgramacaoItem,
  TemaPalestrante,
  TipoContato,
  TitleLocation,
} from './styles'

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

interface ProgramacaoItensProps {
  value: string
}

export function ProgramaçãoItens({ value }: ProgramacaoItensProps) {
  const [programacaoItensQuarta, setProgramacaoItensQuarta] = useState<
    ProgramacaoProps[]
  >([])
  const [programacaoItensQuinta, setProgramacaoItensQuinta] = useState<
    ProgramacaoProps[]
  >([])
  const [programacaoItensSexta, setProgramacaoItensSexta] = useState<
    ProgramacaoProps[]
  >([])

  async function fetchApi() {
    const responseQuarta = await api.get('/items/all/quarta')
    setProgramacaoItensQuarta(responseQuarta.data.programation)

    const responseQuinta = await api.get('/items/all/quinta')
    setProgramacaoItensQuinta(responseQuinta.data.programation)

    const responseSexta = await api.get('/items/all/sexta')
    setProgramacaoItensSexta(responseSexta.data.programation)
  }

  useEffect(() => {
    fetchApi()
    console.log('hello')
  }, [])

  return (
    <div>
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
                    <Link to={item.contatoEmail} target="_blank">
                      <At size={20} weight="bold" id="at" />
                    </Link>
                    <Link to={item.contatoLinkedin} target="_blank">
                      <LinkedinLogo size={20} weight="fill" />
                    </Link>
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
  )
}
