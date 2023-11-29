import '../App.css';
import Button from '../Button.js';
import React, { useState, useEffect } from 'react';

const Home = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation on component mount
    setAnimate(true);
  }, []);


    return( 
      <>
      
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class={`col-10 col-sm-8 col-lg-6 ${animate ? 'fade-in' : ''}`}>
          <img src="./girl.png" class="d-block mx-lg-auto img-fluid" alt="coder girl" width="600" height="400" loading="lazy"/>
        </div>
        <div class="col-lg-6">
          <h1 class={`display-5 fw-bold lh-1 mb-3 ${animate ? 'slide-in' : ''}`}>Welcome to Goanna's abode</h1>
          <br></br>
          <p class={`lead ${animate ? 'fade-in' : ''}`}>A BCompSci/MCyberSec student at UQ. Check out my projects!</p>
          <div class={`d-grid gap-2 d-md-flex justify-content-md-start ${animate ? 'fade-in' : ''}`}>
          
            {/* Button in here */}
            <Button />
          </div>
        </div>
      </div>
    </div>
    
    </>
    )
  };
  
  export default Home;