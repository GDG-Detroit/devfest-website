import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ReturnToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const scrollDuration = 2000
    const startTime = Date.now()
    const startPosition = window.scrollY

    /**
     * Easing function for smooth scroll animation
     * @param {number} t - Progress value from 0 (start) to 1 (end)
     * @returns {number} Eased progress value
     */
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

    const animateScroll = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / scrollDuration, 1)

      const easedProgress = easeInOutCubic(progress)
      const currentPosition = startPosition * (1 - easedProgress)

      window.scrollTo(0, currentPosition)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToTop()
    }
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-all duration-300 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          aria-label="Return to top of page"
          title="Return to top of page"
        >
          <FaArrowUp className="size-5" aria-hidden="true" />
        </button>
      )}
    </>
  )
}

export default ReturnToTopButton
