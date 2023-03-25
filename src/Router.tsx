import { Routes, Route } from 'react-router-dom'
import { SeComp } from './pages/SeComp/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SeComp />} />
    </Routes>
  )
}
