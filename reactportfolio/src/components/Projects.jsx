import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <figure className="singleproject">
          <a
            href={this.props.link}
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectimgs"
              src={this.props.img}
              alt={this.props.caption}
            />
          </a>
          <figcaption className="projecttext">
            <h3 className="pink projecttitle">{this.props.title}</h3>
            <p className="projectcaption">{this.props.caption}</p>
          </figcaption>
        </figure>
        <hr />
      </React.Fragment>
    );
  }
}
