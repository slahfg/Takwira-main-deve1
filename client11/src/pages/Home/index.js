import React from "react";
import Banner from "./Banner";
import CardSlider from "../../common/CardSlider";
import About from "./About";
import { ThemeProvider, Container } from "@material-ui/core";
import theme from "../../theme";

import Navbar from "../../components/Navbar"

export default function Home() {
  const connection = true;
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

  return (
    <ThemeProvider theme={theme}>
    <Navbar connected={connection} />
    <Container maxWidth="md">
    <div>
      <Banner />
      <About />
      <CardSlider stadiums={stadiums} />
    </div>
    </Container>
    </ThemeProvider>
  );
}
