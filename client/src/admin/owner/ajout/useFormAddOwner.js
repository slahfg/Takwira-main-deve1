import React from 'react'
import { useState,useEffect } from "react";

const useFormAddOwner=(callback, validationAddOwner) => {

    const [values, setValues] = useState({ nom:"",cin:"",email: "", password: "",telephone:"" ,dateNaiss:"",adress:"",codePostal:""});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleOnChange = (event) => {
      const { name, value } = event.target;
  
      setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validationAddOwner(values));
        setIsSubmitted(true)
      };
    
      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
          callback();
        }
      }, [errors]);

    return {
        handleOnChange,
        handleSubmit,
        values,
        errors,
      };
}

export default useFormAddOwner