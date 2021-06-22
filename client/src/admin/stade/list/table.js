import React ,{useEffect,useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios"


import useFetch from "react-fetch-hook";


const DatatablePage = () => {
  const { data } = useFetch("http://localhost:3100/stadiums/all");
  console.log(data?.result);

  
  const data1 = {
    columns: [
      {
        label: "label",
        field: "label",
        sort: "asc",
        width: 200,
      },
      {
        label: " titel",
        field: "titel",
        sort: "asc",
        width: 200,
      },
      {
        label: "discrption",
        field: "discrption",
        sort: "asc",
        width: 200,
      },
      {
        label: "locationHelper ",
        field: "locationHelper",
        sort: "asc",
        width: 100,
      },

      {
        label: "reviews",
        field: "reviews",
        sort: "asc",
        width: 100,
      },
      {
        label: "likes",
        field: "likes",
        sort: "asc",
        width: 100,
      },

      {
        label: "created_at",
        field: "created_at",
        sort: "asc",
        width: 100,
      },
      {
        label: "updated_at",
        field: "updated_at",
        sort: "asc",
        width: 100,
      },
      {
        label: "active",
        field: "active",
        sort: "asc",
        width: 100,
      },
      {
        label: " supprimer",
        field: "supprimer",
        sort: "asc",
        width: 100,
      },
    ],
    rows: 
      data?.result ? (data?.result).map((x) => {
        return {
          label: x.label,
          titel: x.titel,
          discrption: x.discrption,
          locationHelper: x.locationHelper,
          reviews: x.reviews,
          likes: x.likes,
          created_at: x.created_at,
          updated_at: x.updated_at,
          active: x.active,
          
        };
      }):[]
    ,
  };
console.log(data1)
  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data1}
    >
   


    </MDBDataTable>
  );
}

export default DatatablePage;