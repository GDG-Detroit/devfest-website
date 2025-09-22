import PropTypes from 'prop-types'

import Navbar from '@/components/Navbar'
import Footer from './Footer'

export const PageLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
