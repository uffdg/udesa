import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import MemberLayout from './pages/member/MemberLayout'
import Onboarding from './pages/member/Onboarding'
import Home from './pages/member/Home'
import Pagar from './pages/member/Pagar'
import Beneficios from './pages/member/Beneficios'
import Recompra from './pages/member/Recompra'
import Actividad from './pages/member/Actividad'
import Misiones from './pages/member/Misiones'
import Tarjetas from './pages/member/Tarjetas'
import Perfil from './pages/member/Perfil'
import ManagerLayout from './pages/manager/ManagerLayout'
import Segmentos from './pages/manager/Segmentos'
import Campanias from './pages/manager/Campanias'
import Analytics from './pages/manager/Analytics'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/member" element={<MemberLayout />}>
        <Route index element={<Home />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="pagar" element={<Pagar />} />
        <Route path="beneficios" element={<Beneficios />} />
        <Route path="recompra" element={<Recompra />} />
        <Route path="actividad" element={<Actividad />} />
        <Route path="misiones" element={<Misiones />} />
        <Route path="tarjetas" element={<Tarjetas />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>

      <Route path="/manager" element={<ManagerLayout />}>
        <Route index element={<Segmentos />} />
        <Route path="campanias" element={<Campanias />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  )
}

export default App
