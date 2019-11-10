import React from 'react';

class Contact extends React.Component {

    render() {
        return (<section class="contact-area pt-50 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="section-title mt-45">
                            <h3 class="title">Get in touch</h3>
                        </div>
                        <div class="contact-form form-style-four mt-15">
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-input mt-15">
                                            <label>Full Name</label>
                                            <div class="input-items default">
                                                <i class="lni-user mr-15"></i>

                                                <input type="text" placeholder="Siva Kumar" ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-input mt-15">
                                            <label>Email Address</label>
                                            <div class="input-items default">
                                                <i class="lni-envelope"></i>
                                                <input type="text" placeholder="user@email.com"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-input mt-15">
                                            <label>Phone Number</label>
                                            <div class="input-items default">
                                                <i class="lni-phone-handset"></i>
                                                <input type="text" placeholder="01234567890"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-input mt-15">
                                            <label>Subject</label>
                                            <div class="input-items default">
                                                <i class="lni-bubble"></i>
                                                <input type="text" placeholder="Type here"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-input mt-15">
                                            <label>Your Message</label>
                                            <div class="input-items default">
                                                <i class="lni-pencil-alt"></i>
                                                <textarea placeholder="Type your message here"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="single-form pt-25">
                                            <div class="input-form rounded-buttons">
                                                <button class="main-btn rounded-three" type="submit">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8">
                        <div class="section-title mt-45 pb-20">
                            <h3 class="title">Contact Information</h3>
                        </div>
                        <div class="contact-info">
                            <ul class="info">
                                <li>
                                    <div class="single-info">
                                        <div class="info-icon">
                                            <i class="lni-map-marker"></i>
                                        </div>
                                        <div class="info-content">
                                            <p class="text">No.59/91, 1st Floor,5th Main Road, CIT Nagar East,Nandanam, Chennai - 600035.Tamilnadu, South India.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-info">
                                        <div class="info-icon">
                                            <i class="lni-map-marker"></i>
                                        </div>
                                        <div class="info-content">
                                            <p class="text">Land Mark : Behind EVR Periyar Maligai.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-info">
                                        <div class="info-icon">
                                            <i class="lni-phone-handset"></i>
                                        </div>
                                        <div class="info-content">
                                            <p class="text">+91 73732 78999</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-info">
                                        <div class="info-icon">
                                            <i class="lni-envelope"></i>
                                        </div>
                                        <div class="info-content">
                                            <p class="text">
                                            <a href="mailto:kamalstmc@gmail.com">kamalstmc@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="social mt-30">
                                <li><a href="https://www.facebook.com/kamalstmcchennai/" target="_blank" rel="noopener noreferrer"><i class="lni-facebook-filled"></i></a></li>
                                <li><a href="https://twitter.com/kamalstmc" target="_blank" rel="noopener noreferrer"><i class="lni-twitter-original"></i></a></li>
                                {/* <li><a href="#"><i class="lni-instagram-original"></i></a></li>
                            <li><a href="#"><i class="lni-linkedin-original"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Contact;