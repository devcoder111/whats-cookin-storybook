import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles({
  root:{
    //height:"500px",
    width:"364px",
    minHeight:'300px',
    padding:"5px",
    display:"flex",
    flexDirection: 'column',
    alignContent: 'flex-start' 
  },
  line1:{
    display:"flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:"5px 15px"
  },
  line2:{
    display:"flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:"2px 15px"
  },
  icon:{
    paddingLeft:"8px"
  },
  image:{
    padding:"5px"
  },
  headline:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  subheadline:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  link:{
    textDecoration:"underline"
  }
})
