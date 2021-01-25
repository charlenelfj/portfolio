import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: '#000000',
    height: '100vh',
    width: '100vw',
    color: '#FFFFFF',
    overflowX: 'hidden'
  },

  header: {
    fontFamily: '"Poppins", sans-serif',
    flex: '1', 
    marginBottom: theme.spacing(3)
  },

  navigation: {
    // backgroundColor: '#F77448',
    display: 'block',
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
    },
    height: '100vh',
    position: 'relative'
  },
  contentGrid: {
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      height: '100vh',
      overflowY: 'scroll',
      padding: theme.spacing(10),
    },
    display: 'block',
  },
  navButton: {
    padding: 0,
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  navLink: {
    fontSize: '27px',
    fontFamily: '"Poppins", sans-serif',
    textTransform: 'uppercase',
    display: 'inline',
    alignItems: 'center',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to right top, #ff4069, #ff6964, #fe8a67, #f9a675, #f5bf8c)',
      transition: 'transform 0.8s',
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      height: '5px'
    },
    '&:hover': {
      '&:after': {
        transformOrigin: 'bottom left',
        transform: 'scaleX(1)',
      }
    }
  },
  activeNavLink: {
    fontSize: '27px',
    fontFamily: '"Poppins", sans-serif',
    textTransform: 'uppercase',
    display: 'inline',
    alignItems: 'center',
    position: 'relative',
    color: 'black',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to right top, #ff4069, #ff6964, #fe8a67, #f9a675, #f5bf8c)',
      transition: 'transform 0.8s',
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      height: '5px'
    },
    '&:hover': {
      '&:after': {
        transformOrigin: 'bottom left',
        transform: 'scaleX(1)',
      }
    }
  },
  aboutText: {
    marginBottom: theme.spacing(4)
  },
  expHeader: {
    fontFamily: '"Poppins", sans-serif',
  },
  contactLink: {
    fontFamily: '"Poppins", sans-serif',
    marginLeft: theme.spacing(1),
    color: "#F27F67",
    fontSize: "22px",
    padding: 0,
    wordBreak: 'break-all'
  },
  contactField: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  icon: {
    position: 'relative',
    top: '3px'
  }
}));