import React from 'react';
import PropTypes from 'prop-types';

const DrawObject = ({x, y, transitionSpeed}) => {
    return (
        <div
        className="box"
        style={{
          transform: `translate(${x}px, ${y}px)`,
          transition: `transform ease-out ${transitionSpeed / 1000}s`
        }}
      />
    )
}

DrawObject.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    transitionSpeed: PropTypes.number.isRequired,
}
export default DrawObject;

