import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import App from "./App";
import Users from "./users";
import Contact from "./contact";


 const RoutingD = () => {
             
            (
                <div>
                <Route exact path="/" component={App} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/contact" component={Contact} />
              </div>
              );
            }

export  default RoutingD;      
