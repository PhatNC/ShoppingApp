import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';

import { Icon } from 'react-native-elements'

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import TopBar from './TopBar'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

export default class Shop extends Component {
    openMenu() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopBar onOpen={() => this.openMenu()} />
                <BottomMaterialTabNavigation />
            </View>
        )
    }
}

const BottomMaterialTabNavigation = createMaterialBottomTabNavigator(
    {
        HOME: {
            screen: Home,
            navigationOptions: () => ({
                //title: 'HOME',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        name="home"
                        size={20} color={tintColor}
                    />
                )
            })
        },
        CART: {
            screen: Cart,
            navigationOptions: () => ({
                title: 'CART',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        name="shopping-cart"
                        size={20} color={tintColor}
                    />
                )
            })
        },
        SEARCH: {
            screen: Search,
            navigationOptions: () => ({
                title: 'SEARCH',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        name="search"
                        size={20} color={tintColor}
                    />
                )
            })
        },
        CONTACT: {
            screen: Contact,
            navigationOptions: () => ({
                title: 'CONTACT',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        name="contacts"
                        size={20} color={tintColor}
                    />
                )
            })
        },
    },
    {
        initialRouteName: 'HOME',
        activeColor: '#f0edf6',
        inactiveColor: '#FFF',
        barStyle: {
            backgroundColor: '#24292E'
        }
    }
)
