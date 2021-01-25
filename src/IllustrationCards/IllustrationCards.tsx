import React from 'react';
import { Grid } from '@material-ui/core';
import header from '../images/header banner.png';
import full from '../images/full month.png';
import pattern from '../images/pattern.png'
import score from '../images/score.jpg'
import useStyles from './styles';

const IllustrationsCards: React.FunctionalComponents<{}> = () =>{
  const classes = useStyles();

  return (
    <Grid container variant="row" spacing={8} style={{marginTop: '10px'}}>
      <Grid item>
        <img src={header} className={classes.photos} height={300} alt="header"/>
      </Grid>

      <Grid item>
        <img src={full} className={classes.photos} height={300} alt="full"/>
      </Grid>

      <Grid item>
        <img src={pattern} className={classes.photos} height={300} alt="pattern"/>
      </Grid>

      <Grid item>
        <img src={score} className={classes.photos} height={300} alt="score"/>
      </Grid>
    </Grid>
  )
}

export default IllustrationsCards;