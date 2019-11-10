import React from 'react';
import Typed from 'typed.js';
import {NavLink} from  'react-router-dom';
class About extends React.Component {

    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        //   const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: [' PAN Card',  ' IT Filing' , ' Marriage Certs'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '_',
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.reset();
    }

    render() {

        return (<div className="header-content-area d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-lg-end">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                        <div className="header-content">
                            <h3 className="header-title">We make the process easier for &nbsp;&nbsp;&nbsp;
                            {/* <br></br> */}
                            <span
                                    style={{ whiteSpace: 'pre' }}
                                    ref={(el) => { this.el = el; }}
                                />

                            </h3>
                            <p className="text">Fill Form. Print & Send. That's it..!</p>

                            <div className="header-btn rounded-buttons">
                                <NavLink className="main-btn rounded-three" to="Services">APPLY NOW</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-image d-none d-lg-flex align-items-center">
                <div className="image">
                    <img src="assets/images/header/header-2.png" alt="Header"></img>
                </div>
            </div>

        </div>)

    }

}

export default About;