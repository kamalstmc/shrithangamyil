import React from 'react';

class PersonalInformation extends React.Component {

    render() {

        return (
            <div className='checout-form  form-style-two'>
                <div class="help-block with-errors"></div>
                <div className="checkout-title">
                    <h6 className="title">Applicant's Name</h6>
                    <p className="text">(Name should be exactly as per the ID proof. ID proof should have expansion of the initials)</p>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="single-checkout-form mt-10 form-input">
                            {/* <label>Last Name</label> */}
                            <div class="input-items active">
                                <input type="text" placeholder="Last Name" data-error='Please enter your last name' required></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="single-checkout-form mt-10 form-input">
                            {/* <label>First Name</label> */}
                            <div class="input-items active">
                                <input type="text" placeholder="First Name" data-error='Please enter your first name' required></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="single-checkout-form mt-10 form-input">
                            {/* <label>Middle Name</label> */}
                            <div class="input-items default">
                                <input type="text" placeholder="Middle Name"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-title mt-10">
                    <h6 className="title">Father's Name</h6>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="single-checkout-form mt-10 form-input">
                            {/* <label>Last Name</label> */}
                            <div class="input-items active">
                                <input type="text" placeholder="Last Name" data-error='Please enter your last name' required></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="single-checkout-form mt-10 form-input">
                            {/* <label>First Name</label> */}
                            <div class="input-items active">
                                <input type="text" placeholder="First Name" data-error='Please enter your first name' required></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="single-checkout-form mt-10 form-input">
                            {/* <label>Middle Name</label> */}
                            <div className="input-items default">
                                <input type="text" placeholder="Middle Name"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-title mt-10">
                    <h6 className="title">Choose name to be printed on PAN Card</h6>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className="single-checkout-form mt-10 form-input">
                            {/* <label>Middle Name</label> */}
                            <div className="input-items default">
                                <select>
                                    <option value="0">New York</option>
                                    <option value="1">Missouri</option>
                                    <option value="2">Arkansas</option>
                                    <option value="3">California</option>
                                    <option value="4">Delaware</option>
                                    <option value="5">Montana</option>
                                    <option value="6">Louisiana</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='checkout-title mt-10'>
                    <h6 className='title' >Aadhar Details</h6>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="single-checkout-form mt-10 form-input">
                            {/* <label>Middle Name</label> */}
                            <div className="input-items active">
                                <input type="text" placeholder="Aadhar Number" data-error='Aadhar number is mandatory' required></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className="single-checkout-form mt-10 form-input">
                            {/* <label>Middle Name</label> */}
                            <div className="input-items active">
                                <input type="text" placeholder="Full Name as in Aadhar Card" data-error='Please enter full name as printed in aadhar card' required></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div class="checkout-title">
                                <h5 class="title">Gender</h5>
                            </div>

                            <div className='checout-radio'>
                                <input id='male' type='radio' value='cheque' checked='checked' name='radios'></input>
                                <lable for='male'><span></span>Male</lable>
                            </div>
                            <div className='checout-radio'>
                                <input id='female' type='radio' value='cheque' checked='checked' name='radios'></input>
                                <lable for='female'><span></span>Female</lable>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div class="checkout-title">
                                <h5 class="title">Maritial Status</h5>
                            </div>

                            <div className='checout-radio'>
                                <input id='married' type='radio' value='cheque' checked='checked' name='radios'></input>
                                <lable for='married'><span></span>Married</lable>
                            </div>
                            <div className='checout-radio'>
                                <input id='single' type='radio' value='cheque' checked='checked' name='radios'></input>
                                <lable for='single'><span></span>Single</lable>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="single-checkout-form mt-10 form-input">
                            <div class="checkout-title">
                                <h5 class="title">Date of Birth</h5>
                            </div>
                            <div className='row'>
                            <div className='col-sm-4'>
                                <div className="input-items active">
                                    <div className="input-items default">
                                        <select>
                                            <option value="0">01</option>
                                            <option value="1">02</option>
                                            <option value="2">03</option>
                                            <option value="3">04</option>
                                            <option value="4">05</option>
                                            <option value="5">06</option>
                                            <option value="6">07</option>
                                            <option value="6">08</option>
                                            <option value="6">09</option>
                                            <option value="6">10</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className="input-items active">
                                    <div className="input-items default">
                                        <select>
                                            <option value="0">JAN</option>
                                            <option value="1">FEB</option>
                                            <option value="2">MAR</option>
                                            <option value="3">APR</option>
                                            <option value="4">MAY</option>
                                            <option value="5">JUN</option>
                                            <option value="6">JUL</option>
                                            <option value="6">AUG</option>
                                            <option value="6">SEP</option>
                                            <option value="6">OCT</option>
                                            <option value="6">NOV</option>
                                            <option value="6">DEC</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className="input-items active">
                                    <div className="input-items default">
                                        <input type='text' placeholder='yyyy' required></input>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default PersonalInformation;