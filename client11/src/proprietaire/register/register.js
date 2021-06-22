import React,{useState,useEffect} from 'react'
import GoogleButton from "react-google-button";
import useFormRegister from "./useFormRegister";
import validationRegister from "./validationRegister"
import "react-datepicker/dist/react-datepicker.css"
import axios from"axios"
import ErreurMessage from "../commun/erreurMessage"
const Register=()=> {
  const  [erreurMsg,setErreurMsg]=useState("");
    const {handleOnChange,
        handleSubmit,values,errors}= useFormRegister (submit,validationRegister);
        function submit()
        {
          console.log("submmited")
          axios.post('https://anti-covid-19.herokuapp.com/api/admin/register',values)
          .then(res=>{console.log(res)
            window.location.href='http://localhost:3000/login'
          }
          )
          .catch(err=>{setErreurMsg(err.message)})
        }

    return (
      
       <div id="wrapper" >
      <div className="card card-authentication1 mx-auto my-5">
        <div className="card-body">
          <div className="card-content p-2">
            <div className="text-center">
              <img src="assets/images/logo-icon.png" alt="logo icon" />
            </div>
            <div className="card-title text-uppercase text-center py-3">
              Sign up
            </div>
            <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label for="InputRegisterNom"> Name</label>
                <div className="position-relative has-icon-right ">
                  <input  
                    type="text"
                    name="name"
                    id="InputRegisterNom"
                    className="form-control input-shadow"
                    placeholder="Enter Your  Name"
                    value={values.name}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-user" />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
              </div>
            
            


              <div className="form-group">
                <label for="InputRegisterNom">cin</label>
                <div className="position-relative has-icon-right ">
                  <input  
                    type="number"
                    name="cin"
                    id="InputRegistercin"
                    className="form-control input-shadow"
                    placeholder="Enter Your Cin"
                    value={values.cin}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="zmdi zmdi-card" />
                  </div>
                  {errors.cin && <p className="error">{errors.cin}</p>}
                </div>
              </div>
            
            
              <div className="form-group">
                <label>Email</label>
                <div className="position-relative has-icon-right ">
                  <input
                  
                    type="Email"
                    name="email"
                    id="InputUserEmail"
                    className="form-control input-shadow"
                    placeholder="Enter Your Email"
                    value={values.email}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="zmdi zmdi-email" />
                  </div>

                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="password"
                    type="password"
                    id="InputPassword"
                    className="form-control input-shadow"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-lock" />
                  </div>
                  {errors.password && <p className="error">{errors.password}</p>}
                </div>
              </div>
            
            
            
              <div className="form-group">
                <label>Telephone</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="telephone"
                    type="number"
                    id="InputTelephone"
                    className="form-control input-shadow"
                    placeholder="Enter telephone number"
                    value={values.telephone}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="fa fa-phone" />
                  </div>
                  {errors.telephone && <p className="error">{errors.telephone}</p>}
                </div>
              </div>
           
             

              <div className="form-group">
                <label>Date de Naissance</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="dateNaiss"
                    type="date"
                    id="InputDateNaiss"
                    className="form-control input-shadow"
                    
                
                    value={values.dateNaiss}
                    onChange={handleOnChange}
                  />
       
                  {errors.dateNaiss && <p className="error">{errors.dateNaiss}</p>}
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="adress"
                    type="text"
                    id="InputAdress"
                    className="form-control input-shadow"
                    
                
                    value={values.adress}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">  
                  <i className="icon-user" />
                  </div>
                  {errors.adress && <p className="error">{errors.adress}</p>}
                </div>
              </div>
              <div className="form-group">
                <label for="InputRegisterNom"> code Postal</label>
                <div className="position-relative has-icon-right ">
                  <input  
                    type="text"
                    name="codePostal"
                    id="InputcodePostal"
                    className="form-control input-shadow"
                    placeholder="Enter Your  code Postal"
                    value={values.codePostal}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-user" />
                  </div>
                  {errors.codePostal && <p className="error">{errors.codePostal}</p>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-6">
                  <div className="icheck-material-primary">
                    <input type="checkbox" id="user-checkbox" defaultChecked />
                    <label htmlFor="user-checkbox">I AGREE WITH TERMS </label>
                  </div>
                </div>
              
              </div>
              <button
                type="submit"
                className=" mt-3 btn btn-primary shadow-primary btn-block waves-effect waves-light"
              >
                Sign up
              </button>
            
            
            </form>
          </div>
        </div>
        <div className="card-footer text-center py-3">
          <p className="text-muted mb-0">
          Already have an account?{" "}
            <a href="/login"> Sign in here</a>
          </p>
        </div>

  
        <ErreurMessage msg={erreurMsg}/>

      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />{" "}
      </a>
    </div>
    
    )
}

export default Register;