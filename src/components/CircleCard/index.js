import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useStyles } from "./styles.js";
import ImageRenderer from "../ImageRenderer/ImageRenderer";

function CircleCard({ circle, handleClick, mouseIn, ...props }) {
  const classes = useStyles();
  const [image, setImage] = useState(
    "https://fermentedconnections.com/wp-content/uploads/2018/07/food.png"
  );
  useEffect(() => {
    setImage(
      circle.image
        ? circle.image
        : "https://fermentedconnections.com/wp-content/uploads/2018/07/food.png"
    );
  }, [circle]);
  return (
    <Card className={classes.root} onMouseEnter={mouseIn}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            {circle.name}
          </Typography>
        </CardContent>
        <ImageRenderer
          src={image}
          imageStyle={{
            borderRadius: "50%",
            height: "90%",
          }}
          color={"#F6F6F6"}
        />
      </CardActionArea>
    </Card>
  );
}

CircleCard.propTypes = {
  /**
   * The circle object (should include name, image and purpose)
   */
  circle: PropTypes.object,
  /**
   * Function to handle clicking on the area (await joinCircle(circle.name, user.token);)
   */
  handleClick: PropTypes.func,
  /**
   * Sets map location to hovered circle if (circle.location !== null) {
  //     setPinAsCenter({ lat: circle.location.lat, lng: circle.location.lng });
  //   }
   */
  mouseIn: PropTypes.func,
};
CircleCard.defaultProps = {
  circle: null,
  handleClick: undefined,
  mouseIn: undefined,
};

export default CircleCard;
