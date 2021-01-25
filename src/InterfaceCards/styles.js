import { makeStyles } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

export default makeStyles(theme => ({
  card: {
    backgroundColor: '#202022',
    width: '100%',
    borderRadius: '6px',
  },

  cardTitle: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '26px',
    padding: theme.spacing(2)
  },
  cardDescription: {
    padding: theme.spacing(2),
    fontSize: '15px',
  },

  cardLink: {
    fontFamily: '"Poppins", sans-serif',
    padding: theme.spacing(2),
    fontSize: '17px',
    color: '#F27F67',
  }, 
  cardPhoto: {
    objectFit: "cover",
    width: '100%',
    height: '300px'
  }
}));