import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here')

    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }    

    const handleOnChange = (event) => {
        console.log("onchange handler fired");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={toUpperCase}>Convert to Uppercase</button>
    </div>
    </>
  );
}
