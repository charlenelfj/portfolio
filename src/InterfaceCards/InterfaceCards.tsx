import React, { useState } from 'react';
import { Typography, Link } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import tictus from '../images/tictus.png';
import fyp from '../images/fyp.png';
import profile from '../images/profile.png';

interface uiProjectProps {
  projectName: string
}

const InterfaceCards: React.FunctionComponent<uiProjectProps> = (props) => {
  const classes = useStyles();

  const renderContent = (projectName: string) => {
    switch(projectName) {
      case 'tictus':
        return (
          <Grid container variant="column" 
            className={classes.card}
          >
            <img src={tictus} alt="tictus" className={classes.cardPhoto}/>

            <Typography variant="h4" className={classes.cardTitle}>Tictus - Planner App</Typography>

            <Typography variant="body1" className={classes.cardDescription}>
              This is a home page of a planner web app called tictus, which includes a vertical sidebar for easy navigation, a weekly overview, task counter and a side calendar that displays the schedule for the day.
            </Typography>

            <Link className={classes.cardLink} href="https://xd.adobe.com/view/44d2cc7f-f2d3-45a4-a99d-bc0a792acb7c-1181/?fullscreen">Adobe XD</Link>

          </Grid>
        )

      case 'fyp':
        return (
          <Grid container variant="column" 
            className={classes.card}
          >
            <img src={fyp} width={400} height={300} alt="fyp" className={classes.cardPhoto}/>
            <Typography variant="h4" className={classes.cardTitle}>Dashboard Homepage</Typography>

            <Typography variant="body1" className={classes.cardDescription}>
              This is a mock design of the survey application as mentioned in the projects page, mainly made for Charlene's Final Year Project. 
            </Typography>

            <Link className={classes.cardLink} href="https://drive.google.com/file/d/1Co6LbrVzTj8jO_O4E6e6u1JLhMcseSPi/view">Google Drive</Link>

          </Grid>
          )

      case 'profile':
        return (
          <Grid container variant="column" 
          className={classes.card}
        >
          <img src={profile} width={400} height={300} alt="profile" className={classes.cardPhoto}/>
          <Typography variant="h4" className={classes.cardTitle}>User Profile Page - Mobile</Typography>

          <Typography variant="body1" className={classes.cardDescription}>
            This is an attempt in making an user's profile page that's seen on a mobile device. With the familiar profile details on the top, 
            it's followed by the use of tabs to condense information in a clean way.  
          </Typography>

          <Link className={classes.cardLink} href="https://drive.google.com/file/d/1g2Pr-iNk0InDZtv4W6w8Elx2_g1Hxvb3/view?usp=sharing" alt="profile">View full photo</Link>
          </Grid>
        )
    }

  }
  return (
    <Grid container variant="column">
      {renderContent(props.projectName)}
    </Grid>
  )

}

export default InterfaceCards;