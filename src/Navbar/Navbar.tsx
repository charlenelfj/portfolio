import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';


const Navbar: React.FunctionalComponent<{}> = () => {

  const classes = useStyles();

  const renderNavBar = () => {

  }

  return (
    <Grid>
      {renderNavBar()}
    </Grid>
  )
}

export default Navbar;