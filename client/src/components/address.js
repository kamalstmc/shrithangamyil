import React from 'react';
import { ComponentResolver } from './resolveComponents';

class Address extends React.Component {

    render() {
        const pi = this.props.AddressInfo;
        const Fields = Object.keys(pi).map(key => {
            let prop = { "section": this.props.formTypeKey, "subSection": key }
            const FieldType = ComponentResolver(prop)
            const handleChange = (e) => {
                // console.log(e)
                this.props.handleChange(e)
            }
            return (
                
                    <div className='row mb-10 pb-10 bx'>
                        <div className='col-lg-4'>
                            <h7 className='sub-title'>{key}</h7>
                        </div>
                        <div className='col-lg-8'>
                            <FieldType field={pi[key]} name={key} handleChange={handleChange}></FieldType>
                        </div>
                    </div>
            )
        })
        return (<div className='tab-pane ' id={this.props.formTypeKey} role="tabpanel" aria-labelledby={this.props.formTypeKey + "-tab"}>
           <div className='col-lg-12 mt-10'>
           {Fields}
           </div> 
        </div>
        )
    }
}

export default Address;