import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ListView } from 'react-native';

import { Icon } from 'react-native-elements'

import ProductItem from './ProductItem';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getProductRequest();
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.header}>
                        <Icon
                            name="arrow-back"
                            size={25} color="black"
                            onPress={() => this.props.navigation.goBack()} />
                        <View style={{ width: 25 }} />
                    </View>
                    {(this.props.products.length > 0)
                        ? <ListView
                            contentContainerStyle={styles.body}
                            enableEmptySections
                            dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.products)}
                            renderRow={product => (
                                <ProductItem product={product} navigation={this.props.navigation} />
                            )}
                        />
                        : <View style={styles.wrapper}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#90A4AE', fontSize: 20 }}>There is no item.</Text>
                            </View>
                        </View>}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 2
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 30
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 15
    },
    body: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        flexWrap: 'wrap',
        // paddingBottom: 5
    },
});
