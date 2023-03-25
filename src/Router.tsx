import { Routes, Route } from 'react-router-dom'
import { Hackathon } from './pages/SeComp/Hackathon'
import { SeComp } from './pages/SeComp/Home'
import { Programacao } from './pages/SeComp/Programacao'
import { Sobre } from './pages/SeComp/Sobre'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SeComp />
            <Sobre />
            <Programacao />
            <Hackathon />
          </>
        }
      />
    </Routes>
  )
}
