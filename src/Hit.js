import React from "react";
import PropTypes from "prop-types";
import { Highlight, Snippet } from "react-instantsearch-dom";

export default Hit;

function Hit({ hit }) {
  return (
    <div className="hit">
      <div className="hit-image">
        <img src={hit.image} alt={hit.idname} />
      </div>
      <div className="hit-content">
        <div>
          <div className="hit-name">
            <Highlight attribute="displayName" hit={hit} tagName="em" />
          </div>
          <div className="hit-price">{hit.slogan}</div>

          <div className="hit-description">
            <Snippet attribute="description" hit={hit} />
          </div>
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};
