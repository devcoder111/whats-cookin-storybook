import React, {useState} from 'react'
import {Typography, Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'
import ImageRenderer from '../../components/ImageRenderer/ImageRenderer'
import {useStyles} from './styles.js'
import PropTypes from 'prop-types'
import Dollar from './dollar'
import Heart from './Heart'
import Description from '../Description'

function OfferItemCard(props) {
  const classes = useStyles()
  const {id,title,photo,onClick,date,time,by,member_id,active_circle,Des} = props
 
  return (
    <Paper className={classes.root}>
      <Link to={`offeritem/${id}`} onClick={() => onClick()}>
        <div >
        <ImageRenderer style={{padding:"5px"}} imageStyle={{borderRadius:"16px",
        minHeight: '204px',minWidth: '354px',
        maxHeight: '204px',maxWidth: '354px',position: "relative"}} src={photo} />
        </div>
      </Link>
      <div>
        <span className={classes.line1}>
          <Typography className={classes.headline} component="h2">{title}</Typography>
          <span>
            <Heart />
            <span className={classes.icon}>
              <Dollar/>
            </span>
          </span>
        </span>
        <span className={classes.line2}>
          <Typography className={classes.subheadline} component="h3">
            {date}
          </Typography>
          <Typography className={classes.subheadline} component="h3">
            {time}
          </Typography>
        </span>
        <span className={classes.line2}>
        <Typography className={classes.subheadline} component="h3">
          By:{' '}
          <Link className={classes.link}
            to={{
              pathname: `/memberprofile/${member_id}`,
              state: {
                memberId: member_id,
                activeCircleId: active_circle,
              },
            }}>
            {by}
          </Link>
        </Typography>
        </span>
        <span className={classes.line2}>
        {(Des &&
        <Typography className={classes.subheadline} component="h3">
          <Description text={Des} lines={2} Disable={true}/>
        </Typography>)}
        </span>
      </div>
    </Paper>
  )
}

OfferItemCard.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  by: PropTypes.string,
  Des:PropTypes.string,
}

export default OfferItemCard
