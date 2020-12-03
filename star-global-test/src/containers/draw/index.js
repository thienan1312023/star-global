import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DrawArea from '../../components/draw-area';

const DrawContainer = () => {
    const defaultState = {x: 1, y: 1, transitionSpeed: 1000};
    const options = useSelector(state => state && state.drawOptions) || defaultState;
    console.log(options)
    const {x, y, transitionSpeed} = options;
    return (
        <DrawArea x={x} y={y} transitionSpeed={transitionSpeed} />
    )
}

export default DrawContainer;