import PropTypes from 'prop-types'

import Navbar from '@/components/Navbar'
import Footer from './Footer'
import ReturnToTopButton from '@/components/ui/ReturnToTopButton'

export const PageLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <ReturnToTopButton />
    </main>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
