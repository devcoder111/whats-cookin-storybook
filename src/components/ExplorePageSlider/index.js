import React from "react";
import { useStyles } from "./styles.js";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleCard from "../CircleCard";

function NextArrow({ className, style, onClick, ...props }) {
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style, display: "block", color: "gray", fontSize: "50px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ className, style, onClick, ...props }) {
  return (
    <ArrowBackIosIcon
      style={{
        ...style,
        display: "block",
        color: "gray",
        fontSize: "50px",
      }}
      className={className}
      onClick={onClick}
    />
  );
}
function ExplorePageSlider({ circles, setPinAsCenter, ...props }) {
  const classes = useStyles();
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
  };

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
  );
}

NextArrow.propTypes = {
  /**
   * Prop to allow passing a classname to the component
   */
  className: PropTypes.any,
  /**
   * Object to directly pass style props
   */
  style: PropTypes.object,
  /**
   * function passed to handle the click
   */
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  /**
   * Prop to allow passing a classname to the component
   */
  className: PropTypes.any,
  /**
   * Object to directly pass style props
   */
  style: PropTypes.object,
  /**
   * function passed to handle the click
   */
  onClick: PropTypes.func,
};
ExplorePageSlider.propTypes = {
  /**
   * Circle object should contain name, image, purpose with name mandatory
   */
  circle: PropTypes.object,
  /**
   * function to set the pin that is currently hovered to center. Passed to circle card.
   */
  setPinAsCenter: PropTypes.func,
  /**
   * Array of circle objects
   */
  circles: PropTypes.any,
};

export default ExplorePageSlider;
