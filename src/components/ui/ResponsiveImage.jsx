/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types'

const ResponsiveImage = ({ 
  webpSrc, 
  pngSrc, 
  alt = 'Michigan DevFest 2025 event logo', 
  className = '', 
  ...props 
}) => {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={pngSrc} 
        alt={alt || 'Michigan DevFest 2025 event logo'} 
        className={className} 
        {...props} 
      />
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
