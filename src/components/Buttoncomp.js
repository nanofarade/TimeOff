import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styles from '../styles/FormStyles' 

class PressMe extends Component {
  render() {
    return (
      <View >
        <Text style={styles.buttonText}> Press Me! </Text>
      </View>
    );
  }
}



export default PressMe;