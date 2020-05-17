import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppNav from './Navbar';
import { Avatar, Chip, Typography} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        alignItems: 'center',
      },
    },
    project: {
        paddingTop: '30px'
    }
  }))


const Projects = (props) => {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <AppNav/>
      <Container>
      <Container><h3>Some of my projects..</h3></Container>
      <Container className={classes.project}>
      <hr />
        <Row>
            <h4>Shoppinverse</h4>
        </Row>
        <Row>
        <InfoIcon />&nbsp; &nbsp;<h6>An app for making your Shopping List</h6>
        </Row>
        <Row>
            <KeyboardIcon />&nbsp; &nbsp;<h6> Node.js, MongoDB, Express, React, React-redux</h6>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://shoppinverse.herokuapp.com/">View Project</a>
          </Typography>
        </Row>
        <hr />
      </Container>
    

      <Container className={classes.project}>
        <Row>
            <h4>Bookworm</h4>
        </Row>
        <Row>
        <InfoIcon />&nbsp; &nbsp;<h6>A Golang graphql api for a book club</h6>
        </Row>
        <Row>
            <KeyboardIcon />&nbsp; &nbsp;<h6> Golang, gqlgen, Gorm, MySQL, Graphql, Apollo, React</h6>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://shoppinverse.herokuapp.com/">View Project</a>
          </Typography>
        </Row>
        <hr />
      </Container>

      <Container className={classes.project}>
        <Row>
            <h4>Know Weather</h4>
        </Row>
        <Row>
        <InfoIcon />&nbsp; &nbsp;<h6>React and Node.js App to tell the weather of a given place </h6>
        </Row>
        <Row>
            <KeyboardIcon />&nbsp; &nbsp;<h6> React, weather API, node.js, axios </h6>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://getcloudy.herokuapp.com/">View Project</a>
          </Typography>
        </Row>
        <hr />
      </Container>

      <Container className={classes.project}>
        <Row>
            <h4>Z Bot</h4>
        </Row>
        <Row>
        <InfoIcon />&nbsp; &nbsp;<h6>A Bot i built for my birthday :D that answers question about me </h6>
        </Row>
        <Row>
            <KeyboardIcon />&nbsp; &nbsp;<h6> Node.js, React, Dialog Flow, Express </h6>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://z-b.herokuapp.com/">View Project</a>
          </Typography>
        </Row>
        <hr />
      </Container>


      </Container>
    </div>
  );
}

export default Projects;