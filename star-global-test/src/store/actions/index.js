import * as types from '../constants/ActionTypes'

export const setCoordinate = ({x, y, time}) => ({
    type: types.SET_COORDINATES_AND_TIME_SPEED,
    payload: {x, y, time}
})

export const setReset = () => ({
    type: types.SET_RESET
})