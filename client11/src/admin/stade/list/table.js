import React ,{useEffect,useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios"




const DatatablePage = () => {
 

  
    const data = {
    columns: [
      {
        label: 'label',
        field: 'label',
        sort: 'asc',
        width: 200
      },
      {
        label: ' titel',
        field: 'titel',
        sort: 'asc',
        width: 200
      },
      {
        label: 'discrption',
        field: 'discrption',
        sort: 'asc',
        width: 200
      }, 
      {
        label: 'locationHelper ',
        field: 'locationHelper',
        sort: 'asc',
        width: 100
      },

   
    
      {
        label: 'reviews',
        field: 'reviews',
        sort: 'asc',
        width: 100
      },
      {
        label: 'likes',
        field: 'likes',
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