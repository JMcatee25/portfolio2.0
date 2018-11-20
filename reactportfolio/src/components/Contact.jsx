import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contactsection">
          <form
            action="mailto:jarrodportfoliocontact@gmail.com"
            method="post"
            name="myForm"
            encType="text/plain"
          >
            <div id="contains-label">
              <label htmlFor="name" className="contactinput-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contactinput"
                required
              />
            </div>
            <div id="contains-label">
              <label htmlFor="email" className="contactinput-label">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="contactinput"
                required
              />
            </div>
            <div id="contains-label">
              <label htmlFor="comments" className="contactinput-label">
                Comments/Questions
              </label>
              <textarea
                id="comments"
                name="comments"
                className="contactinput textarea"
                required
                rows="10"
                cols="30"
              />
            </div>
            <input type="submit" id="contactbutton" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
