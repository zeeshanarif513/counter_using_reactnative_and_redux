
import React from 'react';
import {
  Text,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/Store';

import Counter from './components/Counter';


const App  = () => {
    return (
        <Provider store={store}>
          <Counter />
        </Provider>
    );
}
export default App;
