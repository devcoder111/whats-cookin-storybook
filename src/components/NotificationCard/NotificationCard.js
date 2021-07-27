import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, Box, Typography, Divider} from '@material-ui/core'
import moment from 'moment'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  header: {
    fontSize: '28px',
    color: '#EC7545',
  },
  subHeader: {
    color: '#111114',
    fontSize: '24px',
  },
  subHeaderBold: {
    color: '#111114',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  body: {
    color: 'rgba(0, 0, 0, 0.72)',
    fontSize: '24px',
  },
  date: {
    fontSize: '18px',
    color: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: '15px',
  },
})

const NotificationCard = function ({
  notify_type,
  offer_id,
  notify_date,
  text,
  offer_title,
}) {
  const classes = useStyles()
  const [header, setHeader] = useState('')
  const [subHeader, setSubHeader] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    let split = text.split(':')
    if (notify_type === 'offer') {
      setHeader('New Offer : ')
      setSubHeader(split[1])
      setBody('')
    } else if (notify_type === 'conversation') {
      setHeader(split[0])
      setSubHeader(split[1])
      const message = split[2]
      const n = 200 - split[1].length
      setBody(message.length > n ? message.substr(0, n - 1) + '...' : message)
    } else if (notify_type === 'grant' && offer_title) {
      setHeader('your wish has filled : ')
      setSubHeader(offer_title)
      setBody('')
    } else {
      setHeader('')
      setSubHeader(text)
      setBody('')
    }
  }, [text, notify_type, offer_title])

  return (
    <Box pt="40px">
      <Link to={`/offer/${offer_id}`}>
        <Typography
          display={notify_type === 'conversation' ? 'initial' : 'inline'}
          className={classes.header}>
          {header}
        </Typography>
        <Typography
          display="inline"
          className={
            notify_type === 'conversation'
              ? classes.subHeader
              : classes.subHeaderBold
          }>
          {subHeader}
        </Typography>
        <Typography display="inline" className={classes.body}>
          {body}
        </Typography>
      </Link>
      <Typography className={classes.date}>
        {moment(notify_date).fromNow()}
      </Typography>
      <Divider />
    </Box>
  )
}

NotificationCard.propTypes = {
  notify_type: PropTypes.oneOf(['conversation', 'offer', 'grant']).isRequired,
  offer_id: PropTypes.number.isRequired,
  notify_date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  offer_title: PropTypes.string,
}

export default NotificationCard
