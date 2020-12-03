import * as types from '../constants/actionTypes'

export const setCoordinateAndTimeSpeed = ({x, y, transitionSpeed}) => ({
    type: types.SET_COORDINATES_AND_TIME_SPEED,
    payload: {x, y, transitionSpeed}
})
