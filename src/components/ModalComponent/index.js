import React from 'react'
import {Dialog, DialogContent, Slide} from '@material-ui/core'
import PropTypes from 'prop-types'
import {useStyles} from './styles.js'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function ModalComponent({children, open, setOpen}) {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="Drop-down-modal"
        aria-describedby="drop-down-modal-component">
        <DialogContent className={classes.children}>{children}</DialogContent>
      </Dialog>
    </>
  )
}

ModalComponent.propTypes = {
  children: PropTypes.any,
  open: PropTypes.any,
  setOpen: PropTypes.func,
  ref: PropTypes.any,
}

export default ModalComponent
