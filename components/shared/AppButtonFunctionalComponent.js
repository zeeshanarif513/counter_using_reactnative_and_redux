import React from 'react';

import {View, StyleSheet, Button} from 'react-native';

import styles from '../styles/AppButton.style';


const AppButtonFunctionalComponent = (props) => {
    return(
        <View style = {styles.button}>
            <Button 
                title = {props.title}
                onPress = {props.buttonAction}
            />
        </View>
    )
}

export default AppButtonFunctionalComponent;