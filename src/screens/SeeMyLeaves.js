import React, { Component } from 'react';
import { TextInput, FlatList, StyleSheet, Text, ImageBackground, View, Image, StatusBar, YellowBox, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Container, Header, Title, Content, Footer, FooterTab, Icon } from 'native-base';

import Liststyles from '../styles/ListStyles';
import Formstyles from '../styles/FormStyles';

class MyLeavesScreen extends React.Component {
    static navigationOptions = {
        title: 'My Leaves',
      };

    state = {
        seed: 1,
        page: 1,
        users: [],
        isLoading: false,
        isRefreshing: false,
    };

    handleRefresh = () => {
        this.setState({
            seed: this.state.seed + 1,
            isRefreshing: true,
        }, () => {
            this.loadUsers();
        });
    };

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.loadUsers();
        });
    };

    componentDidMount() {

        this.loadUsers();
    };

    loadUsers = () => {
        const { users, seed, page } = this.state;
        this.setState({ isLoading: true });

        fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    users: page === 1 ? res.results : [...users, ...res.results],
                    isRefreshing: false,
                });
            })
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        const { users, isRefreshing } = this.state;

        return (
            <Container >
            
            <Header>
                <Title>See My Leaves</Title>
            </Header>
                <Content>
                    <View style={Liststyles.scene}>
                       
                        <FlatList
                            data={users}
                            renderItem={({ item }) => (
                                <ListItem
                                    roundAvatar
                                    title={item.name.first}
                                    subtitle={item.email}
                                    leftAvatar={{ source: { uri: item.picture.medium } }}
                                />
                            )}
                            keyExtractor={i => i.email}
                            refreshing={isRefreshing}
                            onRefresh={this.handleRefresh}
                            onEndReached={this.handleLoadMore}
                            onEndThreshold={0}
                        />
                    </View>
                </Content>

             
            </Container >
        )
    }
    GoToLeaves() {
        { this.props.navigation.navigate('AddLeave', { username: this.state.username }) }

    }
}


export default MyLeavesScreen;