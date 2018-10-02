import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'

import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Authentication from '.././Authentication/Authentication';
import ChangeInfo from '.././ChangeInfo/ChangeInfo';
import OrderHistory from '.././OrderHistory/OrderHistory';

export default class Menu extends Component {
    gotoAuthenication() {
        const { navigation } = this.props;
        navigation.push('AUTHENICATION');
    }

    gotoChangeInfo() {
        const { navigation } = this.props;
        navigation.push('CHANGE_INFO');
    }

    gotoOrderHistory() {
        const { navigation } = this.props;
        navigation.push('ORDER_HISTORY');
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.gotoAuthenication()}>
                    <Text>Go to Authenication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoChangeInfo()}>
                    <Text>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoOrderHistory()}>
                    <Text>Go to Order History</Text>
                </TouchableOpacity>
            </View>
            //<MenuNavigator />
        )
    }
}

/* class MenuControl extends Component {
    render() {
        return (
            <View>
                <Text>Menu Component</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AUTHENICATION')}>
                    <Text>Go to Authenication</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Go to Change Innfo</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Go to Order History</Text>
                </TouchableOpacity>
            </View>
        )
    }
} */
/* 
const MenuNavigator = StackNavigator({
    MENU_CONTROL: { screen: MenuControl },
    AUTHENICATION: { screen: Authentication },
    CHANGE_INFO: { screen: ChangeInfo },
    ORDER_HISTORY: { screen: OrderHistory }
}, {
        headerMode: 'none'
    }) */