import React, {
    Component
} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop'

import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { Icon, Button, Container, Header, Content, Left, Body } from 'native-base';

export default class Main extends Component {
    render() {
        return (
            <MainNavigator />
        )
    }
}

const MainNavigator = DrawerNavigator({
    SHOP: { screen: Shop },
    MENU: { screen: Menu }
}, {
        initialRouteName: 'SHOP',
        //contentComponent: CustomDrawerContentComponent
    }
)

const CustomDrawerContentComponent = (props) => (
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
)

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
