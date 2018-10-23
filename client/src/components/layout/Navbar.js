import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions.js";

class Navbar extends Component {
  render() {
    const { logoutUser } = this.props;

    const login = (
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    );

    const logout = (
      <li onClick={logoutUser} className="nav-item">
        <Link className="nav-link" to="/">
          Logout
        </Link>
      </li>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Payment terminal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              {this.props.isAuth ? logout : login}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
