import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoordinateAndTimeSpeed } from '../../actions';
import { BoxWidth, BoxHeight } from './constants';
const DrawControl = () => {
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const [transitionSpeed, setTransitionSpeed] = useState(1000)
    const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
    const dispatch = useDispatch();

    const handleClick = ({ x, y }) => {
        if (x + BoxWidth > ww) {
            x = ww - BoxWidth;
        }

        if (y + BoxHeight > wh) {
            y = wh - BoxHeight;
        }
        setPosition({
            x,
            y
        });
        dispatch(setCoordinateAndTimeSpeed({x,y, transitionSpeed}));
    };

    const handleInputChange = e => {
        const { value } = e.target;
        if (Number.isInteger(+value)) {
            setTransitionSpeed(e.target.value);
            dispatch(setCoordinateAndTimeSpeed({x,y, transitionSpeed: e.target.value}));
        }
    };

    const handleReset = (e) => {
        e.stopPropagation();
        setTransitionSpeed(1000);
        setPosition({ x: 0, y: 0 });
        dispatch(setCoordinateAndTimeSpeed({x: 0,y: 0, transitionSpeed: 1000}));
    };

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick);
        }
    });
    return (<div className="form-group">
        <div className="form-label">Transition speed</div>
        <input
            type="text"
            className="form-input"
            value={transitionSpeed}
            onChange={handleInputChange}
            onClick={e => e.stopPropagation()}
        />
        <button
            type="button"
            className="btn"
            onClick={handleReset}
        >
            Reset
        </button>
    </div>)
}

export default DrawControl;