import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';

import { Icon } from 'react-native-elements'

import Home from './Home';
import Cart from '../../containers/CartScreen';
import Contact from './Contact';
import Search from '../../containers/SeachView';
import TopBar from './TopBar'
import Tinder from '../../containers/Tinder'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartArray: []
        };
    }

    openMenu() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        const ShopNavigator = BottomMaterialTabNavigation(this.props);

        return (
            <View style={{ flex: 1 }}>
                {/* <TopBar onOpen={() => this.openMenu()} /> */}
                <ShopNavigator />
            </View>
        )
    }
}

const BottomMaterialTabNavigation = value => createMaterialBottomTabNavigator(
    {
        HOME: {
            screen: props => <Home {...props} {...value} />,
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
            screen: props => <Cart {...props} {...value} />,
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
            screen: props => <Search {...props} {...value} />,
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
        DISCOVER: {
            screen: props => <Tinder {...props} {...value} />,
            navigationOptions: () => ({
                title: 'DISCOVER',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        name="collections"
                        size={20} color={tintColor}
                    />
                )
            })
        },
        CONTACT: {
            screen: props => <Contact {...props} {...value} />,
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
        activeColor: '#FFFFFF',
        inactiveColor: '#808080',
        barStyle: {
            backgroundColor: '#24292E'
        }
    }
)
