import React from "react";
import { Paper } from "@material-ui/core";
export default function About(props) {
  return (
    <Paper style={{ padding: 16, textAlign: "center" }}>
      <h2>{props.title} </h2>
      <img src={props.img} alt="stade img" style={{ height: "50vh" }} />
      <p>{props.description}</p>
    </Paper>
  );
}
