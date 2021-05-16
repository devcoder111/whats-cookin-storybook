import React from 'react';
import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
  
function WCButton(props) {
  const {
    disabled,
    style,
    onClick,
    text,
  } = props
  
  const useStyles = makeStyles({
    root:{
      backgroundColor: '#BE4D2D',
      color: 'white',
      '&:hover':{
            backgroundColor: '#FFBF90'
      },
      ...style,
    },
    onTouch: {
        backgroundColor: '#F0A269'
    }
  })
  const classes = useStyles()

  
  return (
  <Button variant='contained' className={classes.root} disabled={disabled} onClick={onClick} TouchRippleProps={{classes: {child: classes.onTouch}}}>{text}</Button>
  )
}
WCButton.propTypes = {
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};
WCButton.defaultProps = {
  text: 'Sample'
};
export default WCButton
  