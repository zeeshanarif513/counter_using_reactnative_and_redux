import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';


import ActionButton from './ActionButton';

class Counter extends Component {
 
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.counterText}>{this.props.count}</Text>
                <ActionButton title = "INCREMENT" increment = {this.props.increment}/>
                <ActionButton title = "DECREMENT" increment = {this.props.decrement}/>
                <ActionButton title = "MULTIPLY BY 2" increment = {this.props.multiply}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    counterText: {
        fontSize: 100,
        textAlign: 'center'

    }
});



export default Counter;