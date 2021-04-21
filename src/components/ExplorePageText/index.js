import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Typography} from '@material-ui/core'

function ExplorePageText(props) {
  return (
    <Grid style={props.style}>
      <Typography align="left" variant="h5">
        In <b style={{color: '#c04c26'}}>Whats Cookin&apos;</b> we aim to build
        stronger local and international community ties by connecting people to
        share food, language practices, music and more!
      </Typography>
      <br />
      <Typography align="left" variant="h5">
        To start, join a <b style={{color: '#c04c26'}}>join a circle!</b>
      </Typography>
    </Grid>
  )
}

ExplorePageText.propTypes = {
  style: PropTypes.object,
}

export default ExplorePageText
