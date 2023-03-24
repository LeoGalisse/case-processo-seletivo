import { useState } from 'react'
import { Menu } from '../Menu'
import { BurguerContainer } from './styles'

export function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BurguerContainer
        onClick={() => setOpen(!open)}
        open={open ? 'true' : 'false'}
      >
        <div />
        <div />
        <div />
      </BurguerContainer>
      <Menu open={open} />
    </>
  )
}
