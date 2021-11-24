import React from "react";
import { Link } from "react-router-dom";
import { SIGNUP_FORM } from "../../util/url_paths_util";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash-component-1">
          <h1>
            Welcome to your professional community
          </h1>
          <img
            src="https://github.com/grayson-poon/ConnectTheDots/blob/main/app/assets/images/office-stock-5.png?raw=true"
            alt="woman"
          />
        </div>

        <div className="splash-container-2">
          <h1>
            Join your colleagues, classmates, and friends on ConnectTheDots{" "}
          </h1>
          <Link to={SIGNUP_FORM}>Get Started</Link>
        </div>

        {/* technologies footer goes here */}
      </div>
    );
  }
};