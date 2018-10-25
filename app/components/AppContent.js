import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet,
} from 'react-native';

import { createStackNavigator, DrawerNavigator, DrawerItems , createDrawerNavigator} from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';
import Shop from './Main/Shop/Shop'
import { Container, Header, Body } from 'native-base';


StatusBar.setHidden(true);

export default class AppContent extends Component {
    render() {
        return (
            <ApplicationNavigator />
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

const ApplicationNavigator = createDrawerNavigator({
    SHOP: { screen: Shop },
    AUTHENICATION: { screen: Authentication },
    CHANGE_INFO: { screen: ChangeInfo },
    ORDER_HISTORY: { screen: OrderHistory }
}, {
        initialRouteName: 'SHOP',
        contentComponent: props => <MenuControl {...props} />

    }
)

class MenuControl extends Component {
    render() {
        const {
            containerStyle,
            imageStyle,
            profileStyle,
            profileTextStyle,
            itemStyle,
        } = styles;
        return (
            <View style={containerStyle} >
                <View style={profileStyle}>
                    <Image
                        style={imageStyle}
                        source={
                            require('../media/img/cat.png')
                        }
                    />
                    <Text style={profileTextStyle}>Shin Seijuro</Text>
                </View>
                <View>
                    <DrawerItems style={itemStyle} {...this.props} />
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerImage: {
        height: 100,
        width: 100,
        borderRadius: 75,
    }
})

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'space-between',
        alignContent: 'space-around',
    },
    imageStyle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 10,
    },
    profileStyle: {
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#263238"
    },
    profileTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: "#FFF"
    },
    itemStyle: {}
})