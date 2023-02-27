import { Link } from 'react-router-dom';
import '../css/custom.css';
import '../css/footer.scss';

export default function footer() {
    return (
        <>
            <div className="footerContaier">
                <div className="footerSubCon">
                    <div className="footer-part-container">
                        <div className='footer-part-sub-con'>
                            <div className='header'>
                                <h2>TextUtil</h2>
                                <p></p>
                                <div className='genral-info'>
                                    <p>Simple to Manipulate Text</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-part-container">
                        <div className='footer-part-sub-con'>
                            <div className='header2'>
                                <span>Important Links</span>
                                <div className='imp-links'>
                                    <ul>
                                        <li><Link to='/'>
                                        <i className="fa-solid fa-angles-right"></i>&nbsp;
                                            Home
                                        </Link></li>

                                        <li><Link to='/about'>
                                        <i className="fa-solid fa-angles-right"></i>&nbsp;
                                            About
                                        </Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-part-container">
                        <div className='footer-part-sub-con'>
                            <div className='header2'>
                                <span> Follow Us</span>
                                <div className='social'>
                                    <ul>
                                        <li><a href='https://github.com/ShivamKashyap' target="self">
                                            <i className="fa-brands fa-github"></i>
                                        </a></li>

                                        <li><a href='https://www.linkedin.com/in/shivam-kumar-kashyap-382794249' target="self">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a></li>

                                        <li><a href='https://www.instagram.com/nxt_hulk/?next=%2F' target="self">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a></li>

                                        <li><a href="mailto:shivamkumarkashyap12@gmail.com" target="self">
                                            <i className="fa-solid fa-envelopes-bulk"></i>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}