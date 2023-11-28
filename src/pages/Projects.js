import '../App.css';

import React, { useState } from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


const Projects = () => {

    return (<>
    <div className="projects-box">
    <h1>Projects</h1>
    <br></br>


    <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img src='../react.png' className='w-100' />
          <h3>A web portfolio</h3>
          <p>And it's actually what you're viewing right now!! 
            P.S. check out the 404 error page, I'm very proud of it</p>
          <a href="https://github.com/goanna5/goannas-web-portfolio" className="hyperlinks">Github Repo</a>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img src='../discord_bot.png' className='w-100' />
          <h3>Discord bot</h3>
          <p>In the works</p>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img src='../minecraft.jpg' className='w-100' />
          <h3>Minecraft mod</h3>
          <p>Coming soon</p>
        </MDBCol>
        
      </MDBRow>

     




      </div>
    </>)
  };
  
  export default Projects;