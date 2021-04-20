import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {useStyles} from './styles.js'

function ExplorePageText(props) {
  const classes = useStyles()
  return (
    <Grid>
      <Typography align="left" variant="h3">
        In Whats Cookin we aim to build stronger local and international
        community ties by connecting people to share food, language practices,
        music and more!
      </Typography>
    </Grid>
  )
}

export default ExplorePageText
