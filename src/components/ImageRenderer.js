import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {CircularProgress} from '@material-ui/core'
import common from '@material-ui/core/colors/common'
import grey from '@material-ui/core/colors/grey'
import BrokenImage from '@material-ui/icons/BrokenImage'

const ImageRenderer = (props) => {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [prevSrc, setPrevSrc] = useState(null)
  const [animationDuration] = useState(
    props.animationDuration ? props.animationDuration : 3000
  )
  const [aspectRatio] = useState(props.aspectRatio ? props.aspectRatio : 1)
  const [color] = useState(props.color ? props.color : common.white)
  const [cover] = useState(props.cover ? props.cover : true)
  const [disableError] = useState(
    props.disableError ? props.disableError : false
  )
  const [disableSpinner] = useState(
    props.disableSpinner ? props.disableSpinner : false
  )
  const [disableTransition] = useState(
    props.disableTransition ? props.disableTransition : false
  )
  const [errorIcon] = useState(
    props.errorIcon ? (
      props.errorIcon
    ) : (
      <BrokenImage style={{width: 48, height: 48, color: grey[399]}} />
    )
  )
  const [iconContainerStyle] = useState(
    props.iconContainerStyle ? props.iconContainerStyle : null
  )
  const [imageStyle] = useState(props.imageStyle ? props.imageStyle : null)
  const [loading] = useState(
    props.loading ? (
      props.loading
    ) : (
      <CircularProgress color="primary" size={48} />
    )
  )
  const [onClick] = useState(props.onClick ? props.onClick : null)
  const [style] = useState(props.style ? props.style : null)
  

  useEffect(() => {
    if (prevSrc !== props.src ) {
      setPrevSrc(props.src)
    }
  }, [props.src])


  const imageTransition = !disableTransition && {
    opacity: loaded ? 1 : 0,
    filterBrightness: loaded ? 100 : 0,
    filterSaturate: loaded ? 100 : 20,
    transition: `
      filterBrightness ${
        animationDuration * 0.75
      }ms cubic-bezier(0.4, 0.0, 0.2, 1),
      filterSaturate ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1),
      opacity ${animationDuration / 2}ms cubic-bezier(0.4, 0.0, 0.2, 1)
    `,
  }

  const handleLoadImage = e => {
    setError(false)
    setLoaded(true)
    if (props.onLoad) {
      props.onLoad(e)
    }
  }

  const handleImageError = e => {
    if (props.src) {
      setError(true)
      if (props.onError) {
        props.onError(e)
      }
    }
  }

  const styles = {
    root: {
      backgroundColor: color,
      paddingTop: `calc(1 / ${aspectRatio} * 100%)`,
      position: 'relative',
      ...style,
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      objectFit: cover ? 'cover' : 'inherit',
      top: 0,
      left: 0,
      ...imageTransition,
      ...imageStyle,
    },
    iconContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      ...iconContainerStyle,
    },
  }

  return (
    <div style={styles.root} onClick={onClick}>
      <img
        onLoad={e => handleLoadImage(e)}
        src={prevSrc}
        style={styles.image}
        onError={e => handleImageError(e)}
      />
      <div style={styles.iconContainer}>
        {!disableSpinner && !loaded && !error && loading}
        {!disableError && error && errorIcon}
      </div>
    </div>
  )
}
ImageRenderer.propTypes = {
  animationDuration: PropTypes.number,
  aspectRatio: PropTypes.number,
  cover: PropTypes.bool,
  color: PropTypes.string,
  disableError: PropTypes.bool,
  disableSpinner: PropTypes.bool,
  disableTransition: PropTypes.bool,
  errorIcon: PropTypes.node,
  iconContainerStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  loading: PropTypes.node,
  onClick: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default ImageRenderer
