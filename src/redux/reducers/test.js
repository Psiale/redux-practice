import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/test";

const initialState = {
    counter: 0
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
    
        default: return state
    };
};

export default testReducer