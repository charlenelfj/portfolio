import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import InterfaceCards from './InterfaceCards/InterfaceCards';
import ProjectCards from './ProjectCards/ProjectCards';
import IllustrationsCards from './IllustrationCards/IllustrationCards';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExperienceCards from './ExperienceCards/ExperienceCards';
import mongoicon from './images/mongodb.png';
import pythonicon from './images/python.png';
import jsicon from './images/js.png';
import nodeicon from './images/node.png';
import htmlicon from './images/html.png';
import adobexdicon from './images/adobexd.png';
import psicon from './images/photoshop.png';
import cssicon from './images/css.png';
import reacticon from './images/react.png';

const Home: React.FunctionComponent<{}> = () => {
  const [contentType, setContentType] = useState('about');
  const classes = useStyles();
  const theme = useTheme();
  const uiTypes = ['tictus', 'fyp', 'profile'];
  const projTypes = ['fyp', 'ir', 'slack'];

  // styles applied to screen sizes from 'x' and up
  // if true -> min-width = 960px or larger -> row
  // else we do columns 
  const rowEnabled = useMediaQuery(theme.breakpoints.up('md'));

  // if true -> min-width = 1280px or larger -> 4 grids
  // else we do 12 grids
  const noOfGrids = useMediaQuery(theme.breakpoints.up('md'));

  theme.typography.h2 = {
    fontSize: '40px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
  }

  const changeComp = (compName: string) => {
    setContentType(compName)
  }

  const contentComponent = () => {
    switch(contentType) {
      case 'about':
        return (
          <Grid container direction="column">
            <Typography 
              className={classes.header}
              variant="h2"
              theme={theme}
            >
              Hello!
            </Typography>

            <Grid item className={classes.aboutText}>
              <Typography variant="body1">
                My name is Charlene and I'm a fresh graduate from Nanyang Technological University, Singapore, majoring in Computer Science. I am interested in building applications, especially 
                so when it comes to the front-end aspect where I'm motivated to transform wireframes into aesthetically pleasing, 
                useable components that we are all familiar with. 
              </Typography>
            </Grid>

            <Grid>
              <Grid item className={classes.aboutText}>
                <Typography variant="body1">
                  I'm currently searching for an opportunity to work with a Javascript framework and my goal is to work on an application
                  that is powered with some form of machine learning or data analytics. 
                </Typography>
              </Grid>

              <Grid item className={classes.aboutText}>
                <Typography variant="body1">
                  In my free time, I like to make application prototypes,
                  building applications that are interesting and making digital illustrations, while sipping on a cup of tea.
                </Typography>
              </Grid>

              <Grid item className={classes.aboutText}>
              <Typography variant="body1">
                If you want to get in touch, feel free to head to the contact section! 
              </Typography>
              </Grid>
            </Grid>

            <Grid item style={{paddingBottom: '20px'}}>
              <Typography variant="h4" className={classes.skillsHeader}>Skills</Typography>

              <Grid container variant="column" spacing={3}>
                <Grid item>
                  <img src={htmlicon} height="65" alt="html"/>
                </Grid>

                <Grid item>
                  <img src={cssicon} height="65" alt="css" />
                </Grid>

                <Grid item>
                  <img src={pythonicon} height="65" alt="python" />
                </Grid>

                <Grid item>
                  <img src={jsicon} height="65" alt="js"/>
                </Grid>

                <Grid item>
                  <img src={reacticon} height="65" alt="react" />
                </Grid>

                <Grid item>
                  <img src={nodeicon} height="65" alt="node" />
                </Grid>

                <Grid item>
                  <img src={mongoicon} height="65" alt="mongo" />
                </Grid>

                <Grid item>
                  <img src={adobexdicon} height="65" alt="adobexd" />
                </Grid>
                <Grid item>
                  <img src={psicon} height="65" alt="ps" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      case 'projects':
        return (
          <Grid container direction="column" style={{marginTop: '20px'}}>
            {projTypes.map((value, i) => {
              return (
                <ProjectCards projectName={value} key={i}/> 
              )
            })}
          </Grid>
        )
      case 'ui':
        return (
          <Grid container variant="row" justify={rowEnabled ? "flex-start" : "center"} spacing={8} style={{marginTop: '0vh'}}>
            {uiTypes.map((value, i) => {
              return (
                <Grid item xs={noOfGrids ? 6 : 12} key={i}>
                  <InterfaceCards projectName={value}/>
                </Grid>
              )
            })}
          </Grid>
        )

      case 'illustrations':
        return (
          <IllustrationsCards />
        )

      case 'experiences':
        return (
          <Grid>
            <ExperienceCards />
          </Grid>
        )

      case 'contact':
        return (
          <Grid container direction="column" style={{marginTop: '2.5vh'}}>
            <Grid item className={classes.contactField}>
              <MailIcon classes={{root: classes.icon}}/>
              <Link className={classes.contactLink} href="mailto:charlenelfj@gmail.com">charlenelfj@gmail.com</Link>
            </Grid>


            <Grid item className={classes.contactField}>
              <GitHubIcon classes={{root: classes.icon}}/>
              <Link className={classes.contactLink} href="https://github.com/charlenelfj">Github</Link>
            </Grid>

            <Grid item className={classes.contactField}>
              <LinkedInIcon classes={{root: classes.icon}}/>
              <Link className={classes.contactLink} href="https://www.linkedin.com/in/charlene-lim-676773149/">LinkedIn</Link>
            </Grid>
          </Grid>
        )
        
    }
  }

  return (
    <div className={classes.root}>
      <Grid 
        container
        direction={rowEnabled ? "row" : "column"}
        justify="center"
        alignItems={rowEnabled ? "flex-start" : "flex-start"}
      >
        <Grid item xs={noOfGrids ? 4 : 12} className={classes.navigation}>
          <Grid container direction="column" 
          style={{
            width: '100%', 
            display: 'flex'
          }}>
          <Typography 
            className={classes.header}
            variant="h2"
            theme={theme}
          >
            Charlene Lim
          </Typography>

          <Grid container direction="column">
            <List>
              <ListItem button onClick={() => changeComp('about')} classes={{button:classes.navButton}}>
                <ListItemText 
                  classes={contentType === "about" ? {primary:classes.activeNavLink} : {primary: classes.navLink}}
                  primary="01 About me"
                ></ListItemText>
              </ListItem>

              <ListItem button onClick={() => changeComp('projects')} classes={{button:classes.navButton}}>
                <ListItemText 
                  classes={contentType === "projects" ? {primary:classes.activeNavLink} : {primary: classes.navLink}}
                  primary="02 Projects"
                ></ListItemText>
              </ListItem>

              <ListItem button onClick={() => changeComp('experiences')} classes={{button:classes.navButton}}>
                <ListItemText 
                  classes={contentType === "experiences" ? {primary:classes.activeNavLink} : {primary: classes.navLink}}
                  primary="03 Experiences"
                ></ListItemText>
              </ListItem>

              <ListItem button onClick={() => changeComp('ui')} classes={{button:classes.navButton}}>
                <ListItemText 
                  classes={contentType === "ui" ? {primary:classes.activeNavLink} : {primary: classes.navLink}}
                  primary="04 UI Designs"
                ></ListItemText>
              </ListItem>

              <ListItem button onClick={() => changeComp('illustrations')} classes={{button:classes.navButton}}>
                <ListItemText 
                  classes={contentType === "illustrations" ? {primary:classes.activeNavLink} : {primary: classes.navLink}}
                  primary="05 Illustrations"
                ></ListItemText>
              </ListItem>

              <ListItem button onClick={() => changeComp('contact')} classes={{button:classes.navButton}}>
                <ListItemText 
                  classes={contentType === "contact" ? {primary:classes.activeNavLink} : {primary: classes.navLink}}
                  primary="06 Contact"
                ></ListItemText>
              </ListItem>
              
            </List>
          </Grid>
          </Grid>
        </Grid>

        <Grid item xs={noOfGrids ? 8 : 12} className={classes.contentGrid}>
          {contentComponent()}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;