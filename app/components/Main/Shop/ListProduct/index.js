import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

import { Icon } from 'react-native-elements'

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

export default class ListProduct extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.header}>
                        <Icon
                            name="arrow-back"
                            size={25} color="black"
                            onPress={() => this.props.navigation.goBack()} />
                        <Text style={styles.titleStyle}>SWEET CAKE</Text>
                        <View style={{ width: 25 }} />
                    </View>
                    <View style={styles.productContainer}>
                        <Image style={styles.productImage} source={cake1} />
                        <View style={styles.productInfo}>
                            <Text style={styles.txtName}>Choco Cake</Text>
                            <Text style={styles.txtPrice}>50$</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.txtColor}>Color</Text>
                                <View style={{
                                    backgroundColor: 'black',
                                    height: 20, width: 20,
                                    borderRadius: 10,
                                    borderWidth: 1
                                }} />
                                <TouchableOpacity>
                                    <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <Image style={styles.productImage} source={cake2} />
                        <View style={styles.productInfo}>
                            <Text style={styles.txtName}>Choco Cake</Text>
                            <Text style={styles.txtPrice}>50$</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.txtColor}>Color</Text>
                                <View style={{
                                    backgroundColor: 'black',
                                    height: 20, width: 20,
                                    borderRadius: 10,
                                    borderWidth: 1
                                }} />
                                <TouchableOpacity>
                                    <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <Image style={styles.productImage} source={cake3} />
                        <View style={styles.productInfo}>
                            <Text style={styles.txtName}>Choco Cake</Text>
                            <Text style={styles.txtPrice}>50$</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.txtColor}>Color</Text>
                                <View style={{
                                    backgroundColor: 'black',
                                    height: 20, width: 20,
                                    borderRadius: 10,
                                    borderWidth: 1
                                }} />
                                <TouchableOpacity>
                                    <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <Image style={styles.productImage} source={cake4} />
                        <View style={styles.productInfo}>
                            <Text style={styles.txtName}>Choco Cake</Text>
                            <Text style={styles.txtPrice}>50$</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.txtColor}>Color</Text>
                                <View style={{
                                    backgroundColor: 'black',
                                    height: 20, width: 20,
                                    borderRadius: 10,
                                    borderWidth: 1
                                }} />
                                <TouchableOpacity>
                                    <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <Image style={styles.productImage} source={cake5} />
                        <View style={styles.productInfo}>
                            <Text style={styles.txtName}>Choco Cake</Text>
                            <Text style={styles.txtPrice}>50$</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.txtColor}>Color</Text>
                                <View style={{
                                    backgroundColor: 'black',
                                    height: 20, width: 20,
                                    borderRadius: 10,
                                    borderWidth: 1
                                }} />
                                <TouchableOpacity>
                                    <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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
        fontSize: 20
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
    }
});
