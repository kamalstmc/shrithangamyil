import React from 'react';
import fetch from 'node-fetch';

class Declaration extends React.Component {

    constructor() {
        super();
        }
    render() {

        function returnProp(key, obj) {
            if (obj.hasOwnProperty(key)) {
                return obj[key]['selectedName']
            }
            else {
                return ""
            }

        }

        const pi = this.props.FinalState;
        const doc = pi['Document Proof'];

        const idProof = returnProp("ID Proof", doc);
        const addressProof = returnProp("Address Proof", doc);
        const dob = returnProp("Date of birth", doc);

        const applicant = pi["Personal Details"]['Applicant Name']['lastName']['value']

        const handleChange = (e) => {
            // e.preventDefault();
            var url = "http://localhost:3300/download"
            this.props.handleChange(url);
        
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="weight">
                            I have enclosed     <span className="dec">{idProof}</span> as proof of identity, <br></br>
                            <span className="dec">{addressProof}</span> as proof of address and <br></br>
                            <span className="dec">{dob}</span> as proof of date of birth. <br></br>
                            I <span className="dec">{applicant}</span> , the applicant, in the capacity of do hereby declare that what is stated above is true to the best of my information and belief. <br></br>
                        </div>
                    </div>
                </div>
                <div className="row mt-50 weight">
                    <div className="col-lg">Date:</div>
                    <div className="col-ld">Location:</div>
                </div>
                <div className="row mt-50 weight">
                    <div className='container'>
                        <div className="col-lg  rounded-buttons" onClick={handleChange}>
                            <ul>
                                <li>
                                    <a href="#" class="main-btn rounded-three">Download Form</a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Declaration;