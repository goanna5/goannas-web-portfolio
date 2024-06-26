import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import "../App.css";

const Projects = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation on component mount
    setAnimate(true);
  }, []);

  return (
    <>
      <div className={`projects-box ${animate ? "fade-in" : ""}`}>
        <h1>Projects</h1>
        <br></br>

        <MDBRow>
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <a href="https://github.com/goanna5/goannas-web-portfolio">
              <img src="../react.png" className="w-100 img-hover-scale" alt="react logo" />
            </a>
            <h3>Web portfolio</h3>
            <p>
              And it's actually what you're viewing right now!! P.S. check out the 404 error page,
              I'm very proud of it
            </p>
            <a href="https://github.com/goanna5/goannas-web-portfolio" className="hyperlinks">
              Github Repo
            </a>
          </MDBCol>

          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <a href="#">
              <img src="../discord_bot.png" className="w-100 img-hover-scale" alt="discord logo" />
            </a>
            <h3>Discord bot</h3>
            <p>
              All functionality is basically just identifying key words in messages - my GitHub repo
              has more details on that :)
            </p>
            <a href="https://github.com/goanna5/discord-bot" className="hyperlinks">
              Github Repo
            </a>
          </MDBCol>

          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <a href="#">
              <img src="../minecraft.jpg" className="w-100 img-hover-scale" alt="minecraft logo" />
            </a>
            <h3>Minecraft mod</h3>
            <p>Coming soon (ish)</p>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default Projects;