import {
  ButtonContainer,
  ProgramacaoContainer,
  ProgramacaoTitle,
} from './styles'

import { ProgramaçãoItens } from './ProgramacaoItens'
import { useState } from 'react'

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
          <ProgramaçãoItens value={value} />
        </div>
      </ProgramacaoContainer>
    </div>
  )
}
