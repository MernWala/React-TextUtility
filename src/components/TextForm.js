import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("onchange handler fired");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="MyBox"
            rows="10"
            placeholder="Enter Text Here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={toLowerCase}>Convert to Lowercase</button>
      </div>

      <div className="container my-3">
        <div className="header d-flex align-items-center justify-content-center border border-bottom-0 p-2">
          <h4>Your Text Summury</h4>
        </div>
        <div className="col-12 col-sm-12 border px-4 py-2">
          <ul>
            <li>
              <p>
                {text.split(" ").length} <em>Words</em> <big>&</big>{" "}
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
