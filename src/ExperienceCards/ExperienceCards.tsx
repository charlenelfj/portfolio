import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import tictus from '../images/tictus.png';
import fyp from '../images/fyp.png';
import profile from '../images/profile.jpg';

interface uiProjectProps {
  projectName: string
}

const ExperienceCards: React.FunctionComponent<uiProjectProps> = (props) => {
  const classes = useStyles();
  
  return (
    <Grid container variant="column" style={{marginTop: '2.5vh'}}>
      <Grid container direction="column" className={classes.jobEntry}>
        <Grid item>
          <Typography className={classes.jobTitle} variant="h4">Software Developer Intern</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4" className={classes.companyName}>
            Hobnob.ai &#8226; Aug 2020 - Dec 2020
          </Typography>
        </Grid>

        <Grid item>
          <ul className={classes.jobDescList}>
            <li className={classes.jobDescItem}>Designed and implemented wireframes for front end development using React JS and Material-UI</li>
            <li className={classes.jobDescItem}>Contributed to the development of APIs in the back end</li>
            <li className={classes.jobDescItem}>Implemented OTP function for verification using Twilio API</li>
            <li className={classes.jobDescItem}>Built a React application that serves as a Chrome Extension and as an application add-on in Microsoft Outlook & Microsoft Teams</li>
          </ul>
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.jobEntry}>
        <Grid item>
          <Typography className={classes.jobTitle} variant="h4">Web Developer Intern</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4" className={classes.companyName}>
            Invesso Pte Ltd &#8226; May 2019 - Aug 2019
          </Typography>
        </Grid>

        <Grid item>
          <ul className={classes.jobDescList}>
            <li className={classes.jobDescItem}>Understand customer requirements and implement changes via meeting with clients</li>
            <li className={classes.jobDescItem}>Designed and built website layouts with page builders in WordPress and ensure page responsiveness</li>
            <li className={classes.jobDescItem}>Designed banners, headers and content using Adobe Photoshop</li>
          </ul>
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.jobEntry}>
        <Grid item>
          <Typography className={classes.jobTitle} variant="h4">Technical Support Intern</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4" className={classes.companyName}>
            Terumo BCT (Asia Pacific) Ltd &#8226; Sept 2016 - Feb 2017
          </Typography>
        </Grid>

        <Grid item>
          <ul className={classes.jobDescList}>
            <li className={classes.jobDescItem}>Created a spare parts inventory management web application in php for the technicians to increase efficiency in logging data</li>
            <li className={classes.jobDescItem}>Programmed functionalities including: Login and logout functions, pagination function, search and sort function, create, edit and delete data.</li>
            <li className={classes.jobDescItem}>Assisted technicians to perform maintenance on customer’s products.</li>
          </ul>
        </Grid>
      </Grid>


    </Grid>
  )

}

export default ExperienceCards;