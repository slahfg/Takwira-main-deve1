import React, { useState } from "react";
import "../../index.css";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../../action/auth";
import Alert from "../../components/Layout/Alert";
import { Redirect } from "react-router-dom";
const Login = () => {
  const state=useSelector((stet)=>stet.Auth)
const dispatch = useDispatch()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const [formData,setFormData]=useState({
        email:'',
        password:''
      })

      const handleSubmit=(e)=>{
        e.preventDefault()
        const{email,password}=formData
        dispatch(login({email,password}))
      }

      if(state.isAuthenticated){
        return <Redirect to='/ListeStade' />
      }

    return (
        <div id="wrapper">
        <div className="card card-authentication1 mx-auto my-5">
          <div className="card-body">
            <div className="card-content p-2">
              <div className="text-center">
                <img src="assets/images/logo-icon.png" alt="logo icon" />
              </div>
              <div className="card-title text-uppercase text-center py-3">
                Sign In
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <Alert/>
                <div className="form-group">
                  <label>Email</label>
                  <div className="position-relative has-icon-right ">
                    <input
                      type="Email"
                      name="email"
                      className="form-control input-shadow"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e)=>handleInputChange(e)}
                    />
                    <div className="form-control-position">
                      <i className="zmdi zmdi-email" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="position-relative has-icon-right">
                    <input
                      name="password"
                      type="password"
                      className="form-control input-shadow"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={(e)=>handleInputChange(e)}
                    />
                    <div className="form-control-position">
                      <i className="icon-lock" />
                    </div>
                    
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <div className="icheck-material-primary">
                      <input type="checkbox" id="user-checkbox" defaultChecked />
                      <label htmlFor="user-checkbox">Remember me</label>
                    </div>
                  </div>
                  <div className="form-group col-6 text-right">
                    <a href="authentication-reset-password.html">
                      Reset Password
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" mt-3 btn btn-primary shadow-primary btn-block waves-effect waves-light"
                >
                  Sign In
                </button>
  
              
              </form>
            </div>
          </div>
          <div className="card-footer text-center py-3">
            <p className="text-muted mb-0">
              Do not have an account? <a href="/register"> Sign Up here</a>
            </p>
          </div>
        </div>
        <a href="#" className="back-to-top">
          <i className="fa fa-angle-double-up" />{" "}
        </a>
      </div>
    )
}

export default Login