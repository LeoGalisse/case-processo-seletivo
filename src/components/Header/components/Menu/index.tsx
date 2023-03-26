import { ListContainer } from './styles'

interface MenuProps {
  open: boolean
}

export function Menu({ open }: MenuProps) {
  return (
    <ListContainer open={open}>
      <li>
        <a href="#home">SeComp</a>
      </li>
      <li>
        <a href="#sobre">Descrição</a>
      </li>
      <li>
        <a href="#programacao">Programação</a>
      </li>
      <li>
        <a href="#hackathon">Hackathon</a>
      </li>
    </ListContainer>
  )
}
