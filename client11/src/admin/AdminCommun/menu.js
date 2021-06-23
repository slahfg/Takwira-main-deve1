import React from "react";



function Menu()
{
  
    return (
     <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true">
  <div className="brand-logo">
    <a href="index.html">
      <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
      <h5 className="logo-text">Welcome Admin</h5>
    </a>
  </div>
  <ul className="sidebar-menu do-nicescrol">

    <li>
      <a href="/AdminListeOwner" className="waves-effect">
        <i className="zmdi zmdi-view-dashboard" /> <span>Owners</span> <i className="fa fa-angle-left pull-right" />
      </a>
       </li>
       <li>
      <a href="AdminListeStade" className="waves-effect">
        <i className="zmdi zmdi-view-dashboard" /> <span>Stadiums</span> <i className="fa fa-angle-left pull-right" />
      </a>
       </li>
       <li>
      <a href="/AdminListeReservation" className="waves-effect">
        <i className="zmdi zmdi-view-dashboard" /> <span>Reservation</span> <i className="fa fa-angle-left pull-right" />
      </a>
       </li>


    <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-coffee text-danger" /> <span>Important</span></a></li>
    <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-chart-donut text-success" /> <span>Warning</span></a></li>
    <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-share text-info" /> <span>Information</span></a></li>
  </ul>
</div>

    );
  }

 export default Menu;