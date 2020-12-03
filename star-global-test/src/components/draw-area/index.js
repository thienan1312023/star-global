import React, {useState, useEffect} from 'react';
import DrawObject from '../draw-object';
import { BoxWidth, BoxHeight } from './constants';
import './styles.css'
const DrawArea = () => {
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const [transitionSpeed, setTransitionSpeed] = useState(1000)
    const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

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
    };

    const handleInputChange = e => {
        const { value } = e.target;
        if (Number.isInteger(+value)) {
            setTransitionSpeed(e.target.value);
        }
    };

    const handleReset = (e) => {
        e.stopPropagation();
        setTransitionSpeed(1000);
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick);
        }
    });

    return (
        <div className="app">
            <div className="container">
                <div className="form-group">
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
                </div>
                <p>Position ({x},{y}) - Transition speed: {transitionSpeed / 1000}s</p>
                <p>Click any where on this area to move the box</p>
                <DrawObject x={x} y={y} transitionSpeed={transitionSpeed}/>
            </div>
        </div>
    );
}

export default DrawArea;