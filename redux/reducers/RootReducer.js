import {combineReducers} from 'redux';

import CounterReducer from './CounterReducer';

const AppReducers = combineReducers({
    CounterReducer,
});

const RootReducer = (state, action) => {
    return AppReducers(state, action);
}

export default RootReducer;
