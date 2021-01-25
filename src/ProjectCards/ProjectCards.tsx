import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

interface ProjectProps {
  projectName: string
}

const ProjectCards: React.FunctionalComponent<ProjectProps> = (props) => {

  const classes = useStyles();

  const renderProjectCards = (projectName) => {
    switch (projectName) {
      case 'fyp':
        return (
          <Grid container direction="column" className={classes.project}>
            <Grid item>
              <Typography variant="h4" className={classes.projectTitle}>Survey & Data Visualization Application</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1" className={classes.projectDesc}>
                Created using the MERN stack, this web-based application is created by Charlene as part of her Final Year Project requirements, 
                in collaboration with WeBank. This application helps user to create a customized survey, whereby users can select questions
                from a pre-defined question bank and sending the survey to potential respondents. Users can also view the survey results in the 
                survey analysis page when there's a substantial amount of results collated.
              </Typography>
            </Grid>

            <Grid item>
              <Link classes={{root: classes.githubLink}} href="https://drive.google.com/drive/folders/1S09lC7vJaOKstvaJO90trxs-e6k_WLys?usp=sharing">Photos</Link>
            </Grid>
          </Grid>
        )
      
      case 'ir':
        return (
          <Grid container direction="column" className={classes.project}>
            <Grid item>
              <Typography variant="h4" className={classes.projectTitle}>Information retrieval</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1" className={classes.projectDesc}>
                This is a web application created to fufill the requirements of a module taken in school. Purpose of this application is to serve as 
                a mini search engine, whereby users can type in any keywords and the application will return relevant results, in the form of instagram captions and images that are retrieved from various news profiles.
                In this project, Charlene is reponsible for drafting out the wireframes, building the application using Django, as well as making query functions calls to Apache Solr.
              </Typography>
            </Grid>

            <Grid item>
              <Link href="https://github.com/charlenelfj/cz4034/" classes={{root: classes.githubLink}}>Github</Link>
            </Grid>
          </Grid>
        )

      case 'slack': 
        return (
          <Grid container direction="column" className={classes.project}>
            <Grid item>
              <Typography variant="h4" className={classes.projectTitle}>Slack UI Components Exploration</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1" className={classes.projectDesc}>
                This is a Slack application built to explore the various user interface components that are offered by Slack
                in their existing APIs, through a simple form format. Some of the components tested out are datepicker, checkboxes etc.
              </Typography>
            </Grid>

            <Grid item>
              <Link href="https://github.com/charlenelfj/slack-ui" classes={{root: classes.githubLink}}>Github</Link>
            </Grid>
          </Grid>
        )
    }
  }
  return (
    <Grid>
      {renderProjectCards(props.projectName)}
    </Grid>
  )
}

export default ProjectCards;