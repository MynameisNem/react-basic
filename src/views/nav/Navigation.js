import React from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todoapp">Todo App</NavLink>
            <NavLink to="/htmlform">HTML Form</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
        </div>
    )
}

export default Navigation