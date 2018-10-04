import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';

const { height, width } = Dimensions.get('window');

export default class Shop extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={
                    {
                        height: height / 8,
                        alignContent: 'flex-start',
                        justifyContent: 'flex-start',
                        flexDirection: 'row'
                    }}>
                    <Icon
                        name="menu"
                        size={35}
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>
                <BottomTabNavigator />
            </View>
        )
    }
}

// const BottomTabNavigator = createBottomTabNavigator(
//     {
//         HOME: {
//             screen: Home,
//             navigationOptions: () => ({
//                 title: 'HOME',
//                 tabBarIcon: ({ focused, tintColor }) => (
//                     <Icon name="home" size={35} color={tintColor} />
//                 )
//             })
//         },
//         CART: {
//             screen: Cart,
//             navigationOptions: () => ({
//                 title: 'CART',
//                 tabBarIcon: ({ focused, tintColor }) => (
//                     <Icon name="shopping-cart" size={35} color={tintColor} />
//                 )
//             })
//         },
//         SEARCH: {
//             screen: Search,
//             navigationOptions: () => ({
//                 title: 'SEARCH',
//                 tabBarIcon: ({ focused, tintColor }) => (
//                     <Icon name="search" size={35} color={tintColor} />
//                 )
//             })
//         },
//         CONTACT: {
//             screen: Contact,
//             navigationOptions: () => ({
//                 title: 'CONTACT',
//                 tabBarIcon: ({ focused, tintColor }) => (
//                     <Icon name="contacts" size={35} color={tintColor} />
//                 )
//             })
//         }
//     }, {
//         initialRouteName: 'HOME'
//     }
// )

const TabRoutes = {
    HOME: { screen: Home },
    CART: { screen: Cart },
    SEARCH: { screen: Search },
    CONTACT: { screen: Contact }
}

const TabConfig = {

}