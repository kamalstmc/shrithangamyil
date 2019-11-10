import {CheckBox,NameInput,Input,Dropdown,DateInput} from './formComponents';
const formTypeMap = {

    "Personal Details" : {
        "Category of Applicant" : CheckBox,
        "Gender": CheckBox,
        "Applicant Name" : NameInput,
        "Father's Name" : NameInput,
        "Name On PAN" : Dropdown,
        "Aadhaar Details" : NameInput,
        "Date of Birth" : DateInput,
        "Address" : Input,
        "Maritial Status": CheckBox,
    },

    "Contact Details" : {
        "Mobile" : NameInput,
        "Email": NameInput,
        "Land Line" : NameInput,
        "Communication":CheckBox
    },

    "Document Proof" : {
        "ID Proof": Dropdown,
        "Address Proof":Dropdown,
        "Date of birth": Dropdown,
    },

    "Income Source" : {
        "Income Info" : CheckBox,
    },

    "Address Information" : {
        "Address Info": NameInput,
        "Locality":NameInput,
        "Region": NameInput,
        "Country":NameInput,
    }
}

const ComponentResolver = (prop) => {return (
    formTypeMap[prop.section][prop.subSection]
)}

export { ComponentResolver }