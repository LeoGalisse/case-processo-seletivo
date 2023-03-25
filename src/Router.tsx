import { Routes, Route } from 'react-router-dom'
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
          </>
        }
      />
    </Routes>
  )
}
