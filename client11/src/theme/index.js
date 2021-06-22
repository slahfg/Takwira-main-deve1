import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333"
      //main: "#011D52"
    },
    secondary:{
      main: "#BE92A2"
    },
    red:{
      main:"#c62828"
    },
    bluesky:{
      main:"#4287f5"
    },
    yellow:{
      main:"#EDAB48"
    },
    green:{
      main: "#3A8A79"
    },
    purpel:{
      main:"#59458F"
    },
    warning: {
      main: "#e53935"
    },    
    success: {
      main: "#55AB48"
    },    
    white: {
      main: "#FFFFFF"
    },
    dark:{
      main: "#263238",
      ligth: "#37474f"
    },
    error: {
      main: "#F44336"
    },

  }
});

export default theme;
