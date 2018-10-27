import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import { createStackNavigator, DrawerNavigator, DrawerItems, createDrawerNavigator } from 'react-navigation';

import { Avatar } from 'react-native-elements';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';
import Shop from './Main/Shop/Shop'

StatusBar.setHidden(true);

export default class AppContent extends Component {
    render() {
        return (
            <ApplicationNavigator />
        )
    }
}

const ApplicationNavigator = createDrawerNavigator({
    SHOP: { screen: Shop },
    AUTHENICATION: { screen: Authentication },
    CHANGE_INFO: { screen: ChangeInfo },
    ORDER_HISTORY: { screen: OrderHistory }
}, {
        initialRouteName: 'SHOP',
        contentComponent: props => <MenuControl {...props} />,
        backBehavior: 'initialRoute',
        contentOptions: {
            //activeTintColor: '#FFF',
        }
    }
)

class MenuControl extends Component {
    render() {
        const {
            containerStyle,
            profileStyle,
            profileTextStyle,
            itemStyle,
        } = styles;
        return (
            <View style={containerStyle} >
                <View style={profileStyle}>
                    <Avatar
                        xlarge
                        rounded
                        source={require('../media/img/cat.png')}
                        onPress={() => alert('Profile Information')}
                        activeOpacity={0.7}
                    />
                    <Text style={profileTextStyle}>Shin Seijuro</Text>
                </View>

                <View style={styles.routeManager} >
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems
                            {...this.props}
                            itemStyle={itemStyle}
                            onItemPress={({ route, focused }) => {
                                if (focused) {
                                    this.props.navigation.closeDrawer();
                                }
                                this.props.navigation.navigate(route.routeName);
                            }}

                        />
                    </SafeAreaView>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        // justifyContent: 'space-between',
        // alignContent: 'space-around',
        backgroundColor: '#394a59',
        flex: 1
    },
    profileStyle: {
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#263238",
        padding: 20
    },
    profileTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: "#FFF"
    },
    itemStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        // borderColor: '#FFF',
        // borderBottomWidth: 2
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        margin: 5
    },
    routeManager: {
        // backgroundColor: '#FFF',
        padding: 5
    },
    // buttonText: {}
})