import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider, Container } from "@material-ui/core";
import theme from "./theme";
import "./App.css";
import StadeDetail from "./pages/StadeDetail";
import StadiumsPage from "./pages/owner/StadiumsPage";

import "./App.css";
import ListeStade from "./proprietaire/stade/list/list";
import AdminListeStade from "./admin/stade/list/list";
import AdminListeOwner from "./admin/owner/list/list";
import Register from "./proprietaire/register/register";
import Login from "./proprietaire/login/login";
import LoginAdmin from "./admin/login/loginAdmin";
import FormAddOwner from "./admin/owner/ajout/formAddOwner";
import AdminListeReservation from "./admin/reservation/list/list";
import ListeReservation from "./proprietaire/reservation/list/list";
function App() {
  const connection = true;

  return (
    <Router>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/stadiumDetail" exact component={StadeDetail} />
        <Route path="/stadiums" exact component={StadiumsPage} />
        <Route path="/ListeStade" exact component={ListeStade} />
        <Route path="/ListeReservation" exact component={ListeReservation} />
        <Route path="/AdminListeStade" exact component={AdminListeStade} />
        <Route path="/AdminListeOwner" exact component={AdminListeOwner} />
        <Route
          path="/AdminListeReservation"
          exact
          component={AdminListeReservation}
        />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/loginAdmin" exact component={LoginAdmin} />
        <Route path="/AdminAddOwner" exact component={FormAddOwner} />
        {/* <Route path="/login" exact component={Login} /> */}

        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
