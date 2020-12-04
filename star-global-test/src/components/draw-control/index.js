import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoordinateAndTimeSpeed } from '../../actions';
import { BoxWidth, BoxHeight, XDefault, YDefault, TransitionTimeDefault } from './constants';
import './styles.css';

const DrawControl = () => {
    const widthWindow = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [transitionSpeed, setTransitionSpeed] = useState(TransitionTimeDefault)
    const [{ x, y }, setPosition] = useState({ x: XDefault, y: YDefault });
    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('click', handleClick, false)
        return () => {
            document.removeEventListener('click', handleClick, false);
        }
    });

    const handleClick = ({ x, y }) => {
        if (x + BoxWidth > widthWindow) {
            x = widthWindow - BoxWidth;
        }

        if (y + BoxHeight > windowHeight) {
            y = windowHeight - BoxHeight;
        }

        setPosition({
            x,
            y
        });

        dispatch(setCoordinateAndTimeSpeed({x,y, transitionSpeed}));
    };

    const handleResetControlOptions = (e) => {
        e.stopPropagation();
        setTransitionSpeed(TransitionTimeDefault);
        setPosition({ x: XDefault, y: YDefault });
        dispatch(setCoordinateAndTimeSpeed({x: XDefault,y: YDefault, transitionSpeed: TransitionTimeDefault}));
    };

    const handleInputChange = e => {
        const { value } = e.target;
        if (Number.isInteger(+value)) {
            const targetValue = e.target.value;
            setTransitionSpeed(targetValue);
            dispatch(setCoordinateAndTimeSpeed({x,y, transitionSpeed: targetValue}));
        }
    };

    return (<div className="form-group">
        <div className="form-label">Transition speed (ms)</div>
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