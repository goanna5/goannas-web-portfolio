import '../App.css';
import Button from '../Button.js';

const Home = () => {
    return( 
      <>
      
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="./girl.png" class="d-block mx-lg-auto img-fluid" alt="coder girl" width="600" height="400" loading="lazy"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Hi! I'm Anna</h1>
          <p class="lead">A BCompSci/MCyberSec student at UQ. Check out my projects</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            {/* Button in here */}
            <Button />
          </div>
        </div>
      </div>
    </div>
    <p>Coder icon created by <a href="https://www.flaticon.com/free-icons/coder" title="coder icons">Darius Dan</a></p>
    </>
    )
  };
  
  export default Home;