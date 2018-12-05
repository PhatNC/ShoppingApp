import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from '../../../../styles/styles';
import { cartStyles } from './styles';

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 2 }
    }

    incQuantity() {
        this.setState({
            count: this.state.count + 1
        })
    }

    desQuantity() {
        this.setState({
            count: this.state.count - 1
        })
    }

    goDetail() {
        this.props.navigation.navigate('PRODUCT_DETAIL')
    }

    render() {
        return (
            <View style={styles.productContainer}>
                <Image source={this.props.src} style={styles.productImage} />
                <View style={cartStyles.mainRight}>
                    <View style={cartStyles.firstRow}>
                        <View style={cartStyles.titleView}>
                            <Text style={styles.titleText}>Darkest Forest Choco Cake</Text>
                        </View>
                        <TouchableOpacity onPress={() => alert('Remove Item')}>
                            <Icon
                                name='close'
                                size={25} color='#969696'
                            />
                        </TouchableOpacity>

                    </View>
                    <View>
                        <Text style={styles.contentText}>Delivery in 2h</Text>
                    </View>
                    <View>
                        <Text style={styles.priceText}>100,00$</Text>
                    </View>
                    <View style={cartStyles.lastRow}>
                        <View style={cartStyles.quantityContainer}>
                            <TouchableOpacity
                                disabled={this.state.count <= 1}
                                style={cartStyles.quantityButton}
                                activeOpacity={1}
                                onPress={() => this.desQuantity()}
                            >
                                <Icon
                                    name='minus'
                                    size={15} color='#37474F'
                                />
                            </TouchableOpacity>
                            <View style={cartStyles.quantityText}>
                                <Text>
                                    {this.state.count}
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={cartStyles.quantityButton}
                                onPress={() => this.incQuantity()}
                            >
                                <Icon
                                    name='plus'
                                    size={15} color='#37474F'
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.goDetail()}>
                            <Text style={styles.highlightText}>Show more detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}
