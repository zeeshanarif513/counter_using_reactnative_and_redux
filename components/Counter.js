import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {incrementCounter, decrementCounter, multiplyCounter} from '../redux/actions/CounterActions'
import AppButton from './sharedComponents/AppButton';

import styles from './styles/Counter.style';

class Counter extends Component {
 
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.counterText}>{this.props.count}</Text>
                <AppButton title = "INCREMENT" buttonAction = {this.props.increment}/>
                <AppButton title = "DECREMENT" buttonAction = {this.props.decrement}/>
                <AppButton title = "MULTIPLY BY 2" buttonAction = {this.props.multiply}/>
            </View>
        );
    }
}



const mapStateToProps = (state) => ({
    count: state.CounterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    multiply: () => dispatch(multiplyCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
