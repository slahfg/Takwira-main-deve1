import React, { useEffect, useState } from "react";


import Menu from "../../AdminCommun/menu"

import DatatablePage from "./table"

import Header from "../../AdminCommun/header"

import { MDBDataTable } from 'mdbreact';




function AdminListeStade() {



    return (
      <div id="wrapper" className="in  ">
        <Header />
        <Menu />

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
                      <div className="card-header">
                        {" "}
                        <h4>List of stadiums </h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          {/* <DatatablePage /> */}
                          <DatatablePage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Row*/}
              </div>

              {/* End container-fluid*/}
            </div>
            {/*End content-wrapper*/}
          </div>
        </div>
        <footer />
      </div>
    );
  }
  
  export default AdminListeStade;