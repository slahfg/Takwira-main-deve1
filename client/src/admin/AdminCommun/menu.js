import React from "react";
import{useSelector,useDispatch}from 'react-redux'
import { logout } from "../../action/auth";


function Menu()
{
  const dispatch = useDispatch()
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


    <li><button  onClick={()=>dispatch(logout())} href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-share text-info" /> <span>logout</span></button></li>
  </ul>
</div>

    );
  }

 export default Menu;