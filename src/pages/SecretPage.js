import '../App.css';
import Cookies from 'js-cookie';
import { reward } from '../reward.js';

const SecretPage = () => {

  const getReward = () => {
    alert("You'll be able to access this for 7 days (unless you try again)");
    Cookies.set("token", "goannaisthebest", {
        expires: 7,
      });
    reward();

  };
    return (
    <>
    <div className="centre-div">
    <h1>Good work!!</h1>
    <button onClick={getReward}>Access your reward</button> 
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
  
  export default SecretPage;