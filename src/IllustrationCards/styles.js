import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  photos: {
    [theme.breakpoints.down('md')]: {
      height: '150px',
      width: '100%'
    },
    height: '300px',
    width: '400px',
  }
}));