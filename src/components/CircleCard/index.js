import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useStyles } from "./styles.js";
import ImageRenderer from "../ImageRenderer";
import { useUserContext } from "../../Utilities/context/userProvider.js";
import useJoinCircle from "../../Utilities/CustomHooks/useJoinCircle.js";

function CircleCard(props) {
  const classes = useStyles();
  const { circle, setPinAsCenter } = props;
  const [image, setImage] = useState(
    "https://fermentedconnections.com/wp-content/uploads/2018/07/food.png"
  );
  const { user } = useUserContext();
  const joinCircle = useJoinCircle();
  useEffect(() => {
    setImage(
      circle.image
        ? circle.image
        : "https://fermentedconnections.com/wp-content/uploads/2018/07/food.png"
    );
  }, [circle]);
  const mouseIn = () => {
    if (circle.location !== null) {
      setPinAsCenter({ lat: circle.location.lat, lng: circle.location.lng });
    }
  };
  const handleClick = async () => {
    await joinCircle(circle.name, user.token);
  };
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
  circle: PropTypes.any,
  setPinAsCenter: PropTypes.func,
  name: PropTypes.string,
};

export default CircleCard;
