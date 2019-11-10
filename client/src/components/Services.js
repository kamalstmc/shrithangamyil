import React from 'react';

class Services extends React.Component{
    render(){
        return(    <section class="card-mini-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="single-mini-card mini-card-style-nine mt-30">
                        <div class="row no-gutters align-items-center">
                            <div class="col-sm-6">
                                <div class="card-image">
                                    <img src="assets/images/card/pan-card.png" width='270' height='203' alt="pan-card"></img>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-content">
                                    <h4 class="card-title"><a href="Pan">PAN Card</a></h4>
                                    <p class="text">A PAN is a unique identifier issued to all judicial entities identifiable under the Indian Income Tax Act, 1961.</p>
                                    
                                    <div class="card-btn rounded-buttons">
                                        <a class="main-btn rounded-three" href="Pan">APPLY NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-mini-card mini-card-style-nine mt-30">
                        <div class="row no-gutters align-items-center">
                            <div class="col-sm-6 order-sm-last">
                                <div class="card-image">
                                    <img src="assets/images/card/marriage-cert.jpg" alt="marriage-cert"></img>
                                </div>
                            </div>
                            <div class="col-sm-6 order-sm-first">
                                <div class="card-content">
                                    <h4 class="card-title"><a href="Marriage">Marriage Certificate</a></h4>
                                    <p class="text">A marriage certificate is an official statement that two people are married. In most jurisdictions, a marriage certificate is issued by a government official only after the civil registration of the marriage.</p>
                                    <div class="card-btn rounded-buttons">
                                        <a class="main-btn rounded-three" href="Marriage">REGISTER NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-mini-card mini-card-style-nine mt-30">
                        <div class="row no-gutters align-items-center">
                            <div class="col-sm-6">
                                <div class="card-image">
                                    <img src="assets/images/card/tax.png" width='270' height='203' alt="tax"></img>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-content">
                                    <h4 class="card-title"><a href="ITFiling">Income Tax Filing</a></h4>
                                    <p class="text">The Income Tax Act, 1961, and the Income Tax Rules, 1962, obligates citizens to file returns with the Income Tax Department at the end of every financial year.</p>
                                    <div class="card-btn rounded-buttons">
                                        <a class="main-btn rounded-three" href="ITFiling">FILE NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>)
    }
}

export default Services;