import * as Actions from '../Constants'

const INITIAL_STATE = {
    count: 0
}

const counterReducers = (state = INITIAL_STATE, action) => {
    let {count} = state, newState;
    switch(action.type) {
        case Actions.INCREMENT:
            count += 1; 
            newState = {count}
            return newState;
        case Actions.DECREMENT:
            count -= 1; 
            newState = {count}
            return newState;
        case Actions.MULTIPLIER:
            count *= 2; 
            newState = {count}
            return newState;
        default:
            return state
    }
}

export default counterReducers;