import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RadioButtonstyles from '../styles/RadioButtonStyles';
import RadioGroup from 'react-native-radio-buttons-group';

export default class RadioButtonShift extends React.Component {
    state = {
        data: [
     
            {
                label: 'All day', //default value is same as label
                color: '#4b4fbd',
            },

            {
                label: 'Morning', 
                color: '#4b4fbd',
            },
            {
                label: 'Afternoon',
                color: '#4b4fbd',
            },
        ],
    };

    // update state
    onPress = data => this.setState({ data });

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={RadioButtonstyles.container}>            
                <RadioGroup radioButtons={this.state.data}
                onPress={this.onPress} 
                flexDirection='row'/>
                { /* Value = {selectedButton}*/}
            </View>
        );
    }
}

