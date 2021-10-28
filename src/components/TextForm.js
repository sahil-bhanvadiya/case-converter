import React, { useState } from "react";
import Alert from "./Alert";
import "./TextForm.css";

export default function TextForm(props) {
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

 

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase!", "success");
  };

  const handleReClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    showAlert("Converted to Reverse!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    showAlert("Copied to Clipboard!", "success");
  };

  const capitalFirstLetter = () => {
    let words = text.split(" ");
    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
    showAlert("Converted to first latter capitalized!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces removed!", "success");
  };
 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  

  const [text, setText] = useState("");

  const [alert, setAlert] = useState(null);

  return (
    <>

      <div className="container my-5">
      <Alert alert={alert} />
        <h2 className="mb-4">{props.heading}</h2>

        <div className="my-3">
        <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="myBox"
                rows="6"
              ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        
        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={handleReClick}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={capitalFirstLetter}
        >
          First latter capital
        </button>
        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p style={{fontSize: "large"}}> <b>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          </b>
          words and <b> {text.length} </b> characters
        </p>
        <h2>Preview</h2>
        <div className="prev">
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
