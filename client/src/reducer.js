
const reducerMap = {
    "Personal Details" : {
    "Category of Applicant" : categoryReducer,
    "Applicant Name" : ApplicantNameReducer,
    "Father's Name": NameReducer,
    "Aadhaar Details" : NameReducer,
    "Name On PAN" : DropdownReducer,
    "Date of Birth" : NameReducer,
    "Gender": categoryReducer,
    "Maritial Status" : categoryReducer,
},
"Contact Details" : {
    "Mobile" : numberReducer,
    "Email" : NameReducer,
    "Communication": categoryReducer,
    "Land Line": numberReducer
},

"Document Proof" : {
    "ID Proof" : DropdownReducer,
    "Address Proof" : DropdownReducer,
    "Date of birth": DropdownReducer  
},
"Income Source":{
    "Income Info" : categoryReducer
},

"Address Information":{
    "Address Info" : NameReducer,
    "Locality" : NameReducer,
    "Region" : NameReducer,
    "Country" : numberReducer
}

}

function reducerResolver(section,target){
    return reducerMap[section][target]
}

function nameCombo(nameObj){
    const lastName = nameObj['lastName']['value'];
    const firstName = nameObj['firstName']['value'];
    const middleName = nameObj['middleName']['value'];
    const options =[];
    options.push(lastName)
    
    if(firstName !== "") {
    options.push(lastName.split('')[0] + ' ' + firstName)
    options.push(firstName)
    options.push(lastName + ' ' + firstName)
    options.push(firstName + ' ' + lastName)
    }
    return options;
}

function NameReducer (state,action){
    const newSection ={}
    const oldName = state[action.target['section']]
    const newName = Object.assign({},oldName)
    if(action.target['subSection'] === 'salutations'){
        
        Object.keys(newName['salutations']).map(k=> newName['salutations'][k]['value']=false)
        newName['salutations'][action.target['value']]['value'] = true
        newSection[action.target['section']]= newName;
    }
    else{
        newName[action.target['subSection']]['value'] =action.target['value'].toUpperCase()
        newSection[action.target['section']]= newName;
    
    }
}

function numberReducer (state,action){
        const newSection ={}
        const oldNumber = state[action.target['section']]
        const newNumber = Object.assign({},oldNumber)
        var number = action.target['value'];
        if(!isNaN(number)){
            newNumber[action.target['subSection']]['value'] = number.toString().slice(0,newNumber[action.target['subSection']]['length']);
        }
        newSection[action.target['section']]= newNumber;
    return newSection;

}


function ApplicantNameReducer (state,action){
    const newSection ={}
    const oldName = state[action.target['section']]
    const newName = Object.assign({},oldName)
    if(action.target['subSection'] === 'salutations'){
        
        Object.keys(newName['salutations']).forEach(k=> {
            newName['salutations'][k]['selectValue']=false;
            newName['salutations'][k]['value']="";
    })
        newName['salutations'][action.target['value']]['selectValue'] = true
        newName['salutations'][action.target['value']]['value'] = action.target['value']

        newSection[action.target['section']]= newName;
    }
    else{
        newName[action.target['subSection']]['value'] =action.target['value'].toUpperCase()
        newSection[action.target['section']]= newName;
        let options = nameCombo(newName)
        // options.push(newName['lastName']['value'])
        newSection['Name On PAN'] = {'selectedName': options[0], "options": options}
    
    }

    return newSection;

}

function DropdownReducer(state,action){
    console.log(action)
    const newSection ={}
    const oldOptions = state[action.target['section']]
    const newOptions = Object.assign({},oldOptions)
    newOptions['selectedName']= action.target['value'];
    newSection[action.target['section']] = newOptions
    return newSection;
}

function categoryReducer (state,action) {
        const newSection ={};
        const oldCategory = state[action.target['section']]
        const newCategory = Object.assign({}, oldCategory)
        Object.keys(newCategory).forEach(key => {
            newCategory[key]['selectValue'] = false
            newCategory[key]['value'] = ""

        });
        newCategory[action.target['subSection']]['selectValue'] = true;
        newCategory[action.target['subSection']]['value'] = action.target['subSection'];

        newSection[action.target['section']]=newCategory;

        return newSection
}

