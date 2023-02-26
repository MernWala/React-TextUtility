import React from "react";
import '../css/customColorComponent.scss';

export default function ColorChanger(props) {
    return (
        <>
            <div className="colorSettings" id="colorSettingsButton">
                <div className="color-settings-closer">
                    <div className="clrBox">
                        <button id="colorOption1" className="clrOption"></button>
                        <button id="colorOption2" className="clrOption"></button>
                        <button id="colorOption3" className="clrOption"></button>
                    </div>
                    <div className="clrController">
                        <div className="clrController-closer">
                            <div className="left order-sm-second" style={{ width: '1rem' }}>
                                <i className="fa fa-cog fa-spin fa-fw" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>
                            </div>
                            <div className="right order-sm-first">
                                <div className="up">
                                    <i className="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i>
                                </div>
                                <div className="down">
                                    <i className="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}