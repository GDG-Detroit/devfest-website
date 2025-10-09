import PropTypes from 'prop-types'

const ResponsiveImage = ({
  webpSrc,
  pngSrc,
  webpSrcSet,
  pngSrcSet,
  sizes,
  alt,
  className = '',
  ...props
}) => {
  const finalAlt = alt ?? 'Michigan DevFest 2025 event logo'

  // Use srcSet if provided, otherwise fall back to single src
  const webpSrcSetValue = webpSrcSet || webpSrc
  const pngSrcSetValue = pngSrcSet || pngSrc

  return (
    <picture>
      <source srcSet={webpSrcSetValue} type="image/webp" sizes={sizes} />
      <img
        src={pngSrc}
        srcSet={pngSrcSetValue}
        sizes={sizes}
        alt={finalAlt}
        className={className}
        {...props}
      />
    </picture>
  )
}

ResponsiveImage.propTypes = {
  webpSrc: PropTypes.string.isRequired,
  pngSrc: PropTypes.string.isRequired,
  webpSrcSet: PropTypes.string,
  pngSrcSet: PropTypes.string,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
}

export default ResponsiveImage
