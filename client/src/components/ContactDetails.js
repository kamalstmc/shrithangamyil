import React from 'react';

class ContactDetails extends React.Component {

    render() {
        return (
            <div className='checout-form form-style-two'>
                <div className="help-block with-errors"></div>
                <div className="checkout-title">
                    <h6 className='title'>Mobile Number</h6>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div className='input-items default'>
                                <input type="text" placeholder="91" disabled></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div className='input-items active'>
                                <input type="text" placeholder='mobile number' required></input>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="checkout-title mt-10">
                    <h6 className='title'>Email ID</h6>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                    <div className="single-checkout-form mt-10 form-input">
                            <div className='input-items active'>
                                <input type="text" placeholder='user@email.com'></input>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="checkout-title mt-10">
                    <h6 className='title'>Land Line</h6>
                </div>
                <div className='row'>
                <div className='col-md-3'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div className='input-items default'>
                                <input type="text" placeholder="std" ></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div className='input-items default'>
                                <input type="text" placeholder='land line number' required></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>)
    }
}

export default ContactDetails;