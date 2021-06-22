import React from "react";
import Card from "../../common/Card";
import { styles } from "./styles.js";
import { makeStyles } from "@material-ui/core/styles";
import { stadiums } from "./data";
import { Grid } from "@material-ui/core";
import { ThemeProvider, Container } from "@material-ui/core";
import theme from "../../theme";

import Navbar from "../../components/Navbar"
const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  const connection = true;
  return (

    <ThemeProvider theme={theme}>
    <Navbar connected={connection} />
    <Container maxWidth="md">
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
        
      >
        {stadiums.map((stade) => (
          <Grid item>
            <Card {...stade} />
          </Grid>
        ))}
      </Grid>
    </div>
    </Container>
    </ThemeProvider>
  );
}
