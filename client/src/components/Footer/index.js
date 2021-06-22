import React from "react";
import { Grid, Container, Divider } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LOGO from "@material-ui/icons/SportsSoccerTwoTone";

const styles = {
  el: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "baseline",
    alignContent: "stretch",
  },
};
export default function Footer() {
  return (
    <div
      style={{
        minHeight: 300,
        background: "#202020",
        color: "gray",
        paddingTop: 64,
        paddingBottom: 64,
        marginTop: 32,
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item style={styles.el}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LOGO style={{ height: 128, width: 128, marginBottom: 16 }} />
              <strong>TAKWIRA TKTK</strong>
            </div>
          </Grid>
          <Grid item style={styles.el}>
            <strong style={{ marginBottom: 16 }}>Links </strong>
            <a>Lien here </a>
            <a>Lien here </a>
            <a>Lien here </a>
            <a>Lien here </a>
          </Grid>
          <Grid item style={styles.el}>
            <strong style={{ marginBottom: 16 }}>Links </strong>
            <a>Lien here </a>
            <a>Lien here </a>
            <a>Lien here </a>
            <a>Lien here </a>
          </Grid>
          <Grid item style={styles.el}>
            <strong style={{ marginBottom: 16 }}>Links </strong>
            <a>Lien here </a>
            <a>Lien here </a>
            <a>Lien here </a>
            <a>Lien here </a>
          </Grid>
        </Grid>
        <Divider style={{ background: "gray", margin: 32 }} />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item style={{ marginBottom: 16 }}>
            WEB2CODE © 2021
          </Grid>
          <Grid item>
            <TwitterIcon />
            <FacebookIcon style={{ marginLeft: 16 }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
