import React, {
    Component
} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,

} from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';

import {
    DrawerNavigator,
    DrawerItems,
    SafeAreaView,
} from 'react-navigation'
import { Icon, Button, Container, Header, Content, Left, Body } from 'native-base';

export default class Main extends Component {
      render() {
        return (
            <MainNavigator />
        )
    }
}

const MainNavigator = DrawerNavigator({
    SHOP: { screen: Shop }
}, {
        initialRouteName: 'SHOP',
        contentComponent: props => <MenuControl navigation={props.navigation} />

    }
)

class MenuControl extends Component {
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
        const { navigation } = this.props;
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