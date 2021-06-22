import React,{useState,useEffect} from 'react'
import Menu from "../../AdminCommun/menu";
import Header from "../../AdminCommun/header";
import useFormAddOwner from"./useFormAddOwner"
import validationAddOwner from "./validationAddOwner"
import axios from "axios"
const FormAddOwner=()=> {


    const {
      handleOnChange,
      handleSubmit,
      values,
      errors,
    } = useFormAddOwner(submit, validationAddOwner);

    const [data, setData] = useState({
        name: "",
        cin: "",
        email: "",
        dateNaiss: "",
        adress: "",
        telephone: "",
        codePostal: "",
    
    });

    function submit() {
      console.log("submmited");
      console.log(data);
      const newData = {...data}
      console.log({data})
      console.log({newData})
      axios
        .put("https://anti-covid-19.herokuapp.com/api/hospitals", newData, {
          headers: { Authorization: "Bearer "+localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

      
        data.name=values.name
        data.cin=values.cin
        data.email=values.email
        data.dateNaiss=values.dateNaiss
        data.adress=values.adress
        data.telephone=values.telephone
        data.codePostal=values.codePostal
    
  
        return (
          <div id="wrapper"  className="in  ">
            <Header />
            <Menu />

            <div>
              <div className="clearfix" />
              <div className="content-wrapper">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title text-info">
                      <h4>Add owner </h4>
                    </div>
                    <hr />

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="form-group row">
                        <label
                          htmlFor="input-26"
                          className="col-sm-2 col-form-label"
                        >
                          Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            name="name"
                            id="inputNom"
                            className="form-control form-control-rounded"
                            placeholder="Enter owner Name"
                            value={values.name}
                            onChange={handleOnChange}
                          />
                          {errors.name && (
                            <p className="error mt-1 ml-3">{errors.name}</p>
                          )}
                        </div>
                      </div>

                   
                        

                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Cin
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="cin"
                            id="inputCin"
                            type="number"
                            className="form-control form-control-rounded"
                            placeholder="Enter cin"
                            value={values.cin}
                            onChange={handleOnChange}
                          />
                          {errors.cin && (
                            <p className="error mt-1 ml-3">
                              {errors.cin}
                            </p>
                          )}
                        </div>
                      </div>

                  
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          email
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="email"
                            id="inputemail"
                            type="text"
                            className="form-control form-control-rounded"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleOnChange}
                          />
                          {errors.email && (
                            <p className="error mt-1 ml-3">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                  
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                        dateNaiss
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="dateNaiss"
                            id="inputdateNaiss"
                            type="date"
                            className="form-control form-control-rounded"
                            placeholder="Enter dateNaiss"
                            value={values.dateNaiss}
                            onChange={handleOnChange}
                          />
                          {errors.dateNaiss && (
                            <p className="error mt-1 ml-3">
                              {errors.dateNaiss}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="input-26"
                          className="col-sm-2 col-form-label"
                        >
                          telephone
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="telephone"
                            type="number"
                            id="inputTel"
                            className="form-control form-control-rounded"
                            placeholder="Enter Hospital telephone"
                            value={values.telephone}
                            onChange={handleOnChange}
                          />
                          {errors.telephone && (
                            <p className="error mt-1 ml-3">
                              {errors.telephone}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="input-28"
                          className="col-sm-2 col-form-label"
                        >
                        Address
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="adress"
                            type="text"
                            className="form-control form-control-rounded"
                            id="inputAddress"
                            placeholder="Enter adress"
                            value={values.adress}
                            onChange={handleOnChange}
                          />
                          {errors.adress && (
                            <p className="error mt-1 ml-3">
                              {errors.adress}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="input-28"
                          className="col-sm-2 col-form-label"
                        >
                        codePostal
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="codePostal"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputcodePostal"
                            placeholder="Enter codePostal"
                            value={values.codePostal}
                            onChange={handleOnChange}
                          />
                          {errors.codePostal && (
                            <p className="error mt-1 ml-3">
                              {errors.codePostal}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      



              
                      
                     

                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label" />
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label" />
                        <div className="col-sm-10">
                          <button
                            type="submit"
                            className="btn btn-success btn-round waves-effect waves-light  px-5"
                          >
                            <i className="icon-plus icons " /> Add
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*End content-wrapper*/}
            </div>
          </div>
        );
}

export default FormAddOwner;