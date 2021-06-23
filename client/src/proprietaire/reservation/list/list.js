import React, { useEffect, useState } from "react";
import axios from 'axios'

import Menu from "../../commun/menu"

import DatatablePage from "./table"

import Header from "../../commun/header"




function ListeReservation() {
 
  const [res, setRes]=useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/stadiums/all')
      .then((res)=>{
          setRes(res.data.result)
    })
  },[]);

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
                  <div className="card-header"> <h4>List of Reservation </h4></div>
                  <div className="card-body">
                    <div className="table-responsive">
                          <DatatablePage stade={res}/>
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
  
  export default ListeReservation;