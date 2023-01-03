import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Reports } from './pages/Reports'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  )
}
