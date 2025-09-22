import PropTypes from 'prop-types'

const ResponsiveImage = ({
  webpSrc,
  pngSrc,
  alt,
  className = '',
  ...props
}) => {
  const finalAlt = alt ?? 'Michigan DevFest 2025 event logo'
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={pngSrc} alt={finalAlt} className={className} {...props} />
    </picture>
  )
}

ResponsiveImage.propTypes = {
  webpSrc: PropTypes.string.isRequired,
  pngSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

export default ResponsiveImage
