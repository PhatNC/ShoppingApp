import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';

StatusBar.setHidden(true);

export default class AppContent extends Component {
    render() {
        return (
            <AppNavigator />
        )
    }
}

const AppNavigator = StackNavigator({
    MAIN: { screen: Main },
    AUTHENICATION: { screen: Authentication },
    CHANGE_INFO: { screen: ChangeInfo },
    ORDER_HISTORY: { screen: OrderHistory }
}, {
        headerMode: 'none'
    }
)