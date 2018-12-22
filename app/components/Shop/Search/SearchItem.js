import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from '../../../styles/styles';
import { searchStyles } from './styles';

export default class SearchItem extends Component {
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

    goDetail(product) {
        this.props.navigation.navigate('PRODUCT_DETAIL',product)
    }

    render() {
        return (
            <View style={styles.productContainer}>
                <Image source={{ uri: `${this.props.item.image[0]}` }} style={styles.productImage} />
                <View style={searchStyles.mainRight}>
                    <View style={searchStyles.firstRow}>
                        <Text style={styles.titleText}>{this.props.item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.contentSmallText}>Delivery in 2h</Text>
                    </View>
                    <View>
                        <Text style={styles.priceText}>{this.props.item.price},00$</Text>
                    </View>
                    <View style={searchStyles.lastRow}>
                        <Text style={styles.txtColor}>Flavor</Text>
                        <Text style={styles.txtColor}>{this.props.item.flavor}</Text>
                        <TouchableOpacity onPress={() => this.goDetail(this.props.item)}>
                            <Text style={styles.highlightText}>Show more detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}
