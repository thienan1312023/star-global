import React from 'react';
import { useSelector } from 'react-redux';
import DrawArea from '../../components/draw-area';
import { XDefault, YDefault, TransitionTimeDefault } from '../../components/draw-control/constants';

const DrawContainer = () => {
    const defaultState = { x: XDefault, y: YDefault, transitionSpeed: TransitionTimeDefault };
    const options = useSelector(state => state && state.drawOptions) || defaultState;
    const { x, y, transitionSpeed } = options;

    return (
        <DrawArea x={x} y={y} transitionSpeed={transitionSpeed} />
    )
}

export default DrawContainer;