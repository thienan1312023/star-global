import React from 'react';
import PropTypes from 'prop-types';
import DrawObject from '../draw-object';
import DrawControl from '../draw-control';
import './styles.css'
const DrawArea = ({ x, y, transitionSpeed }) => {
    return (
        <div className="app">
            <div className="container">
                <DrawControl />
                <div className="draw-infor">
                    Position:  <span className="draw-infor-value">({x},{y})</span>
                Speed Of Transition:    <span className="draw-infor-value">{transitionSpeed / 1000}s</span>
                </div>
                <div className="infor-row">Click any where on this area to move the box</div>
                <DrawObject x={x} y={y} transitionSpeed={transitionSpeed} />
            </div>
        </div>
    );
}

DrawArea.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    transitionSpeed: PropTypes.number.isRequired,
}
export default DrawArea;