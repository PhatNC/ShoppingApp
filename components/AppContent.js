import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';


StatusBar.setHidden(true);

export default class AppContent extends Component {
    render() {
        return (
            <AppContentStackNavigator />
        )
    }
}

const AppContentStackNavigator = createStackNavigator(
    {
        MAIN: {
            screen: Main,
            navigationOptions: ({ navigation }) => ({
                title: 'MAIN',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: 'blue' }
            })
        },
        AUTHENICATION: {
            screen: Authentication,
            navigationOptions: ({ navigation }) => ({
                title: 'AUTHENICATION',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: 'blue' }
            })
        },
        CHANGE_INFO: {
            screen: ChangeInfo,
            navigationOptions: ({ navigation }) => ({
                title: 'CHANGE INFO',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: 'blue' }
            })
        },
        ORDER_HISTORY: {
            screen: OrderHistory,
            navigationOptions: ({ navigation }) => ({
                title: 'ORDER HISTORY',
                headerTitleStyle: { color: 'white' },
                headerStyle: { backgroundColor: 'blue' }
            })
        }
    },
    {
        initialRouteName: 'MAIN',
        headerMode: 'none'
    }
)