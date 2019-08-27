import React from 'react';
import { Button, View, Text } from 'react-native';
//test 2 with the datepicker li mouch modal (fih textinput)
import DatePicker from 'react-native-datepicker';
import DatePickerStyle from '../styles/DatePickerStyles';
import Formstyles from '../styles/FormStyles';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import RadioButtonShift from './RadioButtonShift';
import RadioButtonShift2 from './RadioButtonShift2';

export default class SickorHoli extends React.Component {

  constructor(props) {
    super(props)
    this.state = { startdate: "2016-05-15" },
      this.state = { enddate: "2016-05-15" }

  }

  render() {
    return (
      <View style={Formstyles.container}>
        <DatePicker

          startdate={this.state.startdate}
          mode="date"
          placeholder="Start date"
          format="DD-MM-YYYY"
          minDate="10-08-2019"
          maxDate="31-12-2119"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          style= {DatePickerStyle.dateInput}
          onDateChange={(startdate) => { this.setState({ startdate: startdate }) }}
        />
        <View styles={Formstyles.flexhorizontal} >
        </View>

        <RadioButtonShift />
        <Text>
        {"\n"}
        {"\n"}
        </Text>
       
        <DatePicker

          startdate={this.state.enddate}
          mode="date"
          placeholder="End date"
          format="DD-MM-YYYY"
          minDate="10-08-2019"
          maxDate="31-12-2119"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          style= {DatePickerStyle.dateInput}
          onDateChange={(enddate) => { this.setState({ enddate: enddate }) }}
        />
<RadioButtonShift2 />
      </View>

    )
  }
}
