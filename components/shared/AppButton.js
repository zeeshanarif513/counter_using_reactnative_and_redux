import React, {Component} from 'react';

import {View, StyleSheet, Button} from 'react-native';

import styles from '../styles/AppButton.style';

class AppButton extends Component {
    render() {
        return(
            <View style = {styles.button}>
                <Button 
                    title = {this.props.title}
                    onPress = {this.props.buttonAction}
                />
            </View>
        )
    }
}


export default AppButton;