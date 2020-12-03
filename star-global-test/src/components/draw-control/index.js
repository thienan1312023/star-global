import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoordinateAndTimeSpeed } from '../../actions';
import { BoxWidth, BoxHeight, XDefault, YDefault, TransitionTimeDefault } from './constants';
import './styles.css';

const DrawControl = () => {
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const [transitionSpeed, setTransitionSpeed] = useState(TransitionTimeDefault)
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

    const handleResetControlOptions = (e) => {
        e.stopPropagation();
        setTransitionSpeed(1000);
        setPosition({ x: XDefault, y: YDefault });
        dispatch(setCoordinateAndTimeSpeed({x: 0,y: 0, transitionSpeed: TransitionTimeDefault}));
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
            className="btn-reset"
            onClick={handleResetControlOptions}
        >
            Reset
        </button>
    </div>)
}

export default DrawControl;