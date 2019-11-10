import React from 'react';
import { createStore } from 'redux';
import { NewPanForm } from './panForm';
import PersonalInformation from './piview';
import ContactInformation from './contactsview';
import DocumentProof from './documentproof';
import IncomeSource from './incomesource';
import fetch from 'node-fetch';
import FileSaver from 'file-saver';
// import Checkout from './checkout';
import Address from './address';
import { reducer } from '../reducer';
import Declaration from './declaration';

const initialState = NewPanForm();
const store = new createStore(reducer, initialState);



class PanApp extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }


    render() {

        const PersonalInfo = store.getState()["Personal Details"];
        const ContactInfo = store.getState()["Contact Details"];
        const DocumentInfo = store.getState()["Document Proof"];
        const IncomeInfo = store.getState()["Income Source"];
        const AddressInfo = store.getState()["Address Information"]
        const handlePersonalChange = (e) => {
            store.dispatch({ type: 'UPDATEPERSONALINFO', target: e })
            store.dispatch({ type: 'VALIDATEFORM', section: 'Personal Details', target: e })
            store.dispatch({ type: 'REFRESHDOCUMENTINFO' })
        }

        const handleContactChange = (e) => {
            store.dispatch({ type: 'UPDATECONTACTINFO', target: e })
            store.dispatch({ type: 'VALIDATEFORM', section: 'Contact Details', target: e })
        }
        const handleDocumentChange = (e) => {
            store.dispatch({ type: 'UPDATEDOCUMENTINFO', target: e })
            store.dispatch({ type: 'VALIDATEFORM', section: 'Document Proof', target: e })
        }
        const handleIncomeChange = (e) => {
            store.dispatch({ type: 'UPDATEINCOMEINFO', target: e })
            store.dispatch({ type: 'VALIDATEFORM', section: 'Income Source', target: e })
        }
        const handleAddressChange = (e) => {
            store.dispatch({ type: 'UPDATEADDRESSINFO', target: e })
            store.dispatch({ type: 'VALIDATEFORM', section: 'Address Information', target: e })
        }

        const handleDeclarationSubmit = (url) => {

            fetch('http://localhost:4000/downloadpdf',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(store.getState()),
                    // responseType: 'blob'
                }).then(res => res.blob()).then(blob => {
                    console.log(blob);
                    const file = new Blob([blob], {
                        type: "application/pdf"
                    })
                    //Build a URL from the file
                    // const fileURL = URL.createObjectURL(file);
                    //Open the URL on new Window
                    // window.open("data:application/pdf;base64," + file);

                    FileSaver.saveAs(file,"Filled-PAN-Application.pdf")
                }).catch(err=> {console.log(err)});
        }

        // const Tabs = (props) => {
        //     let tabs = props.tabs.map((t, index) => {

        //         var s = t;
        //         t = t.split(' ').join('-');
        //         return (
        //             <li className='nav-item'>
        //                 <a className={index === 0 ? 'active' : ''}
        //                     id={t + "-tab"} data-toggle="tab" href={"#" + t} role="tab" key={t} aria-controls={t} aria-selected={index === 0 ? 'true' : 'false'}>
        //                     {s}
        //                 </a>

        //             </li>)
        //     })
        //     return (<ul className='nav nav-justified' id='myTab' role='tablist' >{tabs}</ul>)
        // }


        return (
            <section className="tabs-area pb-15">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='tabs mt-100'>
                                <div className='single-tabs tebs-three'>
                                    <ul class="nav nav-justified" id="myTab" role="tablist"><li class="nav-item"><a class="active" id="Personal-Details-tab" data-toggle="tab" href="#Personal-Details" role="tab" aria-controls="Personal-Details" aria-selected="true">Personal Details</a></li><li class="nav-item"><a class="" id="Contact-Details-tab" data-toggle="tab" href="#Contact-Details" role="tab" aria-controls="Contact-Details" aria-selected="false">Contact Details</a></li><li class="nav-item"><a class="" id="Document-Proof-tab" data-toggle="tab" href="#Document-Proof" role="tab" aria-controls="Document-Proof" aria-selected="false">Document Proof</a></li><li class="nav-item"><a class="" id="Income-Source-tab" data-toggle="tab" href="#Income-Source" role="tab" aria-controls="Income-Source" aria-selected="false">Income Source</a></li><li class="nav-item"><a class="" id="Address-Information-tab" data-toggle="tab" href="#Address-Information" role="tab" aria-controls="Address-Information" aria-selected="false">Address Information</a></li><li class="nav-item"><a class="" id="Declaration-tab" data-toggle="tab" href="#Declaration" role="tab" aria-controls="Declaration" aria-selected="false">Declaration</a></li></ul>
                                    {/* <Tabs tabs={Object.keys(store.getState())}></Tabs> */}
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <div className='tab-content' id='myTabContent'>
                                                    <div class="tab-pane fade show active" id="Personal-Details" role="tabpanel" aria-labelledby="Personal-Details-tab">
                                                        <PersonalInformation PersonalInfo={PersonalInfo} formTypeKey="Personal Details" handleChange={handlePersonalChange}></PersonalInformation>
                                                    </div>
                                                    <div class="tab-pane fade " id="Contact-Details" role="tabpanel" aria-labelledby="Contact-Details-tab">
                                                        <div class="tab-text">
                                                            <ContactInformation ContactInfo={ContactInfo} formTypeKey="Contact Details" handleChange={handleContactChange}></ContactInformation>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade " id="Document-Proof" role="tabpanel" aria-labelledby="Document-Proof-tab">
                                                        <div class="tab-text">
                                                            <DocumentProof DocumentInfo={DocumentInfo} formTypeKey="Document Proof" handleChange={handleDocumentChange}></DocumentProof>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade " id="Income-Source" role="tabpanel" aria-labelledby="Income-Source-tab">
                                                        <div class="tab-text">
                                                            <IncomeSource IncomeInfo={IncomeInfo} formTypeKey="Income Source" handleChange={handleIncomeChange}></IncomeSource>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade " id="Address-Information" role="tabpanel" aria-labelledby="Address-Information-tab">
                                                        <div class="tab-text">
                                                            <Address AddressInfo={AddressInfo} formTypeKey="Address Information" handleChange={handleAddressChange}></Address>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade " id="Declaration" role="tabpanel" aria-labelledby="Declaration-tab">
                                                        <div class="tab-text">
                                                            <Declaration FinalState={store.getState()} formTypeKey="Declaration" handleChange={handleDeclarationSubmit} ></Declaration>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='col-lg-4 order-lg-last'>
                                                <Checkout></Checkout>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

}

export default PanApp;