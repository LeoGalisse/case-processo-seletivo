import { ListContainer } from './styles'

interface MenuProps {
  open: boolean
}

export function Menu({ open }: MenuProps) {
  return (
    <ListContainer open={open}>
      <li>
        <a href="">SeComp</a>
      </li>
      <li>
        <a href="">Descrição</a>
      </li>
      <li>
        <a href="">Programação</a>
      </li>
      <li>
        <a href="">Hackathon</a>
      </li>
    </ListContainer>
  )
}
