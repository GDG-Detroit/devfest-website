import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import CareersHub from '@/pages/careers-hub'
import ConnectionsPage from '@/pages/connections'
import MediaPage from '@/pages/media'
import PreviousEvents from '@/pages/PreviousEvents'
import PreviousEvent from '@/pages/PreviousEvent'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Router>
      <div role="document">
        {/* Skip Link - First element for accessibility */}
        <a
          className="absolute left-[6px] top-[-60px] z-[100] bg-white px-2 py-1 text-black focus:top-[6px]"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers-hub" element={<CareersHub />} />
          <Route path="/connections" element={<ConnectionsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/previous-events" element={<PreviousEvents />} />
          <Route path="/previous-events/:year" element={<PreviousEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
