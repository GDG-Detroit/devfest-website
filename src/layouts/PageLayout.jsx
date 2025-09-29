import PropTypes from 'prop-types'

import Navbar from '@/components/Navbar'
import Footer from './Footer'

export const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main aria-labelledby="main-heading">{children}</main>
      <Footer />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
