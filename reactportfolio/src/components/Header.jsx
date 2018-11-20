import React, { Component } from "react";

export default class Header extends Component {
  myFunction = () => {
    var nav = document.getElementsByClassName("nav");
    var sticky = nav.offsetTop;
    // if (window.pageYOffset >= sticky) {
    //   nav.classList.add("sticky");
    // } else {
    //   nav.classList.remove("sticky");
    // }
    console.log(sticky);
  };
  render() {
    return (
      <React.Fragment>
        <nav className="nav">
          <h1>{this.props.text}</h1>
        </nav>
      </React.Fragment>
    );
  }
}
