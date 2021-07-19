
import React from 'react';
import {
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {useState} from 'react'

import Counter from './components/Counter';
import CounterFunctionalComponent from './components/CounterFunctionalComponent';
import AppButton from './components/shared/AppButton';
import AppButtonFunctionalComponent from './components/shared/AppButtonFunctionalComponent';
import styles from './components/styles/App.styles';


const App  = () => {
    const [componentType, setComponentType] = useState(true)

    return (
        <Provider store={store}>
          <View style = {styles.buttonContainer}>
            <AppButton title="Using Class Components" buttonAction = {() => {setComponentType(true)}}/>
            <AppButtonFunctionalComponent title="Using Functional Components" buttonAction = {() => {setComponentType(false)}}/>
          </View>
          <View style = {styles.divider}></View>
          {componentType ? <Counter />: <CounterFunctionalComponent />}
        </Provider>
    );
}
export default App;
