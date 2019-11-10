import React from 'react';

const ErrorSpan = (props) => {
    const validationsArr = props.field
    var field = <p></p>
    if(validationsArr)
    field = validationsArr.map(item => {
        let txt = 'Please enter ' + item; 
        return(<span className='rqr'>{txt}</span>)
    })
    return(<div className='with-errors'>
        <ul className='list-unstyled'>
        {field}
        </ul>
        
    </div>)
} 

const CheckBox = (props) => {
    const obj = props.field
    const handelChange = (e) => {
        props.handleChange({ 'section': props.name, 'subSection': e.target.id })
    }
    const keys = Object.keys(obj)
    var item = 'validation'
    var index = keys.indexOf(item);
    if (index !== -1) keys.splice(index, 1);

    const radios = keys.map((key) => (
        <label htmlFor={obj[key]['label']} className="radio">
            <input type="radio" name={props.name} id={obj[key]['label']} checked={obj[key]['selectValue']} onChange={handelChange} className="hidden" />
            <span className="label1"></span>{obj[key]['label']}
        </label>
    ))
    return (<div className=''>{radios}</div>)
}

const NameInput = (props) => {
    const obj = props.field;
    const handelChange = (e) => {
        props.handleChange({ 'section': props.name, 'subSection': e.target.id, 'value': e.target.value })
    }
    const handelCheckBoxChange = (e) => {
        props.handleChange({ 'section': props.name, 'subSection': e.section, 'value': e.subSection })

    }
    const keys = Object.keys(obj);
    var item = 'validation'
    var index = keys.indexOf(item);
    if (index !== -1) keys.splice(index, 1);

    const field = keys.map(key => {
        if (key !== 'salutations' && key !== 'validation') {
            const disabled = obj[key]['disabled'] ? true:false
            return (
                <div className='col-lg'>
                    <div className="form-input mt-10">
                        <label>{obj[key]['required'] ? "Required" : ""}</label>
                        <div className={obj[key]['required'] ? 'input-items default' : 'input-items default'} >
                            <input type="text" placeholder={obj[key]['label']} id={key} value={obj[key]['value']} onChange={handelChange} disabled={disabled} ></input>
                        </div>
                    </div>
                </div>
            )
        }
        else { return (<div className='col-lg-12'> <CheckBox field={obj[key]} name={key} id={key} handleChange={handelCheckBoxChange}></CheckBox></div>) }
    })

    return (
        <div className=" form-style form-style-four ">
            <div className='row'>
                {field}
            </div>
            <div className='row'>
                <ErrorSpan field={obj['validation']} ></ErrorSpan>
            </div>
        </div>)

}
const Input = () => (<input></input>)

const DateInput = (props) => {
    const obj = props.field;
    const handelChange = (e) => {
        props.handleChange({ 'section': props.name, 'subSection': 'DOB', 'value': e.target.value })
    }
    return (<div className=" form-style form-style-four ">
        <div className='row'>
            <input type="date" value={obj['DOB']['value']} onChange={handelChange}></input>
        </div>
    </div>)
}

class Dropdown extends React.Component {

    componentDidMount() {

        this.setState()
    }
    render() {
        const obj = this.props.field;
        const handelChange = (e) =>{
            console.log(e.target)
            this.props.handleChange({ 'section': this.props.name, 'subSection': e.target.id, 'value': e.target.value })
        }

        if (obj.options) {
        const options = obj.options.map(opt => (<option id={opt} value={opt} >{opt}</option>))

        return (
            <div className=" form-style form-style-five ">
                <div className='row'>
                    <div className='col-lg'>
                        <div className="input-items default">
                            <select className='nice-select' onChange={handelChange}>
                                {options}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(<div></div>)
    }
}

}

export { CheckBox, NameInput, Input, Dropdown, DateInput };