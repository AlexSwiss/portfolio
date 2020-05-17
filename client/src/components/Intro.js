import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Chip, Typography, Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import image from '../images/avatar1.JPEG';
import AppNav from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        alignItems: 'center',
      },
    },
    image: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "80px"
    },
    name: {
        textAlign: 'center',
        fontSize: "50px"
    },
    about: {
        color: 'gray',
        marginLeft: "10px",
        fontSize: "20px",
        textAlign: 'center'
    },
    social: {
      marginTop: "3vh",
      fontSize: "30px",
      marginLeft: "15px",
      alignItems: 'right'

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
        <AppNav/>
        <Container className={classes.root}>
        <Row>
            <Col sm="4"></Col>
            <Col sm="4"><Avatar alt="Remy Sharp" src={image} className={classes.image} /></Col>
            <Col sm="4"></Col>
        </Row>
        <Row>
            <Col sm="4"></Col>
            <Col sm="4" className={classes.name} fontSize="40px">
                <Typography variant="h4" gutterBottom>
                    Alexander
                    <p><h6>alexyikeh@gmail.com</h6></p>
                </Typography>
            </Col>
            <Col sm="4"></Col>

        </Row>
        <Row>
            <Col sm="3"></Col>
            <Col sm="6" className={classes.about}>
                <Typography gutterBottom>
                    Hello <br/>
                    I am a Golang Backend engineer and i am passionate about solving problems
                </Typography>
            </Col>
            <Col sm="3"></Col>
        </Row>
        <Row>
        <Col sm="3"></Col>
        <Col sm="6" style={{marginLeft: '76px'}}>
            <Chip label="Golang"  className={classes.tech} />
            <Chip label="Javascript"  className={classes.tech} />
            <Chip label="Node.js"  className={classes.tech} />
            <Chip label="Express"  className={classes.tech} />
            <Chip label="Gqlgen"  className={classes.tech} />
            <Chip label="Graphql"  className={classes.tech} />
        </Col>
        <Col sm="3"></Col>
        </Row>
        <Row>
            <Col sm="4"></Col>
            <Col sm="4" style={{marginLeft: '76px'}}>

                <a target="_blank" href="https://github.com/AlexSwiss">
                    <GitHubIcon className={classes.social}/>
                </a>
                <a target="_blank" href="https://linkedin.com/In/alexowi" color="inherit">
                    <LinkedInIcon className={classes.social} />
                </a>
                <a target="_blank" href="https://twitter.com/CodedFingers">
                    <TwitterIcon className={classes.social}/>
                </a>

            </Col>
            <Col sm="4"></Col>
        </Row>
    </Container>
    </div>
  );
}

export default Intro;