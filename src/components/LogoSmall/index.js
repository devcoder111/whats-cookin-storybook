import React from 'react'
import {makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'

function LogoSmall({style}) {
  const useStyles = makeStyles({
    base: {
      height: '42px',
      width: '42px',
      ...style,
    },
  })
  const classes = useStyles()

  return <img src="../logo-icon.png" alt="" className={classes.base} />
}
LogoSmall.propTypes = {
  style: PropTypes.object,
}

export default LogoSmall
