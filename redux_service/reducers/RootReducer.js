import {combineReducers, createStore} from 'redux';

import CounterReducer from './CounterReducer';

const AppReducers = combineReducers({
    CounterReducer,
});

const RootReducer = (state, action) => {
    return AppReducers(state, action);
}

const store = createStore(RootReducer);

export default store;
