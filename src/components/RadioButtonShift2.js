import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RadioButtonstyles from '../styles/RadioButtonStyles';
import RadioGroup from 'react-native-radio-buttons-group';

export default class RadioButtonShift2 extends React.Component {
    state = {
        data2: [
     
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
    onPress = data2 => this.setState({ data2 });

    render() {
        let selectedButton2 = this.state.data2.find(e => e.selected == true);
        selectedButton2 = selectedButton2 ? selectedButton2.value : this.state.data2[0].label;
        return (
            <View style={RadioButtonstyles.container}>            
                <RadioGroup radioButtons={this.state.data2}
                onPress={this.onPress} 
                flexDirection='row'/>
                { /* Value = {selectedButton2}*/}
            </View>
        );
    }
}

