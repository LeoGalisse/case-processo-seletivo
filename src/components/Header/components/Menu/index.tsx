import { Link } from 'react-router-dom'
import { ListContainer } from './styles'

interface MenuProps {
  open: boolean
}

export function Menu({ open }: MenuProps) {
  const handleScroll = (amount) => {
    window.scrollTo({
      top: amount,
      behavior: 'smooth',
    })
  }

  return (
    <ListContainer open={open}>
      <li>
        <Link to="" onClick={() => handleScroll(0)}>
          SeComp
        </Link>
      </li>
      <li>
        <Link to="" onClick={() => handleScroll(836)}>
          Descrição
        </Link>
      </li>
      <li>
        <Link to="" onClick={() => handleScroll(1700)}>
          Programação
        </Link>
      </li>
      <li>
        <Link to="" onClick={() => handleScroll(2400)}>
          Hackathon
        </Link>
      </li>
    </ListContainer>
  )
}
