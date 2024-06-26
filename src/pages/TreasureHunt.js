import "../App.css";
import { generateRandomString } from "../generateURL.js";
import Cookies from "js-cookie";
import { reward } from "../reward.js";

// adapted from https://medium.com/how-to-react/how-to-use-js-cookie-to-store-data-in-cookies-in-react-js-aab47f8a45c3
const TreasureHunt = () => {
  // generates URL and gives them their first clue
  const setUp = () => {
    // get rid of old cookie
    Cookies.remove("token");

    // remove old randomString (if exists) and generate new one
    let randomString = localStorage.getItem("randomString");
    if (randomString) {
      localStorage.removeItem("randomString");
    }
    randomString = generateRandomString();
    localStorage.setItem("randomString", randomString);

    alert(
      "Your first clue is the fifth letter/number is: " +
        randomString[4] +
        "\nAlso btw theres 10 letters total in this string you're looking for"
    );
  };

  // checks if theyve found the secret button on the hidden page
  const getReward = () => {
    if (Cookies.get("token") != "goannaisthebest") {
      alert("You don't have a reward HAH who do you think you're kidding");
    } else {
      reward();
    }
  };

  const revealSixSeven = () => {
    alert(
      "Six and seven are " +
        localStorage.getItem("randomString")[5] +
        " and " +
        localStorage.getItem("randomString")[6]
    );
  };
  return (
    <>
      <div className="centre-div">
        <h1>
          <div onClick={revealSixSeven}>Welcome to Goanna's treasure hunt!!</div>
        </h1>
        <br></br>
        <h2>Your task:</h2>
        <br></br>
        <p>1. Find a secret button, located on a secret page, and there will be a reward for you</p>
        <p>
          2. The URL to access the secret page will be a randomly generated combo of letters/numbers
          so that everyone looking at the source code can't cheat. Yes I see you 👀
        </p>
        <p>
          <i>
            <b>Example</b> format of a URL could be:
            https://goannas-web-portfolio.vercel.app/SPNTi5u37l
          </i>
        </p>
        <p>
          3. Clues about this combo of letters/numbers are spread throughout my website, happy
          hunting!!
        </p>
        <p>
          *NOTE* Having the console open is encouraged. Although if you wanna cheat my code, check
          out the challenge section below.
        </p>
        <button onClick={setUp}>Click here to start/start again!!</button>
        <button onClick={getReward}>Access my award that I've *already* got 😎</button>
        <br></br>
        <br></br>
        <div className="vulnerabilities">
          <h2>Vulnerabilities that I decided to make into challenges:</h2>
          <p>
            Challenge 1: don't look for any clues. Instead read source code and type something into
            the console to find the secret string.
          </p>
          <p>
            Challenge 2: don't look for any clues and also don't type anything into the console.
            Instead read source code and modify cookies to access reward.
          </p>
        </div>
        <div className="secret">
          <p>
            You've found a clue!! Reload the page to make sure the below info is updated (right now
            its likely wrong)
          </p>
          <p>
            The first 2 letters are {localStorage.getItem("randomString")[0]} &{" "}
            {localStorage.getItem("randomString")[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default TreasureHunt;
