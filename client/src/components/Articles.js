import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
        
      <Container><h3>I have written a few articles..</h3></Container>
      <Container className={classes.project}>
      <hr />
        <Row>
            <h4>How to install Golang and set up your GOPATH the right way</h4>
        </Row>
        <Row>
          <Col md="6">
          <h6>There are many resources on how to get started with golang but 
          some of the articles may solve what you need but do not follow the standard ways to avoid hassles later..</h6>
          </Col>
          <Col md="3"></Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://hashnode.com/post/the-proper-way-to-install-golang-and-set-up-your-workspace-ck8qhtjbu009oehs1nri77i5h">View Articles</a>
          </Typography>
        </Row>
      </Container>
      <hr />

      </Container>
    </div>
  );
}

export default Projects;