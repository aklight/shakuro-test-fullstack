import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
                {this.props.isRefilled && (
                  <div>
                    <p className="text-success">
                      {`Your ${this.props.provider} account was refilled with ${this.props.amount} $`}
                    </p>
                    <hr />
                    Thank you for choosing our service!
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
  isAuth: state.auth.isAuthenticated,
  isRefilled: state.refilling.isRefilled,
  amount: state.refilling.amount,
  provider: state.refilling.provider
});

Landing.PropTypes = {
  provider: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isRefilled: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null
)(Landing);
