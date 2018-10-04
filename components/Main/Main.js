import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,

} from 'react-native';

import {
    DrawerNavigator,
    DrawerItems,
    SafeAreaView,
} from 'react-navigation';
import Shop from './Shop/Shop';
import {NavigationActions} from 'react-navigation';

export default class Main extends Component {
    // gotoAuthenication() {
    //     const { navigation } = this.props;
    //     navigation.push('AUTHENICATION');
    // }

    // gotoChangeInfo() {
    //     const { navigation } = this.props;
    //     navigation.push('CHANGE_INFO');
    // }

    // gotoOrderHistory() {
    //     const { navigation } = this.props;
    //     navigation.push('ORDER_HISTORY');
    // }

    render() {
        return (
            <MainNavigator />
        )
    }
}

const MainNavigator = DrawerNavigator(
    {
        SHOP: {
            screen: props => <Shop navigation={props.navigation} />
        }
    },
    {
        initialRouteName: 'SHOP',
        contentComponent: props => <MenuControl navigation={props.navigation} />
    }
)

class MenuControl extends Component {
    constructor(props) {
        super(props);
    }
    // gotoAuthenication() {
    //     this.props.navigation.push('AUTHENTICATION');
    // }
    //
    // gotoChangeInfo() {
    //     const { navigation } = this.props;
    //     navigation.push('CHANGE_INFO');
    // }
    //
    // gotoOrderHistory() {
    //     const { navigation } = this.props;
    //     navigation.push('ORDER_HISTORY');
    // }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{paddingTop: 20, flex: 1}}>
                <View style={{backgroundColor: 'lightgrey'}}>
                    <Text style={{padding: 10}} onPress={this.navigateToScreen('AUTHENTICATION')}>
                        Go to Authenication
                    </Text>
                </View>
                <View style={{backgroundColor: 'lightgrey'}}>
                    <Text style={{padding: 10}} onPress={this.navigateToScreen('CHANGE_INFO')}>
                        Go to Change Info
                    </Text>
                </View>
                <View style={{backgroundColor: 'lightgrey'}}>
                    <Text style={{padding: 10}} onPress={this.navigateToScreen('ORDER_HISTORY')}>
                        Go to Order History
                    </Text>
                </View>
            </View>
            //<MenuNavigator />
        )
    }
}

/* const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
); */

/* const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header>
            <Body>
                <Image
                    style={styles.drawerImage}
                    source={{ uri: "https://www.flaticon.com/authors/smashicons" }}
                />
            </Body>
        </Header>
        <DrawerItems {...props} />
    </Container >
) */
/* 
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
 */