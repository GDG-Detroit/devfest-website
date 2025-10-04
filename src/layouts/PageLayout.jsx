import PropTypes from 'prop-types'

import Navbar from '@/components/Navbar'
import Footer from './Footer'
import ReturnToTopButton from '@/components/ui/ReturnToTopButton'

export const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-labelledby="main-heading">
        {children}
      </main>
      <Footer />
      <ReturnToTopButton />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
