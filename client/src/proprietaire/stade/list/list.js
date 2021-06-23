import React, { useEffect, useState } from "react";

import axios from 'axios'
import Menu from "../../commun/menu"

import DatatablePage from "./table"

import Header from "../../commun/header"




function ListeStade() {


   const [stade, setStade]=useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/stadiums/all')
      .then((res) => {
        console.log(res.data.result)
          setStade(res.data.result)
    })
  }, []);
  
  
    return (
      <div id="wrapper"  className="in  " >
      
        <Header/><Menu/>
    
        <div>
      
      <div>
        <div className="clearfix" />
        <div className="content-wrapper">
          <div className="container-fluid">
            {/* Breadcrumb*/}
            
            {/* End Breadcrumb*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header"> <h4>List of stadiums </h4></div>
                  <div className="card-body">
                    <div className="table-responsive">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">label</th>
      <th scope="col">titre</th>
                                <th scope="col">description</th>
                                <th scope="col">localtion Helper</th>
                                <th scope="col">images</th>
    </tr>
                            </thead>
                            <tbody>
                            { stade.map((data,i) => 
      <tr>
                                <td>Stade {i}</td>
                                <td>{data.label}</td>
                                <td>{data.titel}</td>
                                <td>{data.discrption}</td>
                                <td>{data.locationHelper}</td>
                                <td>{data.image}</td>
                                
    </tr>
                              )}
                            </tbody>
                            </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Row*/}
          
          </div>

  
          {/* End container-fluid*/}
        </div>{/*End content-wrapper*/}
      </div>
      </div>
    <footer/>
    </div>
    );
  }
  
  export default ListeStade;