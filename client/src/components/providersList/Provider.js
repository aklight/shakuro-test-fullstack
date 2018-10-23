import React from "react";
import { Link } from "react-router-dom";

export default function Provider(props) {
  return (
    <div className="providers-list__item">
      <Link to={"/refill/" + props.providerName}>
        <img src={props.providerLogo} alt={props.providerName} />
      </Link>
    </div>
  );
}
