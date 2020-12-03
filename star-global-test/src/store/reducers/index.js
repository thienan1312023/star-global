import DrawArea from '../../components/draw-area'
import {
    SET_COORDINATES_AND_TIME_SPEED,
    SET_RESET
} from '../constants/ActionTypes'

const initialState = {
    drawOptions: {},
    quantityById: {}
}

export const drawBox = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case SET_COORDINATES_AND_TIME_SPEED:
            return {
                ...state,
                drawOptions: action.payload
            }
        case SET_RESET:
            return {
                ...state,
                drawOptions: {}
            }
      default:
            return state
    }
}

export default draw;
