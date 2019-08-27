import React, { Component } from 'react';
import { TextInput, TouchableHighlight, AsyncStorage, Image, ImageBackground, Keyboard, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { Container, Header, Title, Content, Footer, FooterTab, Icon } from 'native-base';
import renderIf from '../components/renderIf';
import SickorHoli from '../components/SickOrHoli';
import Autho from '../components/Authorization';
import Menustyles from '../styles/FormStyles';
import Formstyles from '../styles/MenuStyles';
import DatePickerStyle from '../styles/DatePickerStyles';


export default class NewLeaveScreen extends React.Component {
    static navigationOptions = {
        title: 'Add new leave',
    };
    constructor(props) {
        super(props)
        this.state = {
            status1: false,
            status2: true,
            username: undefined,
            email: undefined,
            password: undefined,
            password2: undefined,
            comment: undefined
        }
    }
    render() {
        let combobox1 = [{
            value: 'Sick Leave',
        }, {
            value: 'Holiday',
        }, {
            value: 'Autorisation',
        }];



        return (
            <Container >
                <Header>
                    <Title>Add New Leave</Title>
                </Header>
                <Content>
                    <View styles={Formstyles.container}>
                        <Text>
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Dropdown
                            label='Type'
                            data={combobox1}
                            onChangeText={() => this.testContentDropbox()}
                        />

                        <SickorHoli />
                        <TextInput
                            multiline={true}
                            placeholder="Comment (Optionnal)"
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({ comment: text })}
                            value={this.state.text} 
                            style={DatePickerStyle.FormInput}/>



                    </View>
                </Content>

            </Container >
        )
        /*
        testContentDropbox() {
            switch (combobox1.selectedIndex()) {
                case '0':
                    {
                        return (
                            <Container >

                                <Content>
                                    <View styles={Formstyles.container}>


                                        <Dropdown
                                            label='Type'
                                            data={combobox1}
                                        // IfAutorisation={combobox1.selectedIndex() ? '2'}
                                        />
                                        <Text> Choix 1</Text>
                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Username"
                                            selectionColor="#fff"
                                            //onSubmitEditing={()=> this.email.focus()}
                                            onChangeText={(text) => { this.setState({ username: text }) }}

                                        />

                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Email"
                                            selectionColor="#fff"
                                            keyboardType="email-address"
                                            onSubmitEditing={() => this.password.focus()}
                                            onChangeText={(text) => { this.setState({ email: text }) }}
                                        />
                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            onSubmitEditing={() => this.password2.focus()}
                                            onChangeText={(text) => { this.setState({ password: text }) }}
                                            ref={(input) => this.password = input}
                                        />
                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Verify password"
                                            secureTextEntry={true}
                                            onChangeText={(text) => { this.setState({ password2: text }) }}
                                            ref={(input) => this.password2 = input}
                                        />


                                        <TouchableOpacity style={Formstyles.button} onPress={() => this.savedata()}>
                                            <Text style={Formstyles.buttonText1} >{this.props.type}Save</Text>
                                        </TouchableOpacity>

                                    </View>
                                </Content>

                            </Container >
                        );
                        break;
                    }
                case '1':
                    {
                        return (
                            <Container >

                                <Content>
                                    <View styles={Formstyles.container}>


                                        <Dropdown
                                            label='Type'
                                            data={combobox1}
                                        // IfAutorisation={combobox1.selectedIndex() ? '2'}
                                        />
                                        <Text> Choix 2</Text>
                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Username"
                                            selectionColor="#fff"
                                            //onSubmitEditing={()=> this.email.focus()}
                                            onChangeText={(text) => { this.setState({ username: text }) }}

                                        />

                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Email"
                                            selectionColor="#fff"
                                            keyboardType="email-address"
                                            onSubmitEditing={() => this.password.focus()}
                                            onChangeText={(text) => { this.setState({ email: text }) }}
                                        />
                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            onSubmitEditing={() => this.password2.focus()}
                                            onChangeText={(text) => { this.setState({ password: text }) }}
                                            ref={(input) => this.password = input}
                                        />
                                        <TextInput style={Formstyles.FormInput}
                                            underlineColorAndroid='rgba(0,0,0,0)'
                                            placeholder="Verify password"
                                            secureTextEntry={true}
                                            onChangeText={(text) => { this.setState({ password2: text }) }}
                                            ref={(input) => this.password2 = input}
                                        />


                                        <TouchableOpacity style={Formstyles.button} onPress={() => this.savedata()}>
                                            <Text style={Formstyles.buttonText1} >{this.props.type}Save</Text>
                                        </TouchableOpacity>

                                    </View>
                                </Content>

                            </Container >
                        );
                        break;
                    }
                case '2':
                    {
                        return (
                            <Text>Hello it's the authorization</Text>
                        )
                        break;

                    }
                default:
                    {
                        alert('Invalid. Make sure you typed the right data');
                        break;
                    }
            }

        }
*/
        return (


            ////////////////////////////// test
            < View >
                {renderIf(this.state.status)(
                    <Text>
                        I am dynamic text View
              </Text>
                )}

                <TouchableHighlight onPress={() => this.toggleStatus()}>
                    <Text>   touchme </Text>
                </TouchableHighlight>
            </View >
            /* ////////////////////////////// My elements
                      
            */ ////////////////////////////// Blablablah fin de mes éléments
        );



    }
    testContentDropbox() {
        return (
            <Text> I am dynamic text View   </Text>
        );
        console.log('choice quelconque ' + this.state.status);

    }
    toggleStatus() {
        this.setState({
            status: !this.state.status
        });
        console.log('toggle button handler: ' + this.state.status);
    }

    Activate1() {
        this.setState({
            status1: true,
            status2: false
        });
        console.log('loula true w thenya false');
    }
    Activate2() {
        this.setState({
            status1: false,
            status2: true
        });
        console.log('loula false');
    }


    savedata() {
        //save in db with AsyncStorage
        const { username, email, password, password2 } = this.state;
        let myArray = {
            username: username,
            email: email,
            password: password,
            password2: password2

        }
        AsyncStorage.setItem('myArray', JSON.stringify(myArray));

        Keyboard.dismiss();
        alert('Bienvenue ' + username + '. Votre compte a bien été créé.')
        //to get from AsyncStorage
        showData = async () => {
            let myArray = await AsyncStorage.getItem('myArray');
            let d = JSON.parse(myArray);
            alert('Voici votre mail: ' + d.email + ' . Non, je ne sais pas why I\'m displaying it')

        }

        //Go to page image with parameter //navigate('Signin', {name: 'Jane'})
        // { this.props.navigation.navigate('Image', {username : this.state.username} ) }
    }


}