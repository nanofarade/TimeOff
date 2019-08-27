import React from 'react';
import { Button, Text, View } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
// voir lien https://www.npmjs.com/package/react-native-modal-datetime-picker

export default class Autho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false,
        };
      }
     
      showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
     
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
     
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
      };

    render(){
      return (
          <View>

          <Text>//date de l'absence</Text>
          <DateTimePicker
          isVisible='true'
          //onConfirm={this.handleDatePicked}
          //onCancel={this.hideDateTimePicker}
          mode='date'
        />
        <Text>heure de début</Text>
        <DateTimePicker
        mode='time'
      />
      <Text>heure de fin</Text>
      <DateTimePicker
      mode='time'
    />
    </View>

      )
    }
}
