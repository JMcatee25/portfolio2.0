import React, { Component } from "react";
import Aside from "./components/Aside";
import Projects from "./components/Projects";
import "./assets/css/Main.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProjectSlider from "./components/ProjectSlider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Fruit-Co",
          caption:
            "A fully functional E-commerce website I made in the Road to Hire program",
          img: "http://funkyimg.com/i/2MoYk.png",
          link: "https://jmcatee25.github.io/Road-to-Hire-ecommerce/"
        },
        {
          title: "MyMove",
          caption: "A static HTML website made from a sketch design",
          img: "http://funkyimg.com/i/2MoYr.png",
          link: "https://jmcatee25.github.io/Midterm/"
        }
        // { title: "", caption: "", img: "", link: "" }
      ]
    };
  }

  handleScrollProjects = () => {
    window.scrollTo({
      top: 1280,
      behavior: "smooth"
    });
  };

  handleScrollTracker = () => {
    const herotracker = document.getElementById("herotracker");
    const abouttracker = document.getElementById("abouttracker");
    const projecttracker = document.getElementById("projecttracker");
    const contacttracker = document.getElementById("contacttracker");
    if (-1 < window.pageYOffset && window.pageYOffset < 600) {
      herotracker.classList.add("current");
    } else {
      herotracker.classList.remove("current");
    }
    if (600 < window.pageYOffset && window.pageYOffset < 1150) {
      abouttracker.classList.add("current");
    } else {
      abouttracker.classList.remove("current");
    }
    if (1160 < window.pageYOffset && window.pageYOffset < 2950) {
      projecttracker.classList.add("current");
    } else {
      projecttracker.classList.remove("current");
    }
    if (2950 < window.pageYOffset) {
      contacttracker.classList.add("current");
    } else {
      contacttracker.classList.remove("current");
    }
  };
  render() {
    let projectList = this.state.projects.map((project, index) => {
      return (
        <Projects
          key={index}
          title={project.title}
          caption={project.caption}
          img={project.img}
          link={project.link}
        />
      );
    });
    window.addEventListener("scroll", this.handleScrollTracker);
    return (
      <div className="App">
        <div className="herosection">
          <div className="herotextcontainer">
            <h1 className="logo">Jarrod</h1>
            <img
              className="colorimg"
              src={require("./assets/imgs/heroimg.png")}
              alt="Color Explosion"
            />
            <Aside handleScrollProjects={this.handleScrollProjects} />
            <div className="herotext">
              <h1 className="herotitle">Jarrod Mcatee</h1>
              <h2 className="pink herojob">Junior Software Developer</h2>
              <p>Software developer with a passion for knowledge</p>
              <a href={require("./full-stack-resume.pdf")} download>
                <button className="pinkButton">Resume</button>
              </a>
              <button
                className="clearButton"
                onClick={this.handleScrollProjects}
              >
                My Work
              </button>
            </div>
          </div>
        </div>
        <hr />
        <About />
        <hr />
        <div className="projectsection">
          <Header text="Projects" />
          {projectList}
          <ProjectSlider />
        </div>
        <hr />
        <Header text="Contact Me" />
        <Contact />
      </div>
    );
  }
}

export default App;
