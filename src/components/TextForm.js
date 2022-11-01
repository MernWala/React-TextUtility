import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { VscClearAll } from "react-icons/vsc";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let copyToClipboard = (event) => {
    console.log("Copy button is pushed");
  };

  let capitilize = () => {
    let rawData = text;
    let newArray = rawData.split(" ");
    let finalData = "";
    for(let i=0; i<newArray.length; i++)
      finalData = finalData + newArray[i].charAt(0).toUpperCase() + newArray[i].toLowerCase().substr(1, newArray[i].length - 1) + " ";
    setText(finalData)
  }


  return (
    <>
      <div className="container my-3">
        <div className="col-sm-12 d-flex justify-content-between">
          <h3>{props.heading}</h3>
          <div>
            <button className="btn btn-outline-primary mx-1 btn-sm" onClick={copyToClipboard}>
              <FaCopy />
            </button>
            <button className="btn btn-outline-danger mx-1 btn-sm" onClick={() => {setText("")}}>
              <VscClearAll />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="10" placeholder="Enter Text Here"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUpperCase}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={toLowerCase}>
          Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={capitilize}>
          Capitilize
        </button>
      </div>

      <div className="container my-3">
        <div className="header d-flex align-items-center justify-content-center border border-bottom-0 p-2">
          <h4>Your Text Summury</h4>
        </div>
        <div className="col-12 col-sm-12 border px-4 py-2">
          <ul>
            <li>
              <p>
                {text.trim().split(" ").length} <em>Words</em> <big>&</big>{" "}
                {text.length} <em>Characters</em>
              </p>
            </li>
            <li>
              <p>
                You need {0.008 * text.split(" ").length}min to read above
                paragraph
              </p>
            </li>
          </ul>

          <h5 className="text-decoration-underline">
            <em>Preview Text:&nbsp;</em>
          </h5>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
