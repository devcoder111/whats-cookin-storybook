import React from 'react'
import {useStyles} from './styles.js'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import {Grid} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CircleCard from '../CircleCard'

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{...style, display: 'block', color: 'gray', fontSize: '50px'}}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <ArrowBackIosIcon
      style={{
        ...style,
        display: 'block',
        color: 'gray',
        fontSize: '50px',
      }}
      className={className}
      onClick={onClick}
    />
  )
}
function ExplorePageSlider(props) {
  const classes = useStyles()
  const {circles, setPinAsCenter} = props
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <NextArrow className={classes.sliderArrow} />,
    prevArrow: <PrevArrow className={classes.sliderArrow} />,
    // beforeChange: () => {
    //   if (currentIndex === 2) {
    //     showFormDialog()
    //   } else {
    //     setcurrentIndex(currentIndex + 1)
    //   }
    // },
  }

  return (
    <Grid className={classes.wrap}>
      <Slider {...settings}>
        {circles.map((circle, index) => (
          <CircleCard
            circle={circle}
            key={index}
            setPinAsCenter={setPinAsCenter}
          />
        ))}
      </Slider>
    </Grid>
  )
}

NextArrow.propTypes = {
  className: PropTypes.any,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

PrevArrow.propTypes = {
  className: PropTypes.any,
  style: PropTypes.object,
  onClick: PropTypes.func,
}
ExplorePageSlider.propTypes = {
  circle: PropTypes.any,
  setPinAsCenter: PropTypes.func,
  circles: PropTypes.any,
}

export default ExplorePageSlider
