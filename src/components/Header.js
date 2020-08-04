import React, { Component } from "react";
import "../App.css";
import logo from '../logo.svg';
import bulma from '../bulma.svg'

export  class Header extends Component {
  render = () => {
    return (
      <div>
        <h1 className="title ">TO-DO List With <a href="https://reactjs.org/"
         className="has-text-info" target="_blank"> React </a>
        and <span className="has-text-primary">  <a className="has-text-primary"
         target="_blank" href="https://bulma.io/">Bulma</a></span> </h1>
        <img className="App-logo" src={logo} alt="logo"></img>
        <img className="App-logo" src={bulma} alt="logo"></img>
        <p className="subtitle">
          Modern CSS framework based on{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
          </a>
        </p>
      </div>
    );
  };
}
