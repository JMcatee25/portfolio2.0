import React, { Component } from "react";
import Jarrod from "./../assets/imgs/jarrod.png";
import Header from "./Header";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="aboutsection">
          <Header text="Hello, I'm Jarrod" />
          <div className="avatar">
            <img className="jarrod" src={Jarrod} alt="Jarrod McAtee" />
          </div>
          <p>
            I am a lover of life and fun. Some of my hobbies include, playing
            many different video games, to hanging out with friends, and playing
            with my dogs.
          </p>
          <p>
            I am passionate about <span className="pink">Knowledge</span>, and{" "}
            <span className="pink">Technology.</span>
          </p>
          <p>
            Skills include: HTML, SCSS, JavaScript,{" "}
            <span className="pink">React.js</span>, Node.js, Express.js, Golang,{" "}
            <span className="pink">MySQL</span> and MongoDB.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
