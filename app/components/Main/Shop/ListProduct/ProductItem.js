import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from '../../../../styles/styles';
import { listStyles } from './styles';

export default class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 2 }
    }

    goDetail(product) {
        this.props.navigation.navigate('PRODUCT_DETAIL', product)
    }

    render() {
        return (
            <View style={styles.productContainer}>
                <Image source={{ uri: `${this.props.product.image[0]}` }} style={styles.productImage} />
                <View style={listStyles.mainRight}>
                    <View style={listStyles.firstRow}>
                        <Text style={styles.titleText}>{this.props.product.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.contentText}>Delivery in 2h</Text>
                    </View>
                    <View>
                        <Text style={styles.priceText}>{this.props.product.price},00$</Text>
                    </View>
                    <View style={listStyles.lastRow}>
                        <Text style={styles.txtColor}>Flavor</Text>
                        <Text style={styles.txtColor}>{this.props.product.flavor}</Text>
                        <TouchableOpacity onPress={() => this.goDetail(this.props.product)}>
                            <Text style={styles.highlightText}>Show more detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}
