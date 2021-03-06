import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link to="/">
          <h1 className="navbar-brand col-sm3 col-md2 mr-0 align-items-center">
            Pokedex
          </h1>
        </Link>
      </div>
    );
  }
}
