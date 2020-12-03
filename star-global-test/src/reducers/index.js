import {
    SET_COORDINATES_AND_TIME_SPEED,
    SET_RESET
} from '../constants/actionTypes'

const initialState = {
    drawOptions: {},
    quantityById: {},
}

export default (state = initialState.addedIds, action) => {
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

