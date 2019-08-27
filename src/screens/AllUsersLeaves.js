import React, { Component } from 'react';
import { TextInput, AsyncStorage, Image, ImageBackground, Keyboard, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Header, Title, Content, Footer, FooterTab, Icon } from 'native-base';
import Menustyles from '../styles/FormStyles';
import Formstyles from '../styles/MenuStyles';

export default class AllLeavesScreen extends React.Component {
    static navigationOptions = {
        title: 'All Leaves',
    };

    render() {
        return (

            <Container >

                <Content>
                    <View styles={Formstyles.container}>
                        <Text> Hello </Text>
                    </View>
                </Content>

            </Container >

        )
    }

}