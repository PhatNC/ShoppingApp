import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet,
} from 'react-native';

import { createStackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

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
            // <AppContentStackNavigator />
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

const ApplicationNavigator = DrawerNavigator({
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
        return (
            <Container>
                <Header>
                    {/* <Image
                        style={styles.drawerImage}
                        source={require('E:\Giao Tiep Nguoi May\2018.10.04\ShoppingApp\components\Main\user.jpg')}
                    /> */}
                    <Text>Profile Image Here</Text> 
                </Header>
                <Body>
                    <DrawerItems {...this.props} />
                </Body>
            </Container>
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