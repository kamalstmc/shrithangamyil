import React from 'react';
import Converter from 'number-to-words';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


class ApplyNewPan extends React.Component {

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

            const tabs = tabitems.map( (i, index)=> {
                let id = "v-pills-six-" + Converter.toWords(index + 1) + "-tab";
                let aria = "v-pills-six-" + Converter.toWords(index + 1);
                let ref = "#" + aria;
                return (<li className='nav-item' >
                    <a className={index === 0 ? 'active' : ''} id={id} data-toggle="pill" href={ref} role="tab" aria-controls={aria} aria-selected={index === 0 ? 'true' : 'false'}><i class={i.icon}></i></a>
                </li>)

            })

        return (<section className='tabs-area pb-70'>
            <div className='container'>
                <div className='row' >
                    <div className='col-lg-12'>
                        <div className='tabs mt-100'>
                            <h6 className='mb-10'>Apply New Pan</h6>
                            <div class="single-tabs tebs-three">
                                <ul class="nav nav-justified" id="myTab" role="tablist">
                                    {tabs}                               
                                </ul>
                                <div className='tab-content' id='myTabContent'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }

}

export default ApplyNewPan;