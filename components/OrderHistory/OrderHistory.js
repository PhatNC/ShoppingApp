import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class OrderHistory extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#B4B4B4' }}>
                <Text>OrderHistory Component</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
            // <Container>
            //     <Header>
            //         <Left>
            //             <TouchableOpacity
            //                 onPress={() => this.props.navigation.openDrawer()}
            //             >
            //                 <Text>
            //                     Menu
            //         </Text>
            //             </TouchableOpacity>
            //         </Left>
            //     </Header>
            //     <Content contentContainerStyle={{
            //         flex: 1
            //     }}>
            //         <Text>
            //             Order History Component
            //     </Text>
            //     </Content>
            // </Container>
        );
    }
}