function reducer(state,action){
    if (action.type === 'UPDATEPERSONALINFO'){
        const oldPersonalDetails  = state["Personal Details"]
        const subReducer = reducerResolver("Personal Details", action.target['section'])
        let target={};
        target = subReducer(oldPersonalDetails,{target:action.target})
        const newPersonalDetails =  Object.assign({}, oldPersonalDetails, target);
        const newState = { ...state, "Personal Details":newPersonalDetails, "Document Proof" : 
        {
            "ID Proof" : {"selectedName": "Voters Identity Card", "options": ["Voters Identity Card","Driving License","Passport","Certificate of Identity signed by a Gazetted Officer in prescribed format only"
            ,"Certificate of Identity signed by a MP in prescribed format only"
             ,"Certificate of Identity signed by a MLA in prescribed format only"
             ,"Certificate of Identity signed by a Municipal Councilor in prescribed format only"
             ,"Aadhaar Card issued by Unique Identification Authority of India"
             ,"Ration Card with photograph"
             ,"Arms License"
             ,"Pensioner Card with Photograph"
             ,"Central Government Health Scheme Card"
             ,"Ex-servicemen Contributory Heath Scheme photo card"
             ,"Photo Identity card issued by the Central Government/State Government/Public Sector Undertaking"
]},
          "Address Proof" : {"selectedName": "Voters Identity Card", "options" : ["Voters Identity Card","Driving License","Passport","Bank Account Statement","Credit Card Statement","Landline telephone or broadband connection bill ","Employer Certificate","Electricity Bill","Depository Account Statement","Certificate of Address signed by a Gazetted Officer in prescribed format only","Certificate of Address signed by a MP in prescribed format only","Certificate of Address signed by a MLA in prescribed format only","Certificate of Address signed by a Municipal Councillor  in prescribed format only","Aadhaar Card issued by Unique Identification Authority of India","Water Bill","Consumer Gas Connection Card","Passport of the spouse","Post office pass book ","Domicile Certificate issued by the Government","Allotment letter of accommodation issued by Central/state Government less than 3 years old","Property Registration Document","Latest Property Tax Assessment Order","Elector's Photo Identity Card"]  },
          "Date of birth" : {"selectedName" : "Birth Certificate issued by the Municipal Authority", "options": ["Birth Certificate issued by the Municipal Authority","Pension Payment Order","Marriage certificate issued by Registrar of Marriages","Matriculation certificate","Domicile certificate issued ","Affidavit sworn before a magistrate stating the date of birth by the Government","Driving License","Passport","Aadhaar Card issued by Unique Identification Authority of India"	]}
        }
    }
    return newState
    }

    if (action.type === 'UPDATECONTACTINFO'){
        const oldContactDetails  = state["Contact Details"]
        const subReducer = reducerResolver("Contact Details",action.target['section'])
        let target={};
        target = subReducer(oldContactDetails,{target:action.target})
        const newContactDetails =  Object.assign({}, oldContactDetails, target);
        const newState = { ...state, "Contact Details":newContactDetails}
    return newState
    }    
    if (action.type === 'UPDATEDOCUMENTINFO'){
        const oldDocumentDetails  = state["Document Proof"]
        const subReducer = reducerResolver("Document Proof",action.target['section'])
        let target={};
        target = subReducer(oldDocumentDetails,{target:action.target})
        const newDocumentDetails =  Object.assign({}, oldDocumentDetails, target);
        const newState = { ...state, "Document Proof":newDocumentDetails}
    return newState
    }    
    if (action.type === 'UPDATEINCOMEINFO'){
        const oldDocumentDetails  = state["Income Source"]
        const subReducer = reducerResolver("Income Source",action.target['section'])
        let target={};
        target = subReducer(oldDocumentDetails,{target:action.target})
        const newDocumentDetails =  Object.assign({}, oldDocumentDetails, target);
        const newState = { ...state, "Income Source":newDocumentDetails}
    return newState
    }    
    if (action.type === 'UPDATEADDRESSINFO'){
        const oldDocumentDetails  = state["Address Information"]
        const subReducer = reducerResolver("Address Information",action.target['section'])
        let target={};
        target = subReducer(oldDocumentDetails,{target:action.target})
        const newDocumentDetails =  Object.assign({}, oldDocumentDetails, target);
        const newState = { ...state, "Address Information":newDocumentDetails}
    return newState
    }    

    if (action.type === 'VALIDATEFORM'){

        const Details ={}
        const oldDetails = state[action.section]
        const newDetails = Object.assign({},oldDetails)

        // Object.keys(newDetails).map ( k => {
           
        // })

        const obj = newDetails[action.target['section']]
        obj['validation'] =[]
        Object.keys(obj).forEach(key => {
            if(obj[key]['required'] && obj[key]['value'] ===''){
                obj['validation'].push(key)
            }
        })

        Details[action.target] = newDetails
        const newState = {...state,Details}    
        return newState;

    }
    else{
        return state;
    }
}

export {reducer};