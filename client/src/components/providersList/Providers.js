import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProviders } from "../../actions/providersActions";
import Provider from "./Provider.js";

class Providers extends Component {
  constructor(props) {
    super(props);

    this.renderProviders = this.renderProviders.bind(this);

  }

  componentWillMount() {
    this.props.fetchProviders(this.props.history);
    console.log(this.props.providers)
  }

  renderProviders() {
    const data = Array.from(this.props.providers);
    return data.map(provider => {
      return (
        <Provider
          key={provider._id}
          providerName={provider.name}
          providerLogo={provider.logo}
        />
      );
    });
  }

  render() {
    return (
      <div className="providers">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <h2 className="text-center">Available providers: </h2>
              <p className="lead text-center">
                Please choose the operator to refill
              </p>
              <div className="providers-list">{this.renderProviders()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  providers: state.providers
});

export default connect(
  mapStateToProps,
  { fetchProviders }
)(withRouter(Providers));
