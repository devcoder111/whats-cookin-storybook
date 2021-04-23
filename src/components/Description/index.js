import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useStyles} from './styles'
import Truncate from 'react-truncate-markup'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from '@material-ui/core'

function Description(props) {
  const classes = useStyles()
  const [isTruncated, setTruncated] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [lineCounter, setLineCounter] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const letters = props.expectedLettersInLine || 50
    let counter = 0
    props.text.split(/\r\n|\r|\n/).forEach(line => {
      counter += Math.ceil((line.length + 1) / letters)
    })
    setLineCounter(counter)
  }, [props.text, props.expectedLettersInLine])

  const handleTruncate = truncated => {
    if (isTruncated !== truncated) {
      setTruncated(truncated)
    }
  }
  const toggleLines = event => {
    event.preventDefault()
    if (lineCounter > props.maxLines) {
      setOpen(true)
    } else {
      setExpanded(!expanded)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = React.useRef(null)
  useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Truncate
        lines={!expanded && props.lines}
        ellipsis={
          (!props.Disable ? 
          <>
            ...
            <Link
              color="error"
              component="button"
              variant="body2"
              className={props.bodyClassName}
              onClick={toggleLines}>
              Show More
            </Link>
          </>:
          <>
          ...
          </>
          )
        }
        onTruncate={handleTruncate}>
        <div className={classes.Truncate}>{props.text}</div>
      </Truncate>
      {!isTruncated && expanded && (
        <span>
          <Link
            color="error"
            component="button"
            variant="body2"
            className={props.bodyClassName}
            onClick={toggleLines}>
            Show Less
          </Link>
        </span>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title">Description</DialogTitle>
        <DialogContent dividers={false}>
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
            className={classes.Truncate}>
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

Description.propTypes = {
  lines: PropTypes.number,
  maxLines: PropTypes.number,
  text: PropTypes.string,
  bodyClassName: PropTypes.string,
  expectedLettersInLine: PropTypes.number,
  Disable:PropTypes.bool
}

export default Description
