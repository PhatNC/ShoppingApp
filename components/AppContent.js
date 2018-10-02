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
            screen: props => <Main navigation={props.navigation} />,
        },
        AUTHENTICATION: {
            screen: props => <Authentication navigation={props.navigation} />
        },
        CHANGE_INFO: {
            screen: props => <ChangeInfo navigation={props.navigation} />
        },
        ORDER_HISTORY: {
            screen: props => <OrderHistory navigation={props.navigation} />
        }
    },
    {
        initialRouteName: 'MAIN',
        headerMode: 'none'
    }
)