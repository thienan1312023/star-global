import {
    SET_COORDINATES_AND_TIME_SPEED,
} from '../constants/actionTypes'
import {XDefault, YDefault, TransitionTimeDefault} from '../components/draw-control/constants';
const initialState = {
    drawOptions: {
        x: XDefault,
        y: YDefault,
        transitionSpeed: TransitionTimeDefault
    },
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

