import "../App.css";
import React, { useEffect } from "react";

const NoPage = () => {
  useEffect(() => {
    // for treasure hunt
    const secret = localStorage.getItem("randomString");
    if (secret) {
      console.log(
        "Third letter is " + secret[2] + "\n Click on the title on the Treasure Hunt page for 6 & 7"
      );
    }
  }, []);

  return (
    <>
      <div className="centre-div">
        <h1>404</h1>
        <p>Can't find the page you're looking for</p>
        <br></br>
        <p>And goanna is sad</p>
        <img src="../sad_goanna.gif" alt="A sad goanna" />
      </div>
    </>
  );
};

export default NoPage;
