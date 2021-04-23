import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles({
  root: {
    //height:"500px",
    width: '374px',
    minHeight: '300px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  line1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px 15px',
  },
  line2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2px 15px',
  },
  icon: {
    paddingLeft: '8px',
  },
  iconDollar: {
    padding: '0px 5px 0px 12px',
  },
  image: {
    padding: '5px',
  },
  headline: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  subheadline: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  link: {
    textDecoration: 'underline',
  },

  clickable: {
    cursor: 'pointer',
  },

  heart: {
    fill: '#ff0000',
    animation: '$pulse 1s ease',
  },

  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      fill: '#000',
    },
    '50%': {
      transform: 'scale(1.3)',
      fill: '#FFA07A',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
})
