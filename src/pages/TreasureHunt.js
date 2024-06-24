import '../App.css';
import Cookies from 'js-cookie';
import { generateRandomString } from '../generateURL.js';

// adapted from https://medium.com/how-to-react/how-to-use-js-cookie-to-store-data-in-cookies-in-react-js-aab47f8a45c3
const TreasureHunt = () => {
    // Method to set data in cookies which will expire in 7 days
  const SetCookie = () => {
    Cookies.set("token", "youve clicked this before", {
      expires: 7,
    });
  };

  // Method to get data from cookies
  const GetCookie = () => {
    alert(Cookies.get("token"));
  };

  // Method to remove data from cookies
  const RemoveCookie = () => {
    Cookies.remove("token");
  };

  // checks if theyve found the secret button on the hidden page
  const CheckCookie = () => {
    if (Cookies.get("token") === undefined) {
      console.log(false);
    } else {
      console.log(true);
    }

  };

  // generates URL and gives them their first clue
  const setUp = () => {
    // remove old randomString (if exists) and generate new one
    let randomString = localStorage.getItem('randomString');
    if (randomString) {
      localStorage.removeItem('randomString');
    }
    randomString = generateRandomString();
    localStorage.setItem('randomString', randomString);


    //console.log(randomString);
    

    //console.log(randomString); // delete this before prod
    //alert("your first clue is:" + {randomString});

  };
    return (
    <>
    <div className="centre-div">
    <h1>Treasure Hunt</h1>
    <br></br>
    <h2>Welcome to Goanna's treasure hunt!! Rules are as follows</h2>
    <br></br>
    <p>1. Find a secret button, when you click that, it will allow you to access your reward (located on this page)</p>
    <p>2. The secret button can be found on a random page, the URL to access the page will be a randomly generated a combo of letters/numbers 
      so that everyone looking at the source code cant cheat. Yes I see you 👀</p>
    <p><i><b>Example</b> format of a URL could be: https://goannas-web-portfolio.vercel.app/SPNTi5u37l</i></p>
    <p>3. The special combo of letters to access this random page will have to be found, theres some clues scattered around, happy hunting!!</p>
    <p>4. Also there might be some vulnerabilities that I'm not aware of which make this really easy, if so please lmk :)</p>
    <br></br>
    <button onClick={setUp}>Click here to start/start again</button>
    <button onClick={CheckCookie}>Access your reward</button>
    {/*
    <h6>1. Click on Set Cookie to set data in cookies</h6>
      <h6>2. Click on Get Cookie to display the data</h6>
      <h6>2. Click on Remove Cookie to remove data from cookies</h6>
      <button onClick={SetCookie}>Set Cookie</button>
      <button onClick={GetCookie}>Get Cookie</button>
      <button onClick={RemoveCookie}>Remove Cookie</button>
    */}
    </div>
    </>
    )
  };
  
  export default TreasureHunt;