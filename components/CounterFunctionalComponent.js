import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {incrementCounter, decrementCounter, multiplyCounter} from '../redux/actions/CounterActions'
import AppButton from './shared/AppButton';

import styles from './styles/Counter.style';

const CounterFunctionalComponent = (props) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.heading}>Using Functional Component</Text>
            <Text style = {styles.counterText}>{props.count}</Text>
            <AppButton title = "INCREMENT" buttonAction = {props.increment}/>
            <AppButton title = "DECREMENT" buttonAction = {props.decrement}/>
            <AppButton title = "MULTIPLY BY 2" buttonAction = {props.multiply}/>
        </View>
    );
}



const mapStateToProps = (state) => ({
    count: state.CounterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    multiply: () => dispatch(multiplyCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterFunctionalComponent);
