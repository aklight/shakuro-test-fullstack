import React, { Component } from "react";
import InputMask from "react-input-mask";
import { connect } from "react-redux";
import classnames from "classnames";
import { updateBalance } from "../../actions/refillActions.js";
import PropTypes from "prop-types";

class Refill extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      amountOfMoney: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      id: this.props.currentUserId,
      phoneNumber: this.state.phoneNumber,
      providerToRefill: this.props.match.params.provider.toLowerCase(),
      amountOfMoney: this.state.amountOfMoney
    };

    this.props.updateBalance(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { provider } = this.props.match.params;
    return (
      <div className="refill">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <h1 className="display-4 text-center">{provider}</h1>
              <p className="lead text-center">
                Current balance of your account:{" "}
                <strong>
                  {" "}
                  {this.props.currentBalance[`${provider.toLowerCase()}`]}
                </strong>
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <InputMask
                    type="text"
                    className={classnames("form-control bfh-phone", {
                      "is-invalid": this.state.errors.phoneNumber
                    })}
                    mask="+7 (999) 999 99 99"
                    maskChar=" "
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                  />
                  {this.state.errors.phoneNumber && (
                    <div className="invalid-feedback">
                      {this.state.errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <InputMask
                    className={classnames("form-control", {
                      "is-invalid": this.state.errors.amountOfMoney
                    })}
                    mask="$ 9999"
                    maskChar=" "
                    placeholder="Amount of refill $"
                    name="amountOfMoney"
                    value={this.state.amountOfMoney}
                    onChange={this.onChange}
                  />
                  {this.state.errors.amountOfMoney && (
                    <div className="invalid-feedback">
                      {this.state.errors.amountOfMoney}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-success btn-block mt-4"
                >
                  Refill
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUserId: state.auth.user.id,
  currentBalance: state.auth.user.balances,
  errors: state.errors
});

Refill.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  currentBalance: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { updateBalance }
)(Refill);
