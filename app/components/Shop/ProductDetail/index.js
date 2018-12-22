import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, Alert, ListView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { styles } from '../../../styles/styles';

import { addProductToCart } from '../../../containers/CartScreen/action';

class ProductDetail extends Component {
    addToCart = (product) => {
        if (!this.props.authen._id) {
            Alert.alert(
                'Notification!',
                'Please login to use this feature!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
        else {
            this.props.addProductToCart(product);
            Alert.alert(
                'Successfully!',
                'This product has been added to cart.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }

    }

    render() {
        const { navigation: { state: { params: product } } } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={productDetailStyles.cardStyle}>
                    <View style={productDetailStyles.header}>
                        <Icon
                            name="arrow-back"
                            size={25} color="black"
                            onPress={() => this.props.navigation.goBack()} />
                        <Button
                            buttonStyle={{
                                backgroundColor: "#00C853",
                                height: 30,
                                borderRadius: 5,
                            }}
                            iconRight={{
                                name: "shopping-cart",
                                size: 20, color: "white"
                            }}
                            title="ADD TO CART"
                            onPress={() => this.addToCart(product)}
                        />
                        <View />
                    </View>
                    <View style={productDetailStyles.imageContainer}>
                        <ListView
                            horizontal={true}
                            enableEmptySections
                            dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(product.image)}
                            renderRow={item => (
                                <Image source={{ uri: `${item}` }} style={productDetailStyles.productImageStyle} />
                            )}
                        />
                    </View>

                    <View style={productDetailStyles.footer}>
                        <View style={productDetailStyles.titleContainer}>
                            <Text>
                                <Text style={styles.titleText}>{product.name}</Text>
                                <Text style={productDetailStyles.textHighlight}> / </Text>
                                <Text style={styles.priceText}>{product.price},00$</Text>
                            </Text>
                        </View>
                        <ScrollView style={productDetailStyles.descContainer}>
                            <Text style={styles.contentSmallText}>{product.description}</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => dispatch(addProductToCart(product)),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetail);


const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8);
const swiperHeight = swiperWidth;

const productDetailStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        elevation: 3,
    },
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 5,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        borderTopWidth: 2,
        borderTopColor: '#F0F0F0',
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        paddingLeft: 10,
    },
    descContainer: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    descStyle: {
        color: '#AFAFAF',
        textAlign: 'justify',
        fontSize: 15
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginRight: 5,
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});
