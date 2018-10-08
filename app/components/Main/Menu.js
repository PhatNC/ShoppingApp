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
        )
    }
}
