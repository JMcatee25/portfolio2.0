import React, { Component } from "react";

export default class Aside extends Component {
  sendEmail = () => {
    window.location.href = `mailto:jarrodportfoliocontact@gmail.com`;
  };
  handleScrollHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  handleScrollAbout = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth"
    });
  };
  handleScrollContact = () => {
    window.scrollTo({
      top: 3100,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <div className="asidecontainer">
        <ul className="scrolltracker">
          <li
            id="herotracker"
            className="herotracker"
            onClick={this.handleScrollHero}
          />
          <li
            id="abouttracker"
            className="abouttracker"
            onClick={this.handleScrollAbout}
          />
          <li
            id="projecttracker"
            className="projecttracker"
            onClick={this.props.handleScrollProjects}
          />
          <li
            id="contacttracker"
            className="contacttracker"
            onClick={this.handleScrollContact}
          />
        </ul>
        <ul className="sociallinks">
          <li>
            <a
              href="https://www.linkedin.com/in/jarrod-mcatee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./../assets/imgs/linkedin.svg")}
                alt="Linkedin link"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JMcatee25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github"
                src={require("./../assets/imgs/github.svg")}
                alt="Github link"
              />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/jarrodmcatee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./../assets/imgs/codepen.png")}
                alt="Codepen link"
              />
            </a>
          </li>
          <li>
            <img
              className="emailbutton"
              src={require("./../assets/imgs/gmail.svg")}
              alt="email link"
              onClick={this.sendEmail}
            />
          </li>
        </ul>
      </div>
    );
  }
}
