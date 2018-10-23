import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Provider(props) {
  return (
    <div className="providers-list__item img-fluid shadow">
      <Link to={"/refill/" + props.providerName}>
        <img src={props.providerLogo} alt={props.providerName} />
      </Link>
    </div>
  );
}

Provider.propTypes = {
  providerName: PropTypes.string.isRequired,
  providerLogo: PropTypes.string.isRequired,
};

