import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { yodaQuotes } from '@/data/yodaQuotes'
import yodaHead from '@/assets/images/yodahead.webp'

const Yoda404 = () => {
  const [randomQuote, setRandomQuote] = useState('')
  const [animationClass, setAnimationClass] = useState('yoda-float')

  useEffect(() => {
    // Generate a random quote when component mounts
    const quote = yodaQuotes[Math.floor(Math.random() * yodaQuotes.length)]
    setRandomQuote(quote)

    // Randomly select animation variation for more organic feel
    const animations = [
      'yoda-float',
      'yoda-float-variation',
      'yoda-float-variation2',
    ]
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)]
    setAnimationClass(randomAnimation)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-emerald-50 to-primary-100 p-8 text-center">
      {/* 404 Error Display */}
      <div className="mb-4">
        <h1 className="font-biorhyme text-8xl font-bold text-emerald-800">
          404
        </h1>
        <h2 className="mt-2 text-2xl text-gray-800">Page Not Found</h2>
      </div>

      {/* Yoda Character Container */}
      <div className="relative flex flex-col items-center">
        {/* Talk Bubble */}
        <div className="relative mb-6 max-w-md">
          {/* Speech bubble */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-xl">
            <p className="prose font-asimovian text-xl font-medium italic leading-relaxed text-emerald-800">
              &quot;{randomQuote}&quot;
            </p>
          </div>

          {/* Speech bubble tail */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
            <div className="size-0 border-x-[15px] border-t-[20px] border-x-transparent border-t-white"></div>
          </div>
        </div>

        {/* Yoda Character */}
        <div className="flex size-48 items-center justify-center">
          <img
            src={yodaHead}
            alt="Decorative Yoda head for 404 page"
            className={`size-full object-contain ${animationClass}`}
            loading="eager"
            width="192"
            height="192"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/"
          className="rounded-lg bg-emerald-800 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-emerald-900 hover:shadow-xl"
        >
          Return to Home
        </Link>
        <button
          onClick={() => {
            // Filter out the current quote to ensure we get a different one
            const availableQuotes = yodaQuotes.filter(
              (quote) => quote !== randomQuote
            )
            const newQuote =
              availableQuotes[
                Math.floor(Math.random() * availableQuotes.length)
              ]
            setRandomQuote(newQuote)
          }}
          className="rounded-lg bg-primary-500 px-8 py-3 font-semibold text-black shadow-lg transition-colors duration-200 hover:bg-primary-600 hover:shadow-xl"
          aria-label="Get another Yoda quote"
        >
          Another Quote
        </button>
      </div>

      {/* Additional Help Text */}
      <div className="mt-8 max-w-lg">
        <p className="text-sm text-gray-800">
          The page you&apos;re looking for doesn&apos;t exist. Use the
          navigation above to find what you need, or return to our homepage to
          explore Compass Detroit 2026.
        </p>
      </div>
    </div>
  )
}

export default Yoda404
