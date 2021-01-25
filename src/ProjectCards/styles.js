import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  projectTitle: {
    fontSize: '30px',
    fontFamily: '"Poppins", sans-serif',
    marginBottom: theme.spacing(1.5)
  },
  projectDesc: {
    lineHeight: '1.6',
    marginBottom: theme.spacing(3)
  },
  project: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    },
  },
  githubLink: {
    fontSize: '18px',
    color: '#F27F67',
    fontFamily: '"Poppins", sans-serif',
  }
}));