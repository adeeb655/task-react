import React from "react";
const Validation =(values)=> {
    let errors={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
        errors.name = "Username is required!";
      }else if (!regex.test(values.name)) {
        // errors.name = "Please enter user name";
      }
    if(!values.email){
        errors.email = "Email is required";
    }else if(!regex.test(values.email)){
        errors.email = "Email is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
    return errors;
};
export default Validation;