import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

import { createStackNavigator, DrawerItems, createDrawerNavigator } from 'react-navigation';

import { Avatar } from 'react-native-elements';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import SignOut from './Authentication/SignOut';
// import Main from './Main/Main';
import Shop from './Main/Shop/Shop'

StatusBar.setHidden(true);

let isLogin;

export default class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogedIn: false };
    }
    render() {
        const MainJSX = this.state.isLogedIn ? LogedInNavigator : SignInNavigator;
        return (
            <MainJSX isLogedIn={this.state.isLogedIn} />
            // <ApplicationNavigator isLogin={this.state.isLogedIn} />
        )
    }
}

const SignInNavigator = createDrawerNavigator(
    {
        SHOP: {
            path: '/shop',
            screen: Shop
        },
        SIGN_IN: {
            path: '/signin',
            screen: Authentication
        }
    },
    {
        initialRouteName: 'SIGN_IN',
        contentComponent: props => <MenuControl {...props} />,
        backBehavior: 'initialRoute',
        contentOptions: {
            //activeTintColor: '#FFF',
        },
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
)

const LogedInNavigator = createDrawerNavigator(
    {
        SHOP: {
            path: '/shop',
            screen: Shop
        },
        CHANGE_INFO: { screen: ChangeInfo },
        ORDER_HISTORY: { screen: OrderHistory },
        SIGN_OUT: { screen: SignOut },
    },
    {
        initialRouteName: 'SHOP',
        contentComponent: props => <MenuControl {...props} />,
        backBehavior: 'initialRoute',
        contentOptions: {
            //activeTintColor: '#FFF',
        },
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
)

/* ----------------------------- */
/* Control Menu */
class MenuControl extends Component {
    render() {
        const {
            containerStyle,
            profileStyle,
            profileNameStyle,
            profileEmailStyle,
            itemStyle,
        } = styles;

        const logOutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );



        return (
            <View style={containerStyle} >
                <View style={profileStyle}>
                    <Avatar
                        large
                        rounded
                        source={require('../media/img/cat.png')}
                        onPress={() => alert('Profile Information')}
                        activeOpacity={0.7}
                    />
                    <Text style={profileNameStyle}>Shin Seijuro</Text>
                    <Text style={profileEmailStyle}>shinseijuro123@gmail.com</Text>
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
        flex: 2,
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: "#263238",
        padding: 20
    },
    profileNameStyle: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: "#FFF",
        paddingTop: 5
    },
    profileEmailStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: "#FFF",
    },
    itemStyle: {
        padding: 5
        // borderColor: '#FFF',
        // borderBottomWidth: 2
        //borderRadius: 10,
        //backgroundColor: 'rgba(255, 255, 255, 0.6)',
        //margin: 5
    },
    routeManager: {
        flex: 9,
        backgroundColor: '#FFF',
        //paddingLeft: 15,
        //paddingRight: 15,
        //paddingTop: 5
    },
    button: {
        height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        paddingHorizontal: 70
    },
    title: {
        color: '#000',
        fontSize: 20
    }
    // buttonText: {}
})