import React ,{useEffect,useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios"




const DatatablePage = () => {
 

  
    const data = {
    columns: [
      {
        label: 'team',
        field: 'team',
        sort: 'asc',
        width: 200
      },
      {
        label: ' stade',
        field: 'stade',
        sort: 'asc',
        width: 200
      },
      {
        label: 'date_rent',
        field: 'date_rent',
        sort: 'asc',
        width: 200
      }, 
    
   
    ],

  
    
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    >
   


    </MDBDataTable>
  );
}

export default DatatablePage;