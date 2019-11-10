import React from 'react';
import Converter from 'number-to-words';
import PersonalInformation from '../components/PersonalInformation.js';
import ContactDetails from '../components/ContactDetails';

class NewPan extends React.Component {

    render() {

        const tabitems = [
            {
                'label': 'PERSONAL INFORMATION',
                'icon': 'lni-user'
            },
            {
                'label': 'CONTACT DETAILS',
                'icon': 'lni-phone-handset'
            },
            {
                'label': 'DOCUMENT PROOF',
                'icon': 'lni-book'
            },
            {
                'label': 'INCOME SOURCE',
                'icon': 'lni-dollar'
            },
            {
                'label': 'ADDRESS INFORMATION',
                'icon': 'lni-map-marker'
            }, { 'label': 'DECLARATION', 'icon': 'lni-pencil-alt' }]

        const tabs = tabitems.map((i, index) => {
            let id = "v-pills-six-" + Converter.toWords(index + 1) + "-tab";
            let aria = "v-pills-six-" + Converter.toWords(index + 1);
            let ref = "#" + aria;
            return (<a className={index === 0 ? 'regular-icon-light-eight active' : ' regular-icon-light-eight'} id={id} data-toggle="pill" href={ref} role="tab" aria-controls={aria} aria-selected={index === 0 ? 'true' : 'false'}><i class={i.icon}></i></a>)
        })
        return (<section className='tabs-area pb-70'>
            <div className='container'>
                <div className='row'>
                    <div class="col-lg-12">
                        <div class="tabs mt-50">
                            <h4 class="tabs-title mb-30">Tab 6</h4>
                            <div class="single-tabs tebs-six">
                                <div class="row no-gutters">
                                    <div class="col-sm-2">
                                        <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            {tabs}
                                        </div>
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="tab-content" id="v-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-pills-six-one" role="tabpanel" aria-labelledby="v-pills-six-one-tab">
                                                <section className='checkout-area pb-100'>
                                                    <div className='container'>
                                                        <div className='form-input form-group'>
                                                        <form data-toggle='validator'>
                                                            <div className='row'>
                                                                <div className='col-lg-12'>
                                                                    <PersonalInformation></PersonalInformation>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-six-two" role="tabpanel" aria-labelledby="v-pills-six-two-tab">
                                            <section className='checkout-area pb-100'>
                                                    <div className='container'>
                                                        <div className='form-input form-group'>
                                                        <form data-toggle='validator'>
                                                            <div className='row'>
                                                                <div className='col-lg-12'>
                                                                    <ContactDetails></ContactDetails>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-six-three" role="tabpanel" aria-labelledby="v-pills-six-three-tab">
                                                <div class="tab-text">
                                                    <p class="text">Raw denim you probably haven’t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. <br></br> Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-six-four" role="tabpanel" aria-labelledby="v-pills-six-four-tab">
                                                <div class="tab-text">
                                                    <p class="text">Raw denim you probably haven’t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. <br></br> Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                                </div>
                                            </div>
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

export default NewPan;