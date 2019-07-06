import { UPDATE_TIME } from "../actions";

const initialState = {
    time: Date.now()
}

function pocApp(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TIME:
            return Object.assign({}, state, {
                time: action.time
            });
        default:
            return state;
    }
}

export { pocApp };
