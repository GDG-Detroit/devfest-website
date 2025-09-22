import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import PreviousEvents from '@/pages/PreviousEvents'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
