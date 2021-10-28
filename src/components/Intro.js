import React from "react";
import Bg from "./bgintro.jpg";
import "./Intro.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import Tilt from "react-vanilla-tilt";

function Intro() {
  return (
    <div
      className="img-fluid"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >






      <div className="b">
        {/* <Tilt style={{ width: "none" , margin : '60px' , boxShadow: '#141a2800'}}> */}

    <div className="c m-5">
            <h1>Welcome to Case Converter</h1>
            <br />
            
            <p>
              Case Converter is a word counter and a character counting utility
              which can be used to manipulate your text in the way you want.You
              can remove extra spaces, copy the manipulated text as well as
              convert your text from Uppercase to lowercase and lowercase to
              Uppercase. Case Converter is designed to be simple and easy to
              use.
            </p>
    </div>



         
        {/* </Tilt> */}

        {/* <div className="d">  
            <button className="my-5">Let's Go</button>
        </div> */}

        <Link to="/home">
        <div class="button">
          <p class="btnText">READY?</p>
          <div class="btnTwo">
            <p class="btnText2">GO!</p>
          </div>
        </div>
        </Link>
        
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
