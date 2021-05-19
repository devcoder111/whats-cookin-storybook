import React from 'react';
import {Button, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
  
function WCButton(props) {
  const {
    disabled,
    style,
    onClick,
    text,
    type,
    icon,
    endIcon,
    size
  } = props
  
  const useStyles = makeStyles({
    root:{
      backgroundColor: '#BE4D2D',
      color: 'white',
      '&:hover':{
            backgroundColor: '#FFBF90'
      },
      '&:active':{
        boxShadow: 'inset 0px 0px 15px #c1c1c1'
      },
      ...style,
    },
    onTouch: {
        backgroundColor: '#F0A269',
    }
  })
  const classes = useStyles()

  
  return (
  <Button variant='contained' className={classes.root} disabled={disabled} onClick={onClick} TouchRippleProps={{classes: {child: classes.onTouch}}} type={type} endIcon={endIcon} size={size} >{icon}{text}</Button>
  )
}
WCButton.propTypes = {
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.func,
  endIcon: PropTypes.func,
  size: PropTypes.string
};
WCButton.defaultProps = {
  text: 'Sample'
};
export default WCButton
  
