import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Payment terminal</h1>

                {!this.props.isAuth && (
                  <div>
                    <p className="lead">
                      {" "}
                      Please, log in if you want to use our service.
                    </p>
                    <hr />
                    <Link to="/login" className="btn btn-lg btn-info">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Landing);
