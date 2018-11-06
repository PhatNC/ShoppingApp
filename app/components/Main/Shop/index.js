import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';

import { Icon } from 'react-native-elements'

import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import Search from './Search';
import TopBar from './TopBar'
import Discovery from './Discover'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

export default class Shop extends Component {
    // constructor(props) {
    //     super(props);
    //     props.navigation.closeDrawer();
    // }

    openMenu() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        // console.log('=======================SHOP===============================');
        // console.log(this.props);
        // console.log(this.state)
        // console.log('======================================================');
        const ShopNavigator = BottomMaterialTabNavigation(this.props);

        return (
            <View style={{ flex: 1 }}>
                <TopBar onOpen={() => this.openMenu()} />
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
            screen: props => <Discover {...props} {...value} />,
            navigationOptions: () => ({
                title: 'DISCOVER',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        name="store"
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
