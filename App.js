/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Container, Header, Title, Content, Footer, FooterTab, Icon } from 'native-base';
import React, { Fragment } from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TextInput, StyleSheet, Text, ImageBackground, View, Image, StatusBar, YellowBox, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import PressMe from './src/components/Buttoncomp';
import Login from './src/screens/Login';
import NewLeaveScreen from './src/screens/AddNewLeave';
import MyLeavesScreen from './src/screens/SeeMyLeaves';
import CalendarScreen from './src/screens/Calendar';
import AllLeavesScreen from './src/screens/AllUsersLeaves'
import MenuStyles from './src/styles/MenuStyles';




import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {

  return (
    <Container >
      <Header>
        <Title>Time Off</Title>
      </Header>

      <Content>
        <PressMe />
      </Content>

    </Container>
  );
};

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: Each',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Warning: Async Storage has been extracted from react-native core',
  'Warning: Encountered two children with the same key'
]);





const MaterialBottomNavigator = createMaterialBottomTabNavigator({
 
  MyLeaves: {
    screen: MyLeavesScreen,
    navigationOptions: {
      tabBarLabel: 'My Leaves',
      tabBarIcon: ({ activeColor }) => (
        <Icon ios="ios-eye" android="md-eye" style={MenuStyles.icon} />
      )
    }
  },
  AddLeave: {
    screen: NewLeaveScreen,
    navigationOptions: {
      tabBarLabel: 'New Leave',
      tabBarIcon: ({ activeColor }) => (
        <Icon name="ios-add-circle-outline" style={MenuStyles.icon} />
      )
    }
  },
  Calendar: { screen: CalendarScreen,
    navigationOptions:{
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ activeColor }) => (
        <Icon  ios="ios-calendar" android="md-calendar"  style={MenuStyles.icon} />
      )
  
    } 
  },
  AllLeaves: { screen: AllLeavesScreen,
    navigationOptions:{
      tabBarLabel: 'All Leaves',
      tabBarIcon: ({ activeColor }) => (
        <Icon  ios="ios-people" android="md-people"  style={MenuStyles.icon} />
      )
  
    } 
  },

}, {
    activeColor: '#ffffff',
    inactiveColor: '#c6bbdc',
    barStyle: { backgroundColor: '#4b4fbd' },
  });


//// Routing et navigation 
const RootStack = createStackNavigator(
  {
    Home: Login,
    Bottom : MaterialBottomNavigator
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  }
);


const AppContainer = createAppContainer(RootStack);

export default class Appli extends React.Component {

  render() {
    return <AppContainer />;
  }
}