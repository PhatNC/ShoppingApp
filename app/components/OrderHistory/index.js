import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView,
    ListView,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class OrderHistory extends Component {
    componentWillMount() {
        this.props.getOrderRequest(this.props.authen._id );
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Icon
                        name="arrow-back"
                        size={25} color="white"
                        onPress={() => this.props.navigation.goBack()} />
                    <Text style={styles.headerTitle}>Order History</Text>
                    <View />
                </View>
                <View style={styles.body}>
                    <ListView
                        // contentContainerStyle={styles.body}
                        enableEmptySections
                        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.orders)}
                        renderRow={order => (
                            <View style={styles.orderRow} >
                                <View style={styles.item}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{order.accountID}</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                    <Text style={{ color: '#C21C70' }}>{order.updateDate}</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{order.status}</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{order.totalPrice},00$</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View >
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#000a12', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1: {
        color: '#9A9A9A',
        fontWeight: 'bold'
    }
});