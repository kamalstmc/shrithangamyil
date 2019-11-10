function NewPanForm() {
    return ({
        "Personal Details": {
            "Category of Applicant": {
                "Individuals": { "label": "Individuals", "selectValue": true, "value": "Individuals" },
                // "Hindu undivided Family" : { "label": "Hindu undivided Family","value": false},
            },
            "Applicant Name": {
                "salutations": { "Shri": { "label": "Shri", "selectValue": true, "value": "Shri" }, "Smt.": { "label": "Smt.", "selectValue": false }, "Kumari": { "label": "Kumari", "selectValue": false } },
                "lastName": { "label": "Last Name", "value": "", "required": true },
                "firstName": { "label": "First Name", "value": "", "required": false },
                "middleName": { "label": "Middle Name", "value": "", "required": false }
            },
            "Name On PAN" :{},
            "Father's Name": {
                // "salutations" : {"Shri" : {"label": "Shri", "value": true} },
                "lastName": { "label": "Last Name", "value": "", "required": true },
                "firstName": { "label": "First Name", "value": "", "required": false },
                "middleName": { "label": "Middle Name", "value": "", "required": false }
            },
            "Aadhaar Details": {
                "Number": { "label": "Aadhaar Number", "value": "", "required": true },
                "Name as per Aadhar": { "label": "Aadhaar Name", "value": "", "required": true },

            },
            "Date of Birth": {
                "DOB": { "label": "Birth Date", "value": "", "required": true },
            },
            "Gender": {
                "Male": { "label": "Male", "selectValue": true, "value": "Male" },
                "Female": { "label": "Female", "selectValue": false },
                "Transgender": { "label": "Transgender", "selectValue": false },

            },
            "Maritial Status": {
                "Single": { "label": "Single", "selectValue": true, "value": "Single" },
                "Married": { "label": "Married", "selectValue": false },
            },

        },
        "Contact Details": {
            "Mobile": {
                "Country Code": { "label": "Country Code", "value": "91", "disabled": true },
                "Number": { "label": "Number", "value": "", "required": true, "length": 10 }
                // "Hindu undivided Family" : { "label": "Hindu undivided Family","value": false},
            },
            "Email": {
                "Email Id": { "label": "Email Id", "value": "", "required": true }
            },
            "Land Line": {
                "Area Code": { "label": "Area Code", "value": "", "length": 4 },
                "Phone": { "label": "Phone Number", "value": "", "length": 7 }
            },
            "Communication": {
                "Residence": { "label": "Residence", "selectValue": true, "value": "Residence" },
                "Office": { "label": "Office", "selectValue": false, "value": "" }
            }
        },
        "Document Proof": {},
        "Income Source": {

            "Income Info": {
                "Salary": { "label": "Salary", "selectValue": true, "value": "Salary" },
                "Income from Business/Profession": { "label": "Income from Business/Profession", "selectValue": false, "value": "" },
                "Income from House Property": { "label": "Income from House Property", "selectValue": false, "value": "" },
                "Capital Gains": { "label": "Capital Gains", "selectValue": false, "value": "" },
                "Income from Other Sources": { "label": "Income from Other Sources", "selectValue": false, "value": "" },
                "No Income": { "label": "No Income", "selectValue": false, "value": "" },
            }

        },
        "Address Information": {
            "Address Info": {
                "Flat": { "label": "Flat/Room/Door/Block No.", "value": "" },
                "Building": { "label": "Name of Premises/Building/Village", "value": "" },
            },
            "Locality": {
                "Street": { "label": "Road/Street/Lane/Post Office", "value": "" },
                "Area": { "label": "Area/Locality/Taluka/Sub-Division", "value": "" },
            },
            "Region": {
                "State": { "label": "State/Union Territory", "value": "" },
                "City": { "label": "Town/City/District", "value": "" },

            },
            "Country": {
                "PinCode": { "label": "Pincode", "value": "", "length": 7 },
                "Country": { "label": "Country", "value": "India", "disabled": true },

            }
        },

        "Declaration": {}

    })

}

export { NewPanForm }