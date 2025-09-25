// This component is copied from Material Tailwind

import React from 'react'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from 'framer-motion'
import PropTypes from 'prop-types'

export default function MobileNav({ open, className, children }) {
  const navRef = React.useRef(null)

  // default Tailwind base classes for the nav
  const baseClasses = 'block w-full overflow-hidden lg:hidden'

  const animation = {
    unmount: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    mount: {
      opacity: 1,
      height: navRef.current ? navRef.current.scrollHeight : 'auto',
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={navRef}
            initial="unmount"
            exit="unmount"
            animate="mount"
            variants={animation}
            className={`${baseClasses} ${className || ''}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}

MobileNav.propTypes = {
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}
