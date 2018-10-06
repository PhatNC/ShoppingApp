import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Icon } from 'react-native-elements'

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import TopBar from './TopBar'

import { Button, Container, Content, Left, Body } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation'

export default class Shop extends Component {
    openMenu() {
        const {navigation} = this.props;
        navigation.openDrawer();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopBar onOpen={() => this.openMenu()} />
                <BottomTabNavigator />
            </View>
        )
    }
}

const BottomTabNavigator = createBottomTabNavigator(
    {
        HOME: {
            screen: Home,
            navigationOptions: () => ({
                title: 'HOME',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="home" size={35} color={tintColor} />
                )
            })
        },
        CART: {
            screen: Cart,
            navigationOptions: () => ({
                title: 'CART',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="shopping-cart" size={35} color={tintColor} />
                )
            })
        },
        SEARCH: {
            screen: Search,
            navigationOptions: () => ({
                title: 'SEARCH',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="search" size={35} color={tintColor} />
                )
            })
        },
        CONTACT: {
            screen: Contact,
            navigationOptions: () => ({
                title: 'CONTACT',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="contacts" size={35} color={tintColor} />
                )
            })
        }
    }, {
        initialRouteName: 'HOME'
    }
)

const TabRoutes = {
    HOME: { screen: Home },
    CART: { screen: Cart },
    SEARCH: { screen: Search },
    CONTACT: { screen: Contact }
}

const TabConfig = {

}