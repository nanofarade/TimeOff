import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TextInput, AsyncStorage, Image, ImageBackground, Keyboard, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Icon } from 'native-base';
import App from '../../App';
import Formstyles from '../styles/FormStyles';
import Imgstyles from '../styles/ImageStyles';
import MyLeavesScreen from '../screens/SeeMyLeaves'

export default class Login extends React.Component {
  
    render() {
     
        return (
            <Container >
                <Header>
                    <Title>Time Off</Title>
                </Header>

                <Content>

                    <ImageBackground style={Imgstyles.BackgroundImg} source={require('../assets/Office0.jpg')}>
                        <View style={Formstyles.Logincontainer}>
                            <TextInput style={Formstyles.LoginInput}
                                placeholder="Username"
                                onSubmitEditing={() => this.password.focus()}
                                onChangeText={(text) => { this.setState({ username: text }) }}
                            />

                            <TextInput style={Formstyles.LoginInput}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                                ref={(input) => this.password = input}
                            />

                            <TouchableOpacity style={Formstyles.button} onPress={() => this.LogIn()}>
                                <Text style={Formstyles.buttonText} >{this.props.type}Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                </Content>
                <Footer>
                    <FooterTab>

                    </FooterTab>
                </Footer>
            </Container >

        )
    }
   
    LogIn() {
        //save in db with AsyncStorage
        const { username, password } = this.state;
        let myArray = {
            username: username,
            password: password,
        }
        AsyncStorage.setItem('myArray', JSON.stringify(myArray));

        Keyboard.dismiss();
        alert('Bienvenue ' + username)
        //to get from AsyncStorage
        showData = async () => {
            let myArray = await AsyncStorage.getItem('myArray');
            let d = JSON.parse(myArray);
        }
        //Go to page image with parameter //navigate('Signin', {name: 'Jane'})
        { this.props.navigation.navigate('MyLeaves', { username: this.state.username }) }
    }
}