import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppNav from './Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      alignItems: 'center',
    },
  },
  job: {
      paddingTop: '30px'
  }
}))

const Resume = (props) => {

  const classes = useStyles();


  return (
    <div>
      <AppNav/>
      <Container className={classes.job}>
      <Container><h3>Yeah I have some Experience..</h3></Container>
      <Container className={classes.job}>
      <hr />
        <Row>
          <h5><b>Software Developer Intern (Remote) </b> | Amondial Capital 
          <h6>Singapore</h6><h6>Jan 2020 - Present</h6></h5>
        </Row>
        
        <ul>
          <li>
            I was part of the backend team that built the api for customer dashboard with Node.js and SQLite. 
          </li>
          <li>
            The project involved integrating a payment gateway and showing real time graphs with socket.io 
          </li>
        </ul>
        <hr />
      </Container>
      <Container className={classes.job}>
        <Row>
          <h5><b> Backend Developer Intern (Remote) </b> | MyPreBoo
          <h5>Ahmedabad, India</h5><h6>Mar 2019 - June 2019 </h6></h5>
        </Row>
        
        <ul>
          <li>
            I am responsible for building Games and also integrating the backend and managing the API. 
          </li>
          <li>
            The tools i use include; Google Blockly,Phaser.io, Node.js, PHP, MySQL, HTML, CSS 
          </li>
        </ul>
        <hr />
      </Container>
      <Container className={classes.job}>
        <Row>
          <h5><b> Andela Learning Community </b> | Mentor
          <h5>Nigeria</h5><h6>Apr 2019 - Present </h6></h5>
        </Row>
        
        <ul>
          <li>
          I am one of the selected LCA (Local Community Ambassador) for the ALC 4.0. As an ambassador, 
          i mentor candidates on web development and monitor their progress          
          </li>
        </ul>
        <hr />
      </Container>
      <Container className={classes.job}>
        <Row>
          <h5><b> Freelancer </b> | Fiverr
          <h5>fiverr.com/alexowi</h5><h6>Apr 2017 - Present </h6></h5>
        </Row>
        
        <ul>
          <li>
            I do front- and back-end development on projects that need a technical resource. 
            I attained a Level 1 star rating           
          </li>
        </ul>
        <hr />
      </Container >
      <Container className={classes.job}><h3>Skills</h3></Container>
      <Container className={classes.job}>
        <h5>Languages and Runtimes
          <h6>Golang, Vanilla Javascript, Node.js, Javascript, Bash</h6>
        </h5>
      </Container>
      <Container className={classes.job}>
        <h5>Frameworks and Libraries
          <h6>Express, Gqlgen, Graphql, Apollo</h6>
        </h5>
      </Container>
      <Container className={classes.job}>
        <h5>Databases
          <h6>MySQL, MongoDB, SQLite, PostgreSQL</h6>
        </h5>
        <hr />
      </Container>
      <Container className={classes.job}><h3>Education</h3></Container>
      <Container>
        <h5>
          <h6>B.Sc Physics (Federal University Makurdi, Nigeria)</h6>
        </h5>
      </Container>
      </Container>
    </div>
  );
}

export default Resume;