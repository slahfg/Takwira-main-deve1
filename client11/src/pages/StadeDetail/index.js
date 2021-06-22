import React, { useState } from "react";

import CardSlider from "../../common/CardSlider";
import About from "./About";

export default function StadeDetail(props) {
  var Stade;
   const stadiums = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepfMya4Ta--se0RhZVS6KUuiPosodqHco52yVN8OkmZxyvw6J_YMIsryyzxFSXEKbwMg&usqp=CAU",
      title: "Marsa",
      description: "Stade Gason de 90m² prés de l'Agora",
    },
    {
      id: 2,
      image:
        "http://www.evergreen.tn/images/1939403-666489016746454-789161984-o.jpg",
      title: "Mounastir",
      description: "Stade Gason de 90m² prés de l'ISIMM",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepfMya4Ta--se0RhZVS6KUuiPosodqHco52yVN8OkmZxyvw6J_YMIsryyzxFSXEKbwMg&usqp=CAU",
      title: "Marsa",
      description: "Stade Gason de 90m² prés de l'Agora",
    },
    {
      id: 4,
      image:
        "http://www.evergreen.tn/images/1939403-666489016746454-789161984-o.jpg",
      title: "Mounastir",
      description: "Stade Gason de 90m² prés de l'ISIMM",
    },
  ];
console.log(props);
if (props.location && props.location.state && props.location.state.StadeID)
  Stade=stadiums.find((x) => x.id === props.location.state.StadeID);
  
  return (
    <div>
      <About
        description={Stade?.description}
        title={Stade?.title}
        img={Stade?.image}
      />
    </div>
  );
}
