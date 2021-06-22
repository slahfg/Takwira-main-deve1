import React,{useState,useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import axios from"axios"
import { useSelector,useDispatch } from 'react-redux'
import { setAlert } from '../../action/alert'
import { register } from '../../action/auth'
import Alert from '../../components/Layout/Alert'
import { Redirect } from "react-router-dom";

const Register=()=> {
const dispatch = useDispatch()
const state=useSelector((stet)=>stet.Auth)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    ConfirmePassword:'',
    cin:'',
    telephone:'',
    adress:''
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    const{name,email,password,ConfirmePassword,cin,telephone,adress}=formData

    if(password!==ConfirmePassword){
      dispatch(setAlert('Mot de passe non compatible'))
    }else{
      dispatch(register({ name, cin, email, telephone, adress, password }))
    }
   
  }
  if(state.isAuthenticated){
    return <Redirect to='/ListeStade' />
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
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-user" />
                  </div>
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
                    value={formData.cin}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">
                    <i className="zmdi zmdi-card" />
                  </div>
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
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">
                    <i className="zmdi zmdi-email" />
                  </div>
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
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">
                    <i className="fa fa-phone" />
                  </div>
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
                    
                
                    value={formData.adress}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">  
                  <i className="icon-user" />
                  </div>
            
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
              <div className="form-group">
                <label>Password</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="password"
                    type="password"
                    id="InputPassword"
                    className="form-control input-shadow"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-lock" />
                  </div>
                </div>
              </div> 
               <div className="form-group">
                <label>Password Confirmation</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="ConfirmePassword"
                    type="password"
                    id="InputPassword"
                    className="form-control input-shadow"
                    placeholder="Enter Password"
                    value={formData.ConfirmePassword}
                    onChange={handleInputChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-lock" />
                  </div>
                </div>
              </div>
              <Alert/>
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

  

      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />{" "}
      </a>
    </div>
    
    )
}

export default Register;