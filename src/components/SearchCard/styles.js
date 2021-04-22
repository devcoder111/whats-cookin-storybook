import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles({
  image: {
    minHeight: '200px',
    maxHeight: '200px',
    minWidth: '200px',
    maxWidth: '200px',
    cursor: 'pointer',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    padding: '25px',
    display: 'flex',
    maxWidth: '900px',
  },
  headline: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '37px',
    paddingBottom: '6px',
    cursor: 'pointer',
    '&:hover': {
      color: '#a3330f',
    },
  },
  subHeadline: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    letterSpacing: '0.15px',
    paddingBottom: '11px',
  },
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.5px',
  },
  content: {
    paddingLeft: '30px',
  },
})
