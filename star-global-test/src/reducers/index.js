import {
    SET_COORDINATES_AND_TIME_SPEED,
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
      default:
            return state
    }
}

