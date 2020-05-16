import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Chip, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import image from '../images/avatar1.JPEG';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        alignItems: 'center'
      },
    },
    image: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      marginTop: "3vh",
      alignItems: 'center'
    },
    name: {
        alignItems: 'center'
    },
    about: {
        alignItems: 'center',
        color: 'gray',
        justifyItems: 'center'
    },
    social: {
      marginTop: "3vh",
      fontSize: "30px",
      marginLeft: "15px",
      alignItems: 'center'

    },
    tech: {
      marginTop: "3vh",
      marginLeft: "5px",
      alignItems: 'center'

    }
  }))

const Intro = (props) => {
    
  const classes = useStyles();

  return (
    <div>
        <Container className={classes.root}>
        <Row>
            <Col sm="4"></Col>
            <Col sm="4"><Avatar alt="Remy Sharp" src={image} className={classes.image} /></Col>
            <Col sm="4"></Col>
        </Row>
        <Row>
            <Col sm="4"></Col>
            <Col sm="4" className={classes.name}>
                <Typography variant="h4" gutterBottom>
                    Alexander
                </Typography>
            </Col>
            <Col sm="4"></Col>

        </Row>
        <Row>
            <Col sm="3"></Col>
            <Col sm="6" className={classes.about}>
                <Typography variant="h6" gutterBottom>
                    Hello <br/>
                    I am a Golang Backend engineer and i am passionate about solving problems
                </Typography>
            </Col>
            <Col sm="3"></Col>
        </Row>
        <Row>
        <Col sm="3"></Col>
        <Col sm="6">
        <Chip label="Golang"  className={classes.tech} />
            <Chip label="Node.js"  className={classes.tech} />
            <Chip label="Express"  className={classes.tech} />
            <Chip label="Gqlgen"  className={classes.tech} />
            <Chip label="Graphql"  className={classes.tech} />
        </Col>
        <Col sm="3"></Col>
        </Row>
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <TwitterIcon className={classes.social}/>
                <GitHubIcon className={classes.social}/>
                <LinkedInIcon className={classes.social} />
                <MailIcon className={classes.social} />
            </Col>
            <Col sm="4"></Col>
        </Row>
    </Container>
    </div>
  );
}

export default Intro;