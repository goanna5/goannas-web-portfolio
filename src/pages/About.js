import '../App.css';
import Card from 'react-bootstrap/Card';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';

const About = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation on component mount
    setAnimate(true);
  }, []);



    return (
    <>
    <div className="centre-div">
    <h1>About Me</h1>
    <br></br>
    </div>

    <MDBRow style={{ margin: '10px' }}>

    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
    <Card style={{ width: '25rem' }} className={`left-card img-hover-scale ${animate ? 'slide-in-left' : ''}`}>
    <Card.Body>
    <p>Hi, I'm <b>Anna</b> although my handle on pretty much everything is Goanna. I'm in my second year
      of the integrated Bachelor of Computer Science and Master of Cyber Security at UQ. </p>
      <p className="squiggly">...................</p>
    </Card.Body>
    </Card>
    </MDBCol>
    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
    <Card style={{ width: '25rem' }} className={`middle-card img-hover-scale ${animate ? 'slide-in-bottom' : ''}`}>
    <Card.Body>
    <p>
    While I am interested in Cyber Security, I also have an interest in software development so
    I'm looking to further my general programming skills through a series of projects:
    </p>
    <ul>
      <li>this <b>website</b>, learning front-end web development</li>
      <li>a <b>discord bot</b> to play around with certain commands and possible API calls</li>
      <li>a <b>minecraft mod</b> because I enjoy playing, and I'm wishing to consolidate my Java knowledge</li>
      <li>and potentially more in the future!</li>
    </ul>
    </Card.Body>
    </Card>
    </MDBCol>

    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
    <Card style={{ width: '25rem' }} className={`right-card img-hover-scale ${animate ? 'slide-in-right' : ''}`}>
    <Card.Body>
      <p>My Github</p>
      <a href="https://github.com/goanna5"><img src="../github.png" alt="Github logo" className="social-icon" /></a>
     

    </Card.Body>
    </Card>
    </MDBCol>
    </MDBRow>
   

    <div className="attributions">
    <h3>Attributions</h3>
    <p>Website developed by <a href="https://github.com/goanna5" className='hyperlinks'>Anna/Goanna</a>.</p>
    <p>Coder icon created by <a href="https://www.flaticon.com/free-icons/coder" title="coder icons" className="hyperlinks">Darius Dan</a>.</p>
    <p>Framework from <a href="https://github.com/facebook/create-react-app" className='hyperlinks'>Create React App</a>.</p>
    </div>
    </>
    )

  };
  
  export default About;