
import React from 'react';
import {
  Text,
} from 'react-native';

import {Provider} from 'react-redux';
import CounterAction from './redux_service/actions/CounterActions';
import store from './redux_service/reducers/RootReducer';





const App  = () => {
    return (
        <Provider store={store}>
          <CounterAction />
        </Provider>
    );
}
export default App;
