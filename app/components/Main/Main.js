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
        contentComponent: props => <Menu navigation={props.navigation} />

    }
)
