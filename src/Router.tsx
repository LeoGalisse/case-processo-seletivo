import { Routes, Route } from 'react-router-dom'
import { SeComp } from './pages/SeComp/Home'
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
          </>
        }
      />
    </Routes>
  )
}
