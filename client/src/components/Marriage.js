import React from 'react';

class Marriage extends React.Component{

    render(){
        return(   <section class="coming-soon-area coming-soon-two pt-70 mb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="coming-soon-content">
                        <div class="coming-soon-image image-one d-none d-md-block">
                            <img src="assets/images/coming-soon/c-image-1.png" alt="coming soon"></img>
                        </div>
                        <div class="coming-soon-image image-two">
                            <img src="assets/images/coming-soon/c-image-2.png" alt="coming soon"></img>
                        </div>
                        <div class="coming-soon-image image-three d-none d-md-block">
                            <img src="assets/images/coming-soon/c-image-3.png" alt="coming soon"></img>
                        </div>
                        <div class="coming-soon-content-wrapper text-center">
                            <a href="#"><img src="assets/images/logo-1.svg" alt=""></img></a>
                            <h3 class="coming-soon-title">Launching Soon</h3>
                            <p class="text">This service will be launched soon. Thanks for being with us !</p>
                            
                            <div class="coming-soon-newslatter">
                                <form action="#">
                                    <i class="lni-envelope"></i>
                                    <input type="text" placeholder="user@email.com"></input>
                                    
                                    <div class="coming-soon-btn rounded-buttons">
                                        <button class="main-btn rounded-three">SUBSCRIBE</button>
                                    </div>
                                </form>
                            </div> 
                            <p class="subscribe-text">Subscribe and be the first to know when we release</p>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>)
    }

}

export default Marriage;