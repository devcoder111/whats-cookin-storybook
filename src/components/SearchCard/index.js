import React from 'react'
import {Typography, Paper} from '@material-ui/core'
import ImageRenderer from '../ImageRenderer/ImageRenderer'
import Description from '../Description'
import {useStyles} from './styles.js'
import PropTypes from 'prop-types'

function OfferItemCard(props) {
  const classes = useStyles()
  const {photo, onClick, headline, subHeadline, body} = props

  return (
    <Paper elevation={0}>
      <div className={classes.root}>
        <div className={classes.image}>
          <ImageRenderer
            onClick={onClick}
            src={photo}
            imageStyle={{borderRadius: '10px'}}
          />
        </div>
        <div className={classes.details}>
          <div className={classes.content}>
            <Typography
              component="h2"
              onClick={onClick}
              className={classes.headline}>
              {headline}
            </Typography>
            <Typography component="h3" className={classes.subHeadline}>
              {subHeadline}
            </Typography>
            <div className={classes.body}>
              <Description lines={5} maxLines={5} bodyClassName={classes.body} text={body}></Description>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

OfferItemCard.propTypes = {
  photo: PropTypes.string,
  onClick: PropTypes.func,
  headline: PropTypes.string,
  subHeadline: PropTypes.string,
  body: PropTypes.string,
}

export default OfferItemCard
