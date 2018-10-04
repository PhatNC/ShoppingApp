import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';

import HomeScreen from './Main/Shop/Home/Home';
import CartScreen from './Main/Shop/Cart/Cart';
import ContactScreen from './Main/Shop/Contact/Contact';
import SearchScreen from './Main/Shop/Search/Search';

const AppContentTabNavigator = createMaterialBottomTabNavigator(
    {
        HOME: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: 'HOME',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="home" size={25} color={tintColor} />
                )
            })
        },
        CART: {
            screen: CartScreen,
            navigationOptions: () => ({
                title: 'CART',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="shopping-cart" size={25} color={tintColor} />
                )
            })
        },
        SEARCH: {
            screen: SearchScreen,
            navigationOptions: () => ({
                title: 'SEARCH',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="search" size={25} color={tintColor} />
                )
            })
        },
        CONTACT: {
            screen: ContactScreen,
            navigationOptions: () => ({
                title: 'CONTACT',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon name="contacts" size={25} color={tintColor} />
                )
            })
        }
    }, {
        initialRouteName: 'HOME',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
);

export default AppContentTabNavigator;

// const AppContentStackNavigator = createStackNavigator(
//     {
//         MAIN: {
//             screen: props => <Main navigation={props.navigation} />,
//         },
//         AUTHENTICATION: {
//             screen: props => <Authentication navigation={props.navigation} />
//         },
//         CHANGE_INFO: {
//             screen: props => <ChangeInfo navigation={props.navigation} />
//         },
//         ORDER_HISTORY: {
//             screen: props => <OrderHistory navigation={props.navigation} />
//         }
//     },
//     {
//         initialRouteName: 'MAIN',
//         headerMode: 'none'
//     }
// )