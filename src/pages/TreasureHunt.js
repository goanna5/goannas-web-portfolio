import '../App.css';
import Cookies from 'js-cookie';

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
    return (
    <>
    <div className="centre-div">
    <h1>Treasure Hunt</h1>
    <br></br>
    <h2>Welcome to Goanna's treasure hunt!! Rules are as follows</h2>
    <br></br>
    <p>1. Find a secret button, when you click that, it will allow you to access your reward (located on this page)</p>
    <p>2. The secret button can be found on a random page, I'm gonna try and randomly generate a combo of letters/numbers 
      for the URL of this page so that everyone looking at the source code cant cheat.</p>
    <p>3. The random page will have to be found, theres some clues scattered around, happy hunting!!</p>
    <br></br>
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