import React ,{useEffect,useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios"




const DatatablePage = () => {
 

  
    const data = {
    columns: [
      {
        label: 'name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'cin',
        field: 'cin',
        sort: 'asc',
        width: 200
      },
      {
        label: 'email',
        field: 'email',
        sort: 'asc',
        width: 200
      }, 
      {
        label: 'dateNaiss ',
        field: 'dateNaiss',
        sort: 'asc',
        width: 100
      },

   
    
      {
        label: 'adress',
        field: 'adress',
        sort: 'asc',
        width: 100
      },
      {
        label: 'telephone',
        field: 'telephone',
        sort: 'asc',
        width: 100
      },

      {
        label: 'codePostal',
        field: 'codePostal',
        sort: 'asc',
        width: 100
      },

      {
        label: 'created_at',
        field: 'created_at',
        sort: 'asc',
        width: 100
      },
      {
        label: 'updated_at',
        field: 'updated_at',
        sort: 'asc',
        width: 100
      },
      {
        label: 'active',
        field: 'active',
        sort: 'asc',
        width: 100
      },
      {
        label: ' supprimer',
        field: 'supprimer',
        sort: 'asc',
        width: 100
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