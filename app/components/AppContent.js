import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import { createStackNavigator, DrawerItems, createDrawerNavigator } from 'react-navigation';

import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Authentication from '../containers/LoginScreen';
import ChangeInfo from '../containers/InfomationView';
import OrderHistory from '../containers/OrderHistoryView';
import SignOut from './Authentication/SignOut';
import Shop from '../containers/ShopView'

StatusBar.setHidden(true);

export default class AppContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const MainJSX = this.props.isAuthen
            ? LogedInNavigator(this.props)
            : SignInNavigator(this.props);
        return (
            <MainJSX />
        )
    }
}

const SignInNavigator = value => createDrawerNavigator(
    {
        SHOP: {
            path: '/shop',
            screen: props => <Shop {...props} {...value} />,
            navigationOptions: {
                title: 'Shop',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="store"
                        size={20}
                        type="material"
                        color={tintColor}
                    />
                )
            },
        },
        SIGN_IN: {
            path: '/signin',
            screen: props => <Authentication {...props} {...value} />,
            navigationOptions: {
                title: 'Login',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="vpn-key"
                        size={20}
                        type="material"
                        color={tintColor}
                    />
                )
            },
        }
    },
    {
        initialRouteName: 'SHOP',
        contentComponent: props => {
            return <MenuControl {...props} {...value} />
        },
        backBehavior: 'initialRoute',
        contentOptions: {
            //activeTintColor: '#FFF',
        },
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
)

const LogedInNavigator = value => createDrawerNavigator(
    {
        SHOP: {
            path: '/shop',

            screen: props => <Shop {...props} {...value} />,
            navigationOptions: {
                title: 'Shop',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="store"
                        size={20}
                        type="material"
                        color={tintColor}
                    />
                )
            },

        },
        CHANGE_INFO: {
            path: '/changeinfo',
            screen: props => <ChangeInfo {...props} {...value} />,
            navigationOptions: {
                title: 'Account Information',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="person"
                        size={20}
                        type="material"
                        color={tintColor}
                    />
                )
            },
        },
        ORDER_HISTORY: {
            path: '/orderhistory',
            screen: props => <OrderHistory {...props} {...value} />,
            navigationOptions: {
                title: 'Order History',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="library-books"
                        size={20}
                        type="material"
                        color={tintColor}
                    />
                ),
            },
        },
        SIGN_OUT: {
            path: '/signout',
            screen: props => <Authentication {...props} {...value} />,
            navigationOptions: {
                title: 'Logout',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="exit-to-app"
                        size={20}
                        type="material"
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        initialRouteName: 'SHOP',
        contentComponent: (props) => <MenuControl {...props} {...value} />,
        backBehavior: 'initialRoute',
        contentOptions: {
            //activeTintColor: '#FFF',
            inactiveTintColor: '#757575',
            labelStyle: {
                fontFamily: "Sawarabi Mincho Medium",
                fontSize: 12
            }
        },
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
)

const iconSrc = {
    'SHOP': 'store',
    'CHANGE_INFO': 'account',
    'SIGN_IN': 'key',
    'SIGN_OUT': 'key',
    'ORDER_HISTORY': 'history'
}

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
                <ImageBackground
                    source={require('../media/img/cat.png')}
                    style={profileStyle}
                    blurRadius={5}
                    opacity={0.4}
                >
                    <Avatar
                        large
                        rounded
                        source={require('../media/img/cat.png')}
                        containerStyle={{ borderWidth: 1 }}
                        activeOpacity={0.7}
                    />
                    <Text style={profileNameStyle}>Shin Seijuro</Text>
                    <Text
                        style={{
                            fontFamily: "Sawarabi Mincho Medium",
                            fontSize: 13,
                            color: 'white'
                        }}>
                        shin@outlook.com
                    </Text>
                </ImageBackground>

                <View style={styles.routeManager} >
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems
                            {...this.props}
                            itemStyle={itemStyle}
                            onItemPress={({ route, focused }) => {
                                if (focused) {
                                    this.props.navigation.closeDrawer();
                                }
                                if (route.routeName == 'SIGN_OUT') {
                                    this.props.logout();
                                    this.props.navigation.navigate(route.routeName);
                                }
                                else {
                                    this.props.navigation.navigate(route.routeName);
                                }
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
        // flex: 2,
        // justifyContent: 'space-between',
        // alignContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: "#000a12",
        paddingTop: 30,
        padding: 20,
        paddingBottom: 10
    },
    profileNameStyle: {
        fontFamily: "Sawarabi Mincho Medium",
        fontSize: 20,
        color: 'white'
    },
    profileEmailStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: "#FFF",
    },
    itemStyle: {
        // padding: 5
        // borderColor: '#FFF',
        // borderBottomWidth: 2
        //borderRadius: 10,
        //backgroundColor: 'rgba(205, 205, 205, 0.6)',
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
