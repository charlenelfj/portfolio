import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  jobTitle: {
    fontSize: '30px',
    fontFamily: '"Poppins", sans-serif',
    marginBottom: theme.spacing(1.5)
  },
  companyName: {
    fontSize: '17px',
    fontFamily: '"Poppins", sans-serif',
    marginBottom: theme.spacing(1.5),
    color: '#F27F67'

  },
  projectDesc: {
    lineHeight: '1.6',
    marginBottom: theme.spacing(3)
  },
  project: {
    marginBottom: theme.spacing(10)
  },
  jobEntry: {
    marginBottom: theme.spacing(5)
  },
  jobDescList: {
    paddingLeft: theme.spacing(2)
  },
  jobDescItem: {
    marginBottom: theme.spacing(0.7)
  }
}));