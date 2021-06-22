import React from 'react'

const validationAddOwner=(values)=> {
    let errors = {};
    if (!values.name) {
      errors.name ="Name is required";

    }
    if (!values.email) {
        errors.email ="Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 10) {
      errors.password = "Password needs to be more than 10 characters";
    }
    if (!values.cin) {
      errors.cin = "cin is required";
     
    } else if (values.cin.length <8) {
      errors.cin = "cin needs to be 8 numbers";
    }else if (values.cin.length >8) {
      errors.cin = "cin needs to be 8 numbers";
    }

    if (!values.telephone) {
      errors.telephone = "telephone is required";
    } else if (values.telephone.length <8) {
      errors.telephone = "telephone needs to be 8 numbers";
    }else if (values.telephone.length >8) {
      errors.telephone = "telephone needs to be 8 numbers";
    }

    if (values.dateNaiss=="") {
      errors.dateNaiss = "date is required";}

      if (!values.codePostal) {
        errors.codePostal = "code Postal  is required";
      } else if (values.codePostal.length <4) {
        errors.codePostal = "code Postal needs to be 4 numbers";
      }else if (values.codePostal.length >4) {
        errors.codePostal = "code Postal needs to be 4 numbers";
      }
  

      if (!values.adress) {
        errors.adress ="adress is required";
  
      }
    return errors;
    
}

export default validationAddOwner