import React from 'react';
import {NavLink} from  'react-router-dom';

class Navbar extends React.Component {

render(){

    return(        <div className="navbar-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="About">
                        {/* <img src="assets/images/brandlogo2.png" alt="Logo"></img> */}
                        <img src="assets/images/logo1.png" alt="Logo"></img>
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarThree" aria-controls="navbarThree" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarThree">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  to="About">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="Services">SERVICES</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to="Pan">PAN CARD <i className="lni-chevron-right"></i></NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to="#">APPLY NEW</NavLink></li>
                                            <li><NavLink to="#">UPDATE EXISTING</NavLink></li>
                                            <li><NavLink to="#">NRI</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="ITFiling">IT FILING</NavLink></li>
                                    <li><NavLink to="Marriage">MARRIAGE CERTS</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="Pricing">PRICING</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="Contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-social d-none d-sm-flex align-items-center">
                        <span>FOLLOW US</span>
                        <ul>
                            <li><a href="https://twitter.com/kamalstmc" target="_blank"  rel="noopener noreferrer"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="https://www.facebook.com/kamalstmcchennai/" target="_blank"  rel="noopener noreferrer"><i className="lni-facebook-filled"></i></a></li>
                        </ul>
                    </div>
                </nav> 
            </div>
        </div>
    </div> 
</div> )

}

}

export default Navbar;