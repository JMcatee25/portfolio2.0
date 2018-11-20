import React, { Component } from "react";
import Slider from "react-slick";

export default class ImgSlider extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      initialSlide: 1,
      speed: 500,
      centerPadding: "20px",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (
      <Slider {...settings} className="slidercontainer">
        <div>
          <a
            href="https://github.com/JMcatee25/portfolio-website"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/portfolio.png")}
              alt="Original Portfolio"
            />
          </a>
          <p className="slidercaptions">
            My Original portfolio website that I made at the beginning of Road
            to Hire with HTML and CSS.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/JMcatee25/GuessingGame"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/guessinggame.png")}
              alt="Simple Application"
            />
          </a>
          <p className="slidercaptions">
            One of the first Reactjs projects I made for a Road to Hire weekly
            challenge.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/JMcatee25/R2H-Ajax"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/SpaceStation.png")}
              alt="Simple Application"
            />
          </a>
          <p className="slidercaptions">
            A set of Road to Hire weekly challenges that are all dealing with
            AJAX calls
          </p>
        </div>
        <div>
          <a
            href="https://github.com/JMcatee25/bot-o-mat"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/Bot-o-mat.png")}
              alt="Simple Application"
            />
          </a>
          <p className="slidercaptions">
            A Simple App that allows user to make a "robot" and removes tasks
            after a set time.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/JMcatee25/R2H-HTML"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/HTML.png")}
              alt="Simple Application"
            />
          </a>
          <p className="slidercaptions">
            The first week of Road to Hire challenges dealing with basic HTML
            when I didnt know anything
          </p>
        </div>
        <div>
          <a
            href="https://github.com/JMcatee25/R2H-CSS"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/CSS-challenge.png")}
              alt="Simple Application"
            />
          </a>
          <p className="slidercaptions">
            Another set of Road to Hire weekly challenges this time pertaining
            to CSS
          </p>
        </div>
        <div>
          <a
            href="https://github.com/JMcatee25/weatherapp"
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sliderimgs"
              src={require("./../assets/imgs/WeatherApp.png")}
              alt="Simple Application"
            />
          </a>
          <p className="slidercaptions">
            A Simple Weather App we made in a Red Ventures Workshop
          </p>
        </div>
      </Slider>
    );
  }
}
