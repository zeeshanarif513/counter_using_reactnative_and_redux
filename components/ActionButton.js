import React, {Component} from 'react';

import {View, StyleSheet, Button} from 'react-native';



class ActionButton extends Component {
    render() {
        return(
            <View style = {styles.button}>
                <Button 
                    title = {this.props.title}
                    onPress = {this.props.increment}
                />
            </View>
        )
    }
}

styles = StyleSheet.create ({
    button: {
        margin: 10,
    }
});

export default ActionButton;