import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { VscClearAll } from "react-icons/vsc";

export default function TextForm(props) {
  if (props.mode === 'light') {
    document.body.style.backgroundColor = 'var(--bs-light)';
    document.body.style.color = 'var(--bs-dark)';
  } else {
    document.body.style.backgroundColor = 'var(--bs-dark)';
    document.body.style.color = 'var(--bs-light)';
  }

  const [text, setText] = useState("");

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to Uppercase", "success");
  };

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // creadits Code with Harry
  const removeExtraSpace = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Removed Extra spacess", "success");
  }

  // Credits: Code with Harry
  let copyToClipboard = (event) => {
    let text = document.querySelector('#MyBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("Copied", "success");
  }

  let capitilize = () => {
    let rawData = text;
    let newArray = rawData.split(" ");
    let finalData = "";
    for (let i = 0; i < newArray.length; i++)
      finalData = finalData + newArray[i].charAt(0).toUpperCase() + newArray[i].toLowerCase().substr(1, newArray[i].length - 1) + " ";
    setText(finalData)
    props.alert("Capitilize", "success");
  }

  return (
    <>
      <div className="container my-3">
        <div className="container my-3">
          <div className="col-sm-12 d-flex justify-content-between">
            <h3>Enter the text to analyze below</h3>
            <div>
              <button className="btn btn-outline-primary mx-1 btn-sm" onClick={copyToClipboard}>
                <FaCopy />
              </button>
              <button className="btn btn-outline-danger mx-1 btn-sm" onClick={() => { setText(""); props.alert("Text Deleted", "warning") }}>
                <VscClearAll />
              </button>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control disableFocus" value={text} onChange={handleOnChange} id="MyBox" rows="10" placeholder="Enter Text Here"></textarea>
          </div>
          <button className="btn btn-secondary fw-bold m-1" onClick={toUpperCase}>
            Uppercase
          </button>
          <button className="btn btn-secondary fw-bold m-1" onClick={toLowerCase}>
            Lowercase
          </button>

          <button className="btn btn-secondary fw-bold m-1" onClick={capitilize}>
            Capitilize
          </button>

          <button className="btn btn-secondary fw-bold m-1" onClick={removeExtraSpace}>
            Remove Extra Space
          </button>
        </div>

        <div className="container my-3">
          <div className="col-12 col-sm-12 px-2 py-2">
            <ul className="textForm-ul">
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
            <h5 className="textForm-prev-underline">
              Preview Text&nbsp;
            </h5>
            <p style={{ paddingLeft: '2rem' }} className="fw-lighter fst-italic">{text.length > 0 ? text : "Write somthing to use Text Util"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
