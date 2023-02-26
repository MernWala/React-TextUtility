import React from 'react'
import '../css/custom.css';
import { useState } from 'react';

export default function About(props) {
    const [MyStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btnMode, setBtnMode] = useState("Dark");

    const toggleStyle = () => {
        if(MyStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnMode("Light");
        }else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnMode("Dark");
        }
    }

    return (
        <div className='container' style={MyStyle}>
            <h2 className='m-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={MyStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={MyStyle} className="accordion-button no-focus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={MyStyle} className="accordion-button no-focus collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={MyStyle} className="accordion-button no-focus collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3 p-0">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnMode}</button>
            </div>
        </div>
    )
}
