import React from "react";
import { Link } from "react-router-dom";
import * as UrlPath from "../../util/url_paths_util";
import {
  DEFAULT_PROFILE_PICTURE,
  DROPDOWN_ICON, HOME_ICON, 
  LOGO_URL, 
  MY_NETWORK_ICON, 
  NAVICON_URL 
} from "../../util/images_and_icons_util";

export default class Navbar extends React.Component {
  componentDidMount() {
    let url = this.props.url;

    url === UrlPath.SPLASH ||
    url === UrlPath.LOGIN_FORM ||
    url === UrlPath.SIGNUP_FORM
      ? null
      : this.props.fetchUser(this.props.currentUserId);
  }

  render() {
    switch (this.props.url) {
      case UrlPath.SPLASH:
        return this.splashNavbar();
      case UrlPath.LOGIN_FORM:
        return this.loginNavbar();
      case UrlPath.SIGNUP_FORM:
        return this.signupNavbar();
      default:
        return this.sessionNavbar();
    }
  }

  splashNavbar() {
    return (
      <div className="splash-navbar">
        <div className="splash-navbar-logo">
          <img src={LOGO_URL} />
        </div>

        <div className="splash-navbar-buttons">
          <div id="signup">
            <Link to={UrlPath.SIGNUP_FORM}>Join now</Link>
          </div>

          <div id="login">
            <Link to={UrlPath.LOGIN_FORM}>Sign in</Link>
          </div>
        </div>

      </div>
    );
  }

  loginNavbar() {
    return (
      <div className="login-navbar">
        <Link to={UrlPath.SPLASH}>
          <img src={LOGO_URL} />
        </Link>
      </div>
    );
  }

  signupNavbar() {
    return (
      <div className="signup-navbar">
          <Link to={UrlPath.SPLASH}>
            <img src={LOGO_URL}/>
          </Link>
      </div>
    );
  }

  sessionNavbar() {
    let { currentUserId, logout } = this.props;

    return (
      <div className="session-navbar">
        <div className="logo">
          <Link to={UrlPath.FEED}>
            <img src={NAVICON_URL} />
          </Link>
        </div>

        <div className="icons">
          <div id="feed">
            <Link to={UrlPath.FEED}>
              <img src={HOME_ICON} />
              <div>Home</div>
            </Link>
          </div>

          <div id="my-network">
            <Link to={UrlPath.MY_NETWORK}>
              <img src={MY_NETWORK_ICON} />
              <div>My Network</div>
            </Link>
          </div>

          <div id="profile">
            <Link to={`/users/${currentUserId}`}>
              <img src={DEFAULT_PROFILE_PICTURE} />
              <div id="dropdown">
                <div>Me</div>
                <img src={DROPDOWN_ICON} />
              </div>
            </Link>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
